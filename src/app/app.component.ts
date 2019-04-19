import { Component, Input } from '@angular/core';
import { DataService } from './data.service';
import { Sport, Match, OddType, Odd } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})
export class AppComponent {
  sports: Sport[] = [];
  odds: Odd[] = [];
  oddTypes: OddType[] = [];
  private oddNames: string[] = []; 
  currentMatches: Match[] = [];

  constructor(private dataService: DataService){}

  ngOnInit(){
    this.getTreeData();
    this.getOddTypes();
  }

  getOddTypes() {
    this.dataService.getOddTypes()
      .subscribe((response => {
        this.oddTypes = response['data'].sort(this.byPriorityAsc);
        console.log(this.oddTypes);
        this.oddTypes.forEach(oddType => {
          oddType.odds.sort(this.byPriorityAsc);
          oddType.odds.forEach(odd => {
            odd.type = oddType.name;
            this.odds.push(odd);
          });
        });

        this.odds.forEach(o => {
          this.oddNames.push(o.id);
        });
    
        console.log("names")
        console.log(this.oddNames);
    }));  
    
    

  }

  byPriorityAsc(a, b) {
    return a.priority - b.priority;
  }

  private getTreeData(){
    this.dataService.getTreeData()
    .subscribe((response => {
        this.sports = response['data'].sort((a, b) =>  b - a);
    }));
  }
  
  getCurrentLeagueMatches($event){
    var id = $event;
    this.dataService.getLeagueMatches(id)
    .subscribe(response => {
      this.currentMatches = response['data'];
      
      console.log(this.currentMatches);

      this.getCurrentLeagueOdds();

    });
    
  }

  getCurrentLeagueOdds(){
    let newarr = [];
    // console.log("odds");
    // console.log(this.odds);
    this.currentMatches.forEach((match, index) => {
      newarr.push(new Array<any>());
      for(let matchOddType in match.odds){
        var odds = match.odds[matchOddType];
        for(let o in odds){
          newarr[index].push(odds[o]);
        }
        // this.oddTypes.forEach(oddType => {  //foreach bets
        //   oddType.odds.forEach(odd => {
        //     console.log(odd);
        //     this.matchOdds.push(odd)
        //   });
        // });

      }
      


    });

    console.log(newarr);

    // this.odds.forEach(o => {
    //   //this.oddNames.push(o.id);
    //   if(o.id === ){}
    // });
    this.odds.forEach(o => {
      newarr.forEach(m => {
        m.forEach(element => {
          if(o.id === element.name){
            debugger;
          }
        });
      });
    });
  }
}
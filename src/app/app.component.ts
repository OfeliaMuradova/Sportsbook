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
  private resultSet = [];
  sports: Sport[] = [];
  odds: Odd[] = [];
  oddTypes: OddType[] = [];
  currentMatches: Match[] = [];
  hasMatches: boolean = false;

  constructor(private dataService: DataService){}

  ngOnInit(){
    this.getTreeData();
    this.getOddTypes();
  }

  getOddTypes() {
    this.dataService.getOddTypes()
      .subscribe((response => {
        this.oddTypes = response['data'].sort(this.byPriorityAsc);
        this.oddTypes.forEach(oddType => {
          oddType.odds.sort(this.byPriorityAsc);
          oddType.odds.forEach(odd => {
            odd.type = oddType.index;
            this.odds.push(odd);
          });
        });
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
      this.hasMatches = true;
      console.log(this.currentMatches);

      this.getCurrentLeagueOdds();

    },
    (error) => {
      // console.log(error);
      this.currentMatches = [];
      this.hasMatches = false;
    });
    
  }

  getCurrentLeagueOdds(){
    this.resultSet = [];

    this.currentMatches.forEach((match, matchIndex) => {
      this.resultSet.push(new Array<any>());
      for(let matchOddType in match.odds){
        let matchOdds = match.odds[matchOddType];
        this.odds.forEach((oddName, index) => {
          if(matchOddType === oddName.type){
            for(let matchOddndex in matchOdds){
              let matchOdd = matchOdds[matchOddndex];
                if(matchOdd.name === oddName.id)
                  this.resultSet[matchIndex][index] = matchOdd.value;
            }
          }
        });

      }
    });

    this.resultSet.forEach((result, j)=> {
      result[j].push(); //push matches and info
    });

    console.log(this.resultSet);

    // this.currentMatches.forEach((match, i) => {
    //   this.resultSet.forEach((result, j)=> {
    //     console.log(this.resultSet[i][j]);
    //   });
    // });
    

  }
}
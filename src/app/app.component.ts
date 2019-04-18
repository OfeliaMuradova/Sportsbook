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
  currentMatches: Match[] = [];

  constructor(private dataService: DataService){}

  ngOnInit(){
    this.getTreeData();
    this.getOddTypes();
  }

  getOddTypes() {
    this.dataService.getOddTypes()
      .subscribe((response => {
        var oddTypes: OddType[] = response['data'].sort(this.byPriorityAsc);
        console.log(oddTypes);
        oddTypes.forEach(oddType => {
          oddType.odds.sort(this.byPriorityAsc);
          oddType.odds.forEach(odd => {
            odd.type = oddType.name;
            this.odds.push(odd);
          });
        });
        console.log(this.odds);
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
    console.log("odds");
    this.currentMatches.forEach(match => {
      for(var oddType in match.odds){
        var odds = match.odds[oddType];
        for(var oddKey in odds){
          var odd = odds[oddKey];
          console.log(odd);
        }
      }
    });
  }
    

}
import { Component } from '@angular/core';
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

  private getTreeData(){
    this.dataService.getTreeData()
    .subscribe(response => {
        this.sports = response['data'].sort((a, b) =>  b - a);
    },
    (error) => {
      console.log(error.message);
    });
  }

  private getOddTypes() {
    this.dataService.getOddTypes()
      .subscribe(response => {
        this.oddTypes = response['data'].sort(this.byPriorityAsc);
        this.getOddsByOddTypes();
    },
    (error) => {
      console.log(error.message);
    });  
    
  }

  private getOddsByOddTypes() {
    this.oddTypes.forEach(oddType => {
      oddType.odds.sort(this.byPriorityAsc);
      oddType.odds.forEach(odd => {
        odd.type = oddType.index;
        this.odds.push(odd);
      });
    });
  }

  getCurrentLeagueMatches($event){
    var id = $event;
    this.dataService.getLeagueMatches(id)
    .subscribe(response => {
      this.hasMatches = true;
      this.currentMatches = response['data'];
      this.getCurrentLeagueOdds();
    },
    (error) => {
      this.hasMatches = false;
      this.currentMatches = [];
      console.log(error.message);
    });
  }

  getCurrentLeagueOdds(){
    this.resultSet = [];

    this.currentMatches.forEach((match, matchIndex) => {
      this.pushNewResultArray();
      for(let matchOddType in match.odds){
        let matchOdds = match.odds[matchOddType];
        this.odds.forEach((odd, index) => {
          if(matchOddType === odd.type){
            for(let matchOddIndex in matchOdds){
              let matchOdd = matchOdds[matchOddIndex];
              if(matchOdd.name === odd.id)
                this.resultSet[matchIndex][index] = matchOdd.value;
            }
          }
        });
      }
    });
  }

  private pushNewResultArray() {
    this.resultSet.push(new Array<number>(this.odds.length));
  }
  
  private byPriorityAsc(a, b) {
    return a.priority - b.priority;
  }

}
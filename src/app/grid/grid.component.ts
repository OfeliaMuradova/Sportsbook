import { Component, OnInit, Input } from '@angular/core';
import { League, Sport } from '../types';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() sports: Sport[] = [];
  private leagues: League[] = [];
  private currentLeagueId: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.currentLeagueId = this.route.snapshot.params['id'];
    
    //todo: GET ID
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.currentLeagueId = +params.get('id');
        console.log(this.currentLeagueId);
      }
    )
    
  }
  
  private getAllLeagues(){
    this.sports.forEach((sport) => {
      sport.countries.forEach((country) => {
        country.leagues.forEach((league) => {
          this.leagues.push(league);
        })
      });
    });
  }

}
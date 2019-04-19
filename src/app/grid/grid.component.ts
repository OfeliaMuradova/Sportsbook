import { Component, OnInit, Input } from '@angular/core';
import { Odd, Match } from '../types';
import format from 'date-fns/format'

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  //todo: initially has some default value sent from the server
  @Input() odds: Odd[];
  @Input() currentMatches: Match[];

  constructor() { }

  ngOnInit() { }

  formatDate(date: string): string {
    return format(date, 'MM-DD HH:mm');
  }

  // private getAllLeagues(){
  //   this.sports.forEach((sport) => {
  //     sport.countries.forEach((country) => {
  //       country.leagues.forEach((league) => {
  //         this.leagues.push(league);
  //       })
  //     });
  //   });
  // }

}
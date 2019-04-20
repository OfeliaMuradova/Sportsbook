import { Component, OnInit, Input } from '@angular/core';
import { Odd, Match } from '../types';
import format from 'date-fns/format'

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() odds: Odd[];
  //ideally this initially should have some default value sent from the server
  @Input() currentMatches: Match[];
  @Input() hasMatches: boolean;
  @Input() resultSet: [];

  constructor() { }

  ngOnInit() { }

  formatDate(date: string): string {
    return format(date, 'MM-DD HH:mm');
  }

  ngAfterViewInit(){
    console.log("view");
  }
}
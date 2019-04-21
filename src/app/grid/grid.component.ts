import { Component, OnInit, Input } from '@angular/core';
import { Odd, Match } from '../types';
import format from 'date-fns/format'

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() currentMatches: Match[];
  @Input() odds: Odd[];
  @Input() hasMatches: boolean;
  @Input() resultSet: [];

  constructor() { }

  ngOnInit() { }

  private formatDate(date: string): string {
    return format(date, 'MM-DD HH:mm');
  }

}
import { Component, OnInit, Input, Output } from '@angular/core';
import { Sport } from '../types';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit {
  @Input() sports: Sport[] = [];
  @Output() onLeagueClicked = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() { }

  emitLeagueData(id){
    this.onLeagueClicked.emit(id);
  }

  private byAlphabetAsc(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
  }
  
}

import { Component, OnInit, Input } from '@angular/core';
import { Sport, League } from '../types';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit {
  @Input() sports: Sport[] = [];
  //@Input() leagues: League[] = [];
  currentLeagueId: number = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {}

    byAlphabetAsc(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    }
  

}

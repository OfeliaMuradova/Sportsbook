import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sport, Match, OddType } from './types';

@Injectable()
export class DataService{
    constructor(private http: HttpClient){}

    ngOnInit() { }

    getTreeData() {
        return this.http.get<Sport[]>('assets/tree.json');
    }

    getLeagueMatches(id: number){
        return this.http.get<Match[]>('assets/matches/league_' + id + '.json');
    }

    getOddTypes(){
        return this.http.get<OddType[]>('assets/layout.json');
    }
}
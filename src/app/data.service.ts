import { Sport, Country, League, OddType } from './types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService{
    constructor(private http: HttpClient){}

    ngOnInit() { }

    getTreeData() {
        return this.http.get<Sport[]>('assets/tree.json');
    }

    getLeagueMatches(id: number){
        //todo: load a default grid
        //todo: check if such file exists
        return this.http.get('assets/matches/league_' + id + '.json');
    }

    getOddTypes(){
        return this.http.get<OddType[]>('assets/layout.json');
    }

    // getSportCountries(sportId: number): Country[]{
    //     if(this.sports){
    //         this.sports.forEach(sport => {
    //             if(sport.id === sportId)
    //                 return this.countries = sport.countries; 
    //         });
    //     } else 
    //         return [];
    // }
    
    // getCountryLeagues(countryId: number): League[]{
    //     if(this.countries){
    //         this.countries.forEach(country => {
    //             if(country.id === countryId)
    //                 return this.leagues = country.leagues; 
    //         });
    //     } else
    //         return [];
    // }


}
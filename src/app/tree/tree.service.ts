import { Sport, Country, League } from '../types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TreeService{
    constructor(private http: HttpClient){}

    ngOnInit() { }

    getTreeData() {
        return this.http.get<Sport[]>('assets/tree.json');
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
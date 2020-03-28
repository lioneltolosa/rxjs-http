import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { USERS } from '../mock-data';

@Injectable({
    providedIn: 'root'
})
export class CountryService {

    constructor(private http: HttpClient) { }

    getCountries(page: Number) {
        return of(USERS)
    }
}

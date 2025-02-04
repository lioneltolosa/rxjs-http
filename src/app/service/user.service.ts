import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck, map } from 'rxjs/operators';
import { Observable, empty, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { USERS } from '../mock-data';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    public baseUrl = 'https://api.github.com/search/repositories';
    public searchResults: any;

    constructor(private http: HttpClient) { }
    
    getSearchEntries(term: any) {
        if(term === "") {
            return empty()
            console.log('Not Define');
        } else {
            let params = { q: term }
            return this.http.get(this.baseUrl, {params})
                .pipe(
                    pluck('items')
                )
        }
    }

    getEntries(term) {
        this.getSearchEntries(term)
    }

    getUsers() {
        return this.http.get('https://api.github.com/users?per_page=30');
    }

    getUsersWithAjaxGetJson() {
        const url = 'https://api.github.com/users?per_page=30';

        return ajax.getJSON(url);
    }

    getMock() {
        return of(USERS)
    }
}

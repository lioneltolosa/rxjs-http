import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck, map } from 'rxjs/operators';
import { Observable, empty } from 'rxjs';


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
}

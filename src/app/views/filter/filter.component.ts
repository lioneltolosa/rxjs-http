import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

    states$: Observable<any>;
    filteredStates$: Observable<any>;
    filter: FormControl;
    filter$: Observable<string>;

    constructor() {}

    filterStates() {
        const url = 'https://jsonplaceholder.typicode.com/users';

        this.states$ = ajax.getJSON(url);
        this.filter = new FormControl('');
        this.filter$ = this.filter.valueChanges.pipe(startWith(''));
        this.filteredStates$ = combineLatest(this.states$, this.filter$)
            .pipe(
                map(([states, filterString]) => states.filter(state => state.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1))
        );
    }
 
    ngOnInit(): void {
        this.filterStates();
    }
}

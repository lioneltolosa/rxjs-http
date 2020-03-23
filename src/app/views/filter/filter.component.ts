import { Component, OnInit } from '@angular/core';
import { Observable, of, combineLatest } from 'rxjs';
import { State, states } from 'src/states';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

    states$: Observable<State[]>;
    filteredStates$: Observable<State[]>;
    filter: FormControl;
    filter$: Observable<string>;

    constructor() {}

    filterStates() {
        this.states$ = of(states);
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

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Observable, combineLatest } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
    selector: 'app-table-list',
    templateUrl: './table-list.component.html',
    styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {

    public userResults: any;

    states$: Observable<any>;
    filteredStates$: Observable<any>;
    filter: FormControl;
    filter$: Observable<string>;


    constructor(private userService: UserService) { }

    filterStates() {
        const url = 'https://api.github.com/users?per_page=30';

        this.states$ = this.userService.getUsersWithAjaxGetJson();

        console.log('this.states$', this.states$);

        this.filter = new FormControl('');
        this.filter$ = this.filter.valueChanges.pipe(startWith(''));
        this.filteredStates$ = combineLatest(this.states$, this.filter$)
            .pipe(
                map(([states, filterString]) => states
                    .filter(state => state.login.toLowerCase().indexOf(filterString.toLowerCase()) !== -1))
        );
    }

    ngOnInit(): void {
        this.filterStates();
    }

}

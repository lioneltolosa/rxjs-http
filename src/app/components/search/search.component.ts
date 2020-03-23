import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Subject, throwError } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { map, debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    @Input() i : any;
    @Output() searhResultsUsers = new EventEmitter<any>();


    public searchTerm = new Subject<string>();
    public loading: boolean;
    searhResults: any;
    public paginationElements: any;
    public errorMessage: any;

    public searchForm = new FormGroup({
        search: new FormControl('', Validators.required)
    });

    constructor(private userService: UserService) {}
    
    search() {
        this.searchTerm.pipe(
            map((event: any) => {
                console.log('event', event.target.value);
                return event.target.value;
            }),
            debounceTime(400),
            distinctUntilChanged(),
            switchMap( term => {
                console.log('Busqueda de', term);
                this.loading = true;
                return this.userService.getSearchEntries(term);
            }),
            catchError(e => {
                console.log(e);
                this.loading = false;
                this.errorMessage = e.message;
                return throwError(e);
            }),
        ).subscribe((users: any) => {
            this.searhResults = users;
            this.searhResultsUsers.emit(this.searhResults)
            console.log('users', users);
        })
    }

    ngOnInit(): void {
        this.search();
    }
}

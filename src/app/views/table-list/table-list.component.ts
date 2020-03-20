import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
    selector: 'app-table-list',
    templateUrl: './table-list.component.html',
    styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {

    public userResults: any;

    constructor(private userService: UserService) { }

    getUsers() {
        this.userService.getUsers()
            .subscribe( users => {
                this.userResults = users
                console.log(users);
            })
    }

    ngOnInit(): void {
        this.getUsers();
    }

}

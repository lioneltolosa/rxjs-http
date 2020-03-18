import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    users: any;

    constructor(private userService: UserService) { }

    getUsers() {
        this.userService.getUsers()
            .subscribe( users => {
                console.log(users);
                this.users = users;
            })
    }

    ngOnInit(): void {
        this.getUsers()
    }

}

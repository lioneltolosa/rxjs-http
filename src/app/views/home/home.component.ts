import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    count: number = 0;
    offset: number = 0;
    limit: number = 20;

    

    activePage:number = 0;  
    constructor() { }

    ngOnInit(): void {
    }

    
  
    displayActivePage(activePageNumber:number){  
        this.activePage = activePageNumber  
    }

}

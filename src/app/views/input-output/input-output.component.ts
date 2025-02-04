import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-input-output',
    templateUrl: './input-output.component.html',
    styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {

    items = ['item1', 'item2', 'item3', 'item4'];

    constructor() { }
    
    ngOnInit(): void {
    }

    addItem(newItem: string) {
        this.items.push(newItem);
    }

}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-output',
    templateUrl: './output.component.html',
    styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

    @Output() newItemEvent = new EventEmitter<string>();

    constructor() { }

    addNewItem(value: string) {
        this.newItemEvent.emit(value);
    }

    ngOnInit(): void {
    }

}

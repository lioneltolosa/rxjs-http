import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-repositories',
  templateUrl: './table-repositories.component.html',
  styleUrls: ['./table-repositories.component.scss']
})
export class TableRepositoriesComponent implements OnInit {

  @Input() i: any;

  constructor() { }

  ngOnInit(): void {
  }

}

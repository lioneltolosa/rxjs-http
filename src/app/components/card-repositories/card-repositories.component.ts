import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-repositories',
  templateUrl: './card-repositories.component.html',
  styleUrls: ['./card-repositories.component.scss']
})
export class CardRepositoriesComponent implements OnInit {

  @Input() i: any;

  constructor() { }

  ngOnInit(): void {
  }

}

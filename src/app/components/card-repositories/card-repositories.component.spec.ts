import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRepositoriesComponent } from './card-repositories.component';

describe('CardRepositoriesComponent', () => {
  let component: CardRepositoriesComponent;
  let fixture: ComponentFixture<CardRepositoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRepositoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

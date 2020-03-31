import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrimbaListComponent } from './scrimba-list.component';

describe('ScrimbaListComponent', () => {
  let component: ScrimbaListComponent;
  let fixture: ComponentFixture<ScrimbaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrimbaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrimbaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

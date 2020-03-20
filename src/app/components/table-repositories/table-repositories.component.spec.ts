import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRepositoriesComponent } from './table-repositories.component';

describe('TableRepositoriesComponent', () => {
  let component: TableRepositoriesComponent;
  let fixture: ComponentFixture<TableRepositoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRepositoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

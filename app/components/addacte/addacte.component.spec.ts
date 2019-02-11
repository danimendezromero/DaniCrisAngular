import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddacteComponent } from './addacte.component';

describe('AddacteComponent', () => {
  let component: AddacteComponent;
  let fixture: ComponentFixture<AddacteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddacteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddacteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

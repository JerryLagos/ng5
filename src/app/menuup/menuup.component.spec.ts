import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuupComponent } from './menuup.component';

describe('MenuupComponent', () => {
  let component: MenuupComponent;
  let fixture: ComponentFixture<MenuupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

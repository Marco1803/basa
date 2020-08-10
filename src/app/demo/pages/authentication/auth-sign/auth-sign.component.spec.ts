import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSignComponent } from './auth-sign.component';

describe('AuthSignComponent', () => {
  let component: AuthSignComponent;
  let fixture: ComponentFixture<AuthSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupComponentComponent } from './startup-component.component';

describe('StartupComponentComponent', () => {
  let component: StartupComponentComponent;
  let fixture: ComponentFixture<StartupComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

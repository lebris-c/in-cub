import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantComponentComponent } from './consultant-component.component';

describe('ConsultantComponentComponent', () => {
  let component: ConsultantComponentComponent;
  let fixture: ComponentFixture<ConsultantComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

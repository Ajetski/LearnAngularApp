import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxControlPanelComponent } from './box-control-panel.component';

describe('BoxControlPanelComponent', () => {
  let component: BoxControlPanelComponent;
  let fixture: ComponentFixture<BoxControlPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxControlPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

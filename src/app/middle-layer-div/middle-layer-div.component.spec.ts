import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleLayerDivComponent } from './middle-layer-div.component';

describe('MiddleLayerDivComponent', () => {
  let component: MiddleLayerDivComponent;
  let fixture: ComponentFixture<MiddleLayerDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleLayerDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleLayerDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

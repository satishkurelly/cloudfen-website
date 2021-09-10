import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurfocusComponent } from './ourfocus.component';

describe('OurfocusComponent', () => {
  let component: OurfocusComponent;
  let fixture: ComponentFixture<OurfocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurfocusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurfocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

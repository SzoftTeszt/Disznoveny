import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovenyekComponent } from './novenyek.component';

describe('NovenyekComponent', () => {
  let component: NovenyekComponent;
  let fixture: ComponentFixture<NovenyekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovenyekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovenyekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

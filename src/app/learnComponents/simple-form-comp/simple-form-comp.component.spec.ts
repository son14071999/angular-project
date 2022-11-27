import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFormCompComponent } from './simple-form-comp.component';

describe('SimpleFormCompComponent', () => {
  let component: SimpleFormCompComponent;
  let fixture: ComponentFixture<SimpleFormCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleFormCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleFormCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesageComponent } from './mesage.component';

describe('MesageComponent', () => {
  let component: MesageComponent;
  let fixture: ComponentFixture<MesageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

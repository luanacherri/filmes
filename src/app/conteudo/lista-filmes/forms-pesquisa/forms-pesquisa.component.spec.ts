import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsPesquisaComponent } from './forms-pesquisa.component';

describe('FormsPesquisaComponent', () => {
  let component: FormsPesquisaComponent;
  let fixture: ComponentFixture<FormsPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

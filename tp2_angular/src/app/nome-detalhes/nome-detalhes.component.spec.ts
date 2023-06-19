import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomeDetalhesComponent } from './nome-detalhes.component';

describe('NomeDetalhesComponent', () => {
  let component: NomeDetalhesComponent;
  let fixture: ComponentFixture<NomeDetalhesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NomeDetalhesComponent]
    });
    fixture = TestBed.createComponent(NomeDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagensComponent } from './imagens.component';

describe('ImagensComponent', () => {
  let component: ImagensComponent;
  let fixture: ComponentFixture<ImagensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagensComponent]
    });
    fixture = TestBed.createComponent(ImagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

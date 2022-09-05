import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsplashApiComponent } from './unsplash-api.component';

describe('UnsplashApiComponent', () => {
  let component: UnsplashApiComponent;
  let fixture: ComponentFixture<UnsplashApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsplashApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnsplashApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

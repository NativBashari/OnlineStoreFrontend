import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsPageComponent } from './cms-page.component';

describe('CmsPageComponent', () => {
  let component: CmsPageComponent;
  let fixture: ComponentFixture<CmsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsStatusComponent } from './campaigns-status.component';

describe('CampaignsStatusComponent', () => {
  let component: CampaignsStatusComponent;
  let fixture: ComponentFixture<CampaignsStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampaignsStatusComponent]
    });
    fixture = TestBed.createComponent(CampaignsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignActionsComponent } from './campaign-actions.component';

describe('CampaignActionsComponent', () => {
  let component: CampaignActionsComponent;
  let fixture: ComponentFixture<CampaignActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampaignActionsComponent]
    });
    fixture = TestBed.createComponent(CampaignActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../campaign.service';
import { Router } from '@angular/router';
import { Campaign } from '../campaign';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {

  campaigns: Campaign[];

  constructor(
    private campaignService: CampaignService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getCampaigns();
  }

  private getCampaigns() {
    this.campaignService.getCampaignList().subscribe(data => {
      this.campaigns = data;
    })
  }

  campaignActions(id: number){
    this.router.navigate(['campaign-actions', id])
  }






}

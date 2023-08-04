import { Component, NgModule, OnInit } from '@angular/core';
import { CampaignService } from '../campaign.service';
import { Router } from '@angular/router';
import { Campaign } from '../campaign';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit{


  campaign: Campaign = new Campaign;

  constructor(
    private campaignService: CampaignService,
    private router: Router,
    ){}


  ngOnInit() {
  }

  saveCampaign(){
    this.campaignService.createCampaign(this.campaign).subscribe( data => {
      console.log(data);
    },
      error => console.log(error)
    );
  }


  goToCampaignList(){
    this.router.navigate(['/campaigns'])
  }

  onSubmit(){
    console.log(this.campaign);
    this.saveCampaign();
    this.goToCampaignList();
  }


}

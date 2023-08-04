import { Component, OnInit } from '@angular/core';
import { Campaign } from '../campaign';
import { CampaignService } from '../campaign.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-campaign-actions',
  templateUrl: './campaign-actions.component.html',
  styleUrls: ['./campaign-actions.component.css']
})
export class CampaignActionsComponent implements OnInit{


  campaign: Campaign = new Campaign();
  id: number;


  constructor(
    private campaignService: CampaignService,
    private route: ActivatedRoute,
    private router: Router
  ){}


  ngOnInit() {
    
    this.campaign = new Campaign();

    this.id = this.route.snapshot.params['id'];

    this.campaignService.getCampaignById(this.id)
      .subscribe(data => {
        console.log(data);
        this.campaign = data;
      }, error => console.log(error)
      );
  }

  makeCampaignActive(){
    this.campaignService.makeCampaignActive(this.id,this.campaign)
      .subscribe(data => {
        console.log(data);
        this.campaign = new Campaign();
      }, error => console.log(error)
      );
      this.goToCampaignsList();
  }

  makeCampaignDeactive(){
    this.campaignService.makeCampaignDeactive(this.id,this.campaign)
      .subscribe(data => {
        console.log(data);
        this.campaign = new Campaign();
        this.goToCampaignsList();
      }, error => console.log(error)
      );
      this.goToCampaignsList();

  }

  goToCampaignsList(){
    this.router.navigateByUrl('/campaigns');
  }

  deleteCampaign(){
    this.campaignService.deleteCampaign(this.id).subscribe(data => {
      console.log(data);
      this.goToCampaignsList();
    })
  }


}

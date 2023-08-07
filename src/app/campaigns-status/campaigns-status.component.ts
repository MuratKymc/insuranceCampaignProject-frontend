import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CampaignService } from '../campaign.service';


@Component({
  selector: 'app-campaigns-status',
  templateUrl: './campaigns-status.component.html',
  styleUrls: ['./campaigns-status.component.css']
})
export class CampaignsStatusComponent implements OnInit {
  

  campaignsStatus: any;
  
  
  constructor(
    private campaignService: CampaignService,
    private router: Router,

  ){}  


  ngOnInit() {
    this.getStatus();
  }


  private getStatus() {
    this.campaignService.getCampaignsStatus().subscribe(data => {
      this.campaignsStatus = data;
    })
  }

}

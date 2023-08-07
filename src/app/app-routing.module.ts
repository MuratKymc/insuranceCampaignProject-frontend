import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CampaignListComponent } from "./campaign-list/campaign-list.component";
import { CreateCampaignComponent } from "./create-campaign/create-campaign.component";
import { CampaignActionsComponent } from "./campaign-actions/campaign-actions.component";
import { CampaignsStatusComponent } from "./campaigns-status/campaigns-status.component";


const routes: Routes = [
    {path: 'campaigns', component: CampaignListComponent},
    {path: 'create-campaign', component: CreateCampaignComponent},
    {path: 'campaign-actions/:id', component: CampaignActionsComponent},
    {path: 'campaigns-status', component: CampaignsStatusComponent},
    {path: '', redirectTo:'campaigns', pathMatch: 'full'}

];


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

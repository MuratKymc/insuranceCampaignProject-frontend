import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Campaign } from './campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {


  private baseURL = "http://localhost:8080/api/campaignsApp/campaigns"


  constructor(private httpClient: HttpClient) { }


  getCampaignList(): Observable<Campaign[]>{
    return this.httpClient.get<Campaign[]>(`${this.baseURL}`)
  }

  createCampaign(campaign: Campaign): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,campaign);
  }

  getCampaignById(id: number): Observable<Campaign>{
    return this.httpClient.get<Campaign>(`${this.baseURL}/id/${id}`)
  }


  makeCampaignActive(id:number, campaign: Campaign): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/activate/${id}`, campaign);
  }


  makeCampaignDeactive(id:number, campaign: Campaign): Observable<Object>{

    return this.httpClient.put(`${this.baseURL}/deactivate/${id}`, campaign);

  }


  deleteCampaign(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }

  getCampaignsStatus(): Observable<Object[][]>{
    return this.httpClient.get<Object[][]>(`${this.baseURL}/statistics`)
  }

}

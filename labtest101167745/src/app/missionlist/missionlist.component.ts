import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mission } from '../models/mission';
import { HttpService } from '../network/http.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
})
export class MissionlistComponent implements OnInit {

  missions: mission[];
  missionDetails: mission[];
  constructor(private http: HttpClient, private hhtpService: HttpService) {
    this.missions = [];
    this.missionDetails = [];

  }

  ngOnInit(): void {
    this.getMission();
  }

  getMission(){
    this.http.get<any>('https://api.spacexdata.com/v3/launches').subscribe(
      response =>{
        this.missions = response;
      }
    )
  }

  goToDetails(event: any){
    this.hhtpService.sendGetRequestByID(event)
      .subscribe((res: any) => {
        this.missionDetails = res
    })
  }
}


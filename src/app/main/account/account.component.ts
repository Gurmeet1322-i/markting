import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/common/alert-service/alert-service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(
    private alertService:AlertService
  ) { }

  ngOnInit(): void {
  }

  enterAmount(){
    this.alertService.promtBox().then(res=>{

    }).catch(err=>
      {
        
      })
  }
}

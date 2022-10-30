import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  launches_list = [];
  loadingIndicator: boolean = false;

  constructor(
    private _commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.get_all_launches();
  }

  get_all_launches() {
    this.loadingIndicator = true;
    const payload = {
    };
    this._commonService.get_all_launches(payload).subscribe(res => {
      this.loadingIndicator = false;
      this.launches_list = res;
    })
  }

}

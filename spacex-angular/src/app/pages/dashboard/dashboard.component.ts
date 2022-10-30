import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  launches_list = [];
  loadingIndicator: boolean = false;
  filter_present: boolean = false;
  constructor(
    private _commonService: CommonService,
    private _activatedRoute: ActivatedRoute

  ) {
    this._activatedRoute.queryParams.subscribe(res => {
      console.log(res);
      this.filter_present = false;
      if (res['date_filter'] && res['launch_filter'] == undefined) {
        this.filter_present = true;
        const payload = {
          start: res['start_date'],
          end: res['end_date']
        }
        this.get_all_launches(payload);
      }
      if (res['launch_filter'] && res['date_filter'] == undefined) {
        this.filter_present = true;
        const payload = {
          launch_success: res['launch_filter'],
        }
        this.get_all_launches(payload);
      }
      if (res['launch_filter'] && res['date_filter']) {
        this.filter_present = true;
        const payload = {
          launch_success: false,
          start: res['start_date'],
          end: res['end_date']
        }
        this.get_all_launches(payload);
      }
    })
  }

  ngOnInit(): void {
    if(!this.filter_present) {
      this.get_all_launches({});
    }
  }

  get_all_launches(payload: any) {
    this.loadingIndicator = true;
    this._commonService.get_all_launches(payload).subscribe(res => {
      this.loadingIndicator = false;
      this.launches_list = res;
    })
  }

}

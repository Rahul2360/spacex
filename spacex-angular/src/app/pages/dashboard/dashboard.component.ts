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

  launch_filter_map: any = {
    'success': true,
    'failed': false,
    'upcoming': null
  }
  constructor(
    private _commonService: CommonService,
    private _activatedRoute: ActivatedRoute

  ) {
    this._activatedRoute.queryParams.subscribe(res => {
      console.log(res);
      if (Object.keys(res).length == 0) {
        this.get_all_launches({});
      }
      if (res['date_filter'] && res['launch_filter'] == undefined) {
        const payload = {
          start: res['start_date'],
          end: res['end_date']
        }
        this.get_all_launches(payload);
      }
      if (res['launch_filter'] && res['date_filter'] == undefined) {
        const payload = {
          launch_success: this.launch_filter_map[res['launch_filter']]
        }
        if (this.launch_filter_map[res['launch_filter']] == null) {
          this.get_upcoming_launches({})
        } else {
          this.get_all_launches(payload);
        }
      }
      if (res['launch_filter'] && res['date_filter']) {
        const payload = {
          launch_success: this.launch_filter_map[res['launch_filter']],
          start: res['start_date'],
          end: res['end_date']
        }
        this.get_all_launches(payload);
      }
    })
  }

  ngOnInit(): void {
  }

  get_all_launches(payload: any) {
    this.loadingIndicator = true;
    this._commonService.get_all_launches(payload).subscribe(res => {
      this.loadingIndicator = false;
      this.launches_list = res;
    })
  }

  get_upcoming_launches(payload: any) {
    this.loadingIndicator = true;
    this._commonService.get_upcoming_launches(payload).subscribe(res => {
      this.loadingIndicator = false;
      this.launches_list = res;
    })
  }
}

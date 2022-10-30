import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faCalendar, faFilter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  faCalendar = faCalendar;
  faFilter = faFilter;
  current_filter: string = 'all';
  date_filter_map: any = {
    '3': 'Past 3 months',
    '6': 'Past 6 months',
    '12': 'Past Year',
    'all': 'All'
  }
  launch_filter_map: any = {
    'all': 'All Launches',
    'upcoming': 'Upcoming Launches',
    'success': 'Successful Launches',
    'failed': 'Failed Launches',
  }
  current_launch_filter = 'all'

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.queryParams.subscribe(res => {
      this.current_filter = 'all';
      this.current_launch_filter = 'all';
      if (res['date_filter'] && res['launch_filter'] == undefined) {
        this.current_filter = res['date_filter'];
      }
      if (res['launch_filter'] && res['date_filter'] == undefined) {
        this.current_launch_filter = res['launch_filter'];
      }
      if (res['launch_filter'] && res['date_filter']) {
        this.current_launch_filter = res['launch_filter'];
        this.current_filter = res['date_filter'];

      }
    })
  }

  ngOnInit(): void {
  }

  date_conversion(date: any) {
    const date_obj = new Date(date);
    return date_obj.getFullYear() + '-' + (date_obj.getMonth() + 1) + '-' + date_obj.getDate();
  }

  apply_launch_filter(_case: string) {
    this.current_launch_filter = _case;
    switch (_case) {
      case 'success':
        this._router.navigate(
          ['/dashboard'],
          {
            queryParams: { launch_filter: this.current_launch_filter },
            queryParamsHandling: 'merge',
          },

        );
        break;
      case 'failed':
        this._router.navigate(
          ['/dashboard'],
          {
            queryParams: { launch_filter: this.current_launch_filter },
            queryParamsHandling: 'merge',
          }
        );
        break;
      case 'upcoming':
        this._router.navigate(
          ['/dashboard'],
          {
            queryParams: { launch_filter: this.current_launch_filter },
            queryParamsHandling: 'merge',
          }
        );
        break;
      case 'all':
        this._router.navigate(
          ['/dashboard']
        );
        break;
    }
  }

  apply_date_filter(_case: string) {
    const today = new Date();
    let temp_date = new Date();
    this.current_filter = _case;
    switch (_case) {
      case '3':
        temp_date.setMonth(temp_date.getMonth() - 3);
        this._router.navigate(
          ['/dashboard'],
          {
            queryParams: { date_filter: this.current_filter, start_date: this.date_conversion(today), end_date: this.date_conversion(temp_date) },
            queryParamsHandling: 'merge',
          }
        );
        break;
      case '6':
        temp_date.setMonth(temp_date.getMonth() - 6);
        this._router.navigate(
          ['/dashboard'],
          {
            queryParams: { date_filter: this.current_filter, start_date: this.date_conversion(today), end_date: this.date_conversion(temp_date) },
            queryParamsHandling: 'merge',
          }
        );
        break;
      case '12':
        temp_date.setMonth(temp_date.getMonth() - 12);
        this._router.navigate(
          ['/dashboard'],
          {
            queryParams: { date_filter: this.current_filter, start_date: this.date_conversion(today), end_date: this.date_conversion(temp_date) },
            queryParamsHandling: 'merge',
          }
        );
        break;
      case 'all':
        this._router.navigate(
          ['/dashboard']
        );
        break;
    }
  }
}

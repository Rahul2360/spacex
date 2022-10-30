import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { launch_status_color } from '../const';
interface Columns {
  prop: string;
  name: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() table_data: any[] = [];
  @Input() loadingIndicator: boolean = false;
  @Input() limit: number = 12;

  columns: Columns[] = [
    { prop: '', name: 'No.' },
    { prop: '', name: 'Launched (UTC)' },
    { prop: '', name: 'Location' },
    { prop: '', name: 'Mission' },
    { prop: '', name: 'Orbit' },
    { prop: '', name: 'Launch Status' },
    { prop: '', name: 'Rocket' }
  ]
  start_index = 0;
  end_index = 0;
  launch_status_color = launch_status_color;

  currentPage: number = 0;
  selected_row: any = {};

  constructor(
    private spinner: NgxSpinnerService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['loadingIndicator']) {
      if (changes['loadingIndicator'].currentValue) {
        this.spinner.show()
      } else {
        this.spinner.hide();
      }
    }
    if (changes['table_data']) {
      this.end_index = this.limit;
    }
  }

  ngOnInit(): void {
  }

  pagination_event(event: any) {
    this.currentPage = event.page_number
    this.start_index = event.page_number * this.limit;
    this.end_index = event.page_number * this.limit + this.limit;
  }

  view_details(index: number) {
    this.selected_row = this.table_data[index];
  }

}

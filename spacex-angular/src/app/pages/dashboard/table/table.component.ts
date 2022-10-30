import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
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
  @Input() limit: number = 10;

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
  launch_status_color = {
    'success': {
      foreground: '#03543f',
      background: '#def7ec'
    },
    'upcoming': {
      foreground: '#92400f',
      background: '#fef3c7'
    },
    'failed': {
      foreground: '#981b1c',
      background: '#fde2e1'
    }
  }

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

}

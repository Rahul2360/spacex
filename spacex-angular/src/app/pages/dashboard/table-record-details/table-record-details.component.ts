import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { launch_status_color } from '../const';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faWikipediaW } from '@fortawesome/free-brands-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
declare var $: any;

@Component({
  selector: 'app-table-record-details',
  templateUrl: './table-record-details.component.html',
  styleUrls: ['./table-record-details.component.scss']
})
export class TableRecordDetailsComponent implements OnInit,OnChanges {

  @Input() launch_details: any = {};

  // record_details: any[] = [
  //   { prop: 'flight_number', name: 'Flight Number' },
  //   { prop: 'mission_name', name: 'Mission Name' },
  //   { prop: 'rocket.rocket_type', name: 'Rocket Type' },
  //   { prop: 'rocket_name', name: 'Rocket Name' },
  //   { prop: 'second_stage.payloads[0].manufacturer', name: 'Manufacturer' },
  //   { prop: 'second_stage.payloads[0].nationality', name: 'Nationality' },
  //   { prop: 'launch_date_utc', name: 'Launch Date' },
  //   { prop: 'second_stage.payloads[0].payload_type', name: 'Payload Type' },
  //   { prop: 'second_stage.payloads[0].orbit', name: 'Orbit' },
  //   { prop: 'launch_site.site_name', name: 'Launch Site' }
  // ]
  launch_status_color = launch_status_color;
  constructor(
    private library: FaIconLibrary
  ) { 
    library.addIcons(faYoutube, faWikipediaW, faRocket);
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['launch_details']) {
      if(Object.keys(changes['launch_details'].currentValue).length) {
        this.open_modal();
      }
    }
  }

  ngOnInit(): void {
  }

  open_modal() {
    $('#launch-details').modal('show',{ backdrop: 'static', keyboard: false });
  }

}

import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { faStepBackward,faAngleLeft,faStepForward,faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() per_page_records: number = 10;
  @Input() total_records: number = 10;

  @Output() pagination_event: EventEmitter<any> = new EventEmitter<any>();  

  faStepBackward = faStepBackward;
  faAngleLeft = faAngleLeft;
  faStepForward = faStepForward;
  faAngleRight = faAngleRight;
  page = {
    size: 0,
    totalElements: 0,
    totalPages: 0,
    pageNumber: 0,
  }
  page_num_list:any = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['total_records']) {
      this.page.size = this.per_page_records;
      this.page.totalPages = Math.ceil(this.total_records / this.per_page_records)
      this.page_num_list = Array(this.page.totalPages).fill(0).map((x, i) => i);
      this.page.totalElements = this.total_records;
    }
  }

  setPage(pageInfo: any) {
    this.page.pageNumber = pageInfo.offset;
    this.pagination_event.emit({page_number:this.page.pageNumber})
  }

  onChangePage(value: string) {
    this.setPage({ offset: parseInt(value) })
  }

}

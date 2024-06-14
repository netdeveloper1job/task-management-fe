import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bootstrap-table',
  templateUrl: './bootstrap-table.component.html',
  styleUrls: ['./bootstrap-table.component.scss'],
})
export class BootstrapTableComponent {
  @Input() dataSource: any = [];
  @Input() columns: any = [];
  @Input() bodyTemplate: any;
  @Input() theme: string;
  @Input() headerTemplate: any;
  @Input() pagination: boolean;

  paginationConfig = {
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: this.dataSource?.length ?? 0,
  };

  ngOnChanges() {
    this.paginationConfig = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.dataSource?.length ?? 0,
    };
  }

  pageChanged(event: any) {
    this.paginationConfig.currentPage = event;
  }
}

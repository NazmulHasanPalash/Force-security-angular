import { Component, OnInit, enableProdMode } from '@angular/core';
import { ApiDxListService, Service } from 'src/app/service/api-dx-list.service';
if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
@Component({
  selector: 'app-dx-tree-list',
  templateUrl: './dx-tree-list.component.html',
  styleUrls: ['./dx-tree-list.component.css'],
  providers: [Service],

})
export class DxTreeListComponent implements OnInit {
  employees: ApiDxListService[];

  lookupData: any;


  constructor(service: Service) {
    this.employees = service.getEmployees();

    this.lookupData = {
      store: this.employees,
      sort: 'Full_Name',
    };
  }


  ngOnInit(): void {
  }
  editorPreparing(e: any) {
    if (e.dataField === 'Head_ID' && e.row.data.ID === 1) {
      e.cancel = true;
    }
  }

  initNewRow(e: any) {
    e.data.Head_ID = 1;
  }
}



import { Component, OnInit, enableProdMode } from '@angular/core';
import { Service } from 'src/app/service/data-api.service';
import { DataApiService } from 'src/app/service/data-api.service';
if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
@Component({
  selector: 'app-dx-grid',
  templateUrl: './dx-grid.component.html',
  styleUrls: ['./dx-grid.component.css'],
  providers: [Service],
  preserveWhitespaces: true,


})
export class DxGridComponent implements OnInit {
  employees: DataApiService[];


  constructor(service: Service) {
    this.employees = service.getEmployees();

  }
  calculateCellValue(data: any) {
    return [data.Title, data.FirstName, data.LastName].join(' ');
  }

  ngOnInit(): void {
  }

}

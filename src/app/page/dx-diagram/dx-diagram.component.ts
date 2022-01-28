import { Component, OnInit } from '@angular/core';
import ArrayStore from 'devextreme/data/array_store';
import { ComplaintsWithPercent, Service } from 'src/app/service/diagram-api.service';

@Component({
  templateUrl: './dx-diagram.component.html',
  styleUrls: ['./dx-diagram.component.css'],
  providers: [Service],
  selector: 'demo-app',
})
export class DxDiagramComponent implements OnInit {
  dataSource!: ComplaintsWithPercent[];


  constructor(service: Service) {
    this.dataSource = service.getComplaintsData();

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  customizeTooltip = (info: any) => ({
    html: `<div><div class='tooltip-header'>${info.argumentText}</div>`
      + '<div class=\'tooltip-body\'><div class=\'series-name\'>'
      + `<span class='top-series-name'>${info.points[0].seriesName}</span>`
      + ': </div><div class=\'value-text\'>'
      + `<span class='top-series-value'>${info.points[0].valueText}</span>`
      + '</div><div class=\'series-name\'>'
      + `<span class='bottom-series-name'>${info.points[1].seriesName}</span>`
      + ': </div><div class=\'value-text\'>'
      + `<span class='bottom-series-value'>${info.points[1].valueText}</span>`
      + '% </div></div></div>',
  });

  customizeLabelText = (info: any) => `${info.valueText}%`;
}


;










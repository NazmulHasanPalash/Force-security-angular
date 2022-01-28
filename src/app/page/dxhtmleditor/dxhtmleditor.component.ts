import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service/html-editor-api.service';
import {
  DxHtmlEditorComponent,
  DxHtmlEditorModule,
  DxPopupComponent,
  DxPopupModule,
} from 'devextreme-angular';

@Component({
  selector: 'app-dxhtmleditor',
  templateUrl: './dxhtmleditor.component.html',
  styleUrls: ['./dxhtmleditor.component.css'],
  providers: [Service],

})
export class DxhtmleditorComponent implements OnInit {
  editorValue: string;

  popupVisible: boolean = false;

  toolbarButtonOptions: any = {
    text: 'Show markup',
    stylingMode: 'text',
    onClick: () => this.popupVisible = true,
  };


  constructor(service: Service) {
    this.editorValue = service.getMarkup();

  }

  ngOnInit(): void {
  }

}

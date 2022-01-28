import { TestBed } from '@angular/core/testing';

import { HtmlEditorApiService } from './html-editor-api.service';

describe('HtmlEditorApiService', () => {
  let service: HtmlEditorApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtmlEditorApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

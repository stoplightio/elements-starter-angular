import { Component } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
})
export class DocsComponent {
  workspace = 'https://elements.stoplight.io';
  project = 'studio-demo';
  basePath = environment.basePath ? `${environment.basePath}/docs` : 'docs';
}

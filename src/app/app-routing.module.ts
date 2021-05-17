import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NgbPaginationModule, 
  NgbAlertModule, 
  NgbModule,
  NgbCarousel,
  NgbModalModule
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({

  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    NgbPaginationModule,
  ],exports:[
    CommonModule,
    NgbAlertModule,
    NgbModule,
    NgbPaginationModule,
    NgbCarousel,
    NgbModalModule
  ]
})
export class BootstrapModule { }

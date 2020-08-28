import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoCollectRoutingModule } from './video-collect-routing.module';
import { VideoCollectComponent } from './video-collect.component';
import { CommonModulesModule } from '../modules/common-modules/common-modules.module';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';


@NgModule({
  declarations: [VideoCollectComponent],
  imports: [
    CommonModule,
    VideoCollectRoutingModule,
    CommonModulesModule,
    NgxSpinnerModule
  ],
  providers: [NgxSpinnerService]
})
export class VideoCollectModule { }

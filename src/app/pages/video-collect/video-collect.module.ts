import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoCollectRoutingModule } from './video-collect-routing.module';
import { VideoCollectComponent } from './video-collect.component';
import { CommonModulesModule } from '../modules/common-modules/common-modules.module';


@NgModule({
  declarations: [VideoCollectComponent],
  imports: [
    CommonModule,
    VideoCollectRoutingModule,
    CommonModulesModule
  ]
})
export class VideoCollectModule { }

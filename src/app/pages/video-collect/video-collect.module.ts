import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoCollectRoutingModule } from './video-collect-routing.module';
import { VideoCollectComponent } from './video-collect.component';


@NgModule({
  declarations: [VideoCollectComponent],
  imports: [
    CommonModule,
    VideoCollectRoutingModule
  ]
})
export class VideoCollectModule { }

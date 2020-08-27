import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoHomeRoutingModule } from './video-home-routing.module';
import { VideoHomeComponent } from './video-home.component';


@NgModule({
  declarations: [VideoHomeComponent],
  imports: [
    CommonModule,
    VideoHomeRoutingModule
  ]
})
export class VideoHomeModule { }

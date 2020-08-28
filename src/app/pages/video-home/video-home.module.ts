import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoHomeRoutingModule } from './video-home-routing.module';
import { VideoHomeComponent } from './video-home.component';
import { CommonModulesModule } from '../modules/common-modules/common-modules.module';


@NgModule({
  declarations: [VideoHomeComponent],
  imports: [
    CommonModule,
    VideoHomeRoutingModule,
    CommonModulesModule
  ]
})
export class VideoHomeModule { }

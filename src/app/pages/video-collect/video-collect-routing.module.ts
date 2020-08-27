import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoCollectComponent } from './video-collect.component';


const routes: Routes = [
  { path: '', component: VideoCollectComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoCollectRoutingModule { }

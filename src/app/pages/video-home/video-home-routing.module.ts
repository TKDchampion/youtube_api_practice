import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoHomeComponent } from './video-home.component';


const routes: Routes = [
  { path: '', component: VideoHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoHomeRoutingModule { }

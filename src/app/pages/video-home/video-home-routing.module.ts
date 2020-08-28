import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoHomeComponent } from './video-home.component';
import { PlayerComponent } from '../modules/common-modules/player/player.component';


const routes: Routes = [
  { path: '', component: VideoHomeComponent },
  { path: 'player', component: PlayerComponent },
  { path: 'player/:id', component: PlayerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoHomeRoutingModule { }

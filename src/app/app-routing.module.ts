import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListGameComponent} from "./components/list-game/list-game.component";
import {DetailGameComponent} from "./components/detail-game/detail-game.component";

const routes: Routes = [
  { path: '', component: ListGameComponent },
  { path: ':id', component: DetailGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchHistoryComponent } from './launch-history/launch-history.component';


const routes: Routes = [
  { path: '', redirectTo: '/launch-history', pathMatch: 'full' },
  { path: 'launch-history', component: LaunchHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    // AuthGuard
  ]
})
export class AppRoutingModule { }

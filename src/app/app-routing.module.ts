import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdventureDetailsComponent } from './components/adventure-details/adventure-details.component';
import { AdventureGridComponent } from './components/adventure-grid/adventure-grid.component';

const routes: Routes = [
  {path: '', component: AdventureGridComponent},
  {path: 'adventure/:id', component: AdventureDetailsComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

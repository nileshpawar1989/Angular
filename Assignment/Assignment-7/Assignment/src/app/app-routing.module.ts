import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnologyComponent } from './technology/technology.component';
import { BookComponent } from './book/book.component';
import { WrongPageComponent } from './wrong-page/wrong-page.component';

const routes: Routes = [
  { path: '', component:TechnologyComponent},
  {path : 'book', component:BookComponent},
  {path : 'technology' ,component:TechnologyComponent},
  {path : '**', component:WrongPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

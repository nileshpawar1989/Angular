import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment84';
  sname:string;

  fun(event:any)
  {
    this.sname = (<HTMLInputElement>event.target).value;
  }
}

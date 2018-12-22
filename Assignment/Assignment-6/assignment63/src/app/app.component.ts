import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clickMessage = 'Marvellous Infosystem';

  fun() {
    this.clickMessage = 'Educating for Better tomorrow';
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textMessage = 'Marvellous Infosystems';
  upper(){
    this.textMessage= this.textMessage.toUpperCase();
  }

  lower(){
    this.textMessage= this.textMessage.toLowerCase();
  }
}

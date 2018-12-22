import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  p { color: red;} 
  input { color: blue;}
  `]
})
export class AppComponent {
  sText = 'Marvellous Infosystems.';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  toSupplyMe() {
    location.href = 'https://app.supplyme.net';
  }
  call() {
    location.href = 'tel:0508875140';
  }
  shareApp() {
    let WhatsAppMesage = '';
    WhatsAppMesage = ' https://api.whatsapp.com/send?text=SupplyME ' +
      ' אפליקציה לניהול ספקים באופן חכם מהיר יעיל תוך חיסכון משמעותי בהוצאות ' +
      ' נסה עכשיו בחינם !' + ' %0A ' + ' https://supplyme.net ';
    location.href = WhatsAppMesage;


  }

}

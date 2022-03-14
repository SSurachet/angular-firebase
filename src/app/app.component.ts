import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-firebase';

  items: Observable<any[]>;

  constructor(firebaseService: FirebaseService) {
    this.items = firebaseService.getItems();
  }
}

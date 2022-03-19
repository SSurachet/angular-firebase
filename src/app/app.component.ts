import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-firebase';

  user = {
    email: "",
    password: "",
  };

  name: string = "";
  items: Observable<any[]>;
  // item: Observable<any>;

  constructor(
    private firebaseService: FirebaseService,
    private authService: AuthenticationService
  ) {
    this.items = firebaseService.getItems();
    // this.items = firebaseService.queryItems("test");
    // this.item = firebaseService.getItem("test");
  }

  public async SignUp() {
    await this.authService.EmailSignUp(this.user.email, this.user.password);
  }

  public async SignIn() {
    let success = false;

    try {
      await this.authService.EmailSignIn(this.user.email, this.user.password);
      success = true;
    }
    catch (ex) {
      console.error(ex);
    }

    if (success) {
      console.log(this.authService.GetCurrentUser());
      alert("Sign-In success.");
    }
    else {
      alert("Sign-In fail");
    }
  }

  public create() {
    const doc = this.firebaseService.getItemDoc("test");
    this.firebaseService.createItem(doc, this.name);
  }

  public update() {
    const doc = this.firebaseService.getItemDoc("test");
    this.firebaseService.updateItem(doc, this.name);
  }
  public delete() {
    const doc = this.firebaseService.getItemDoc("test");
    this.firebaseService.deleteItem(doc);
  }
}

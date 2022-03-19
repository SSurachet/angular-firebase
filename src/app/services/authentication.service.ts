import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private auth: Auth
  ) { }

  public async EmailSignUp(email: string, password: string): Promise<void> {
    const credential = await createUserWithEmailAndPassword(this.auth, email, password);

    await updateProfile(credential.user, { displayName: credential.user.displayName });
    await sendEmailVerification(credential.user);
  }

  public async EmailSignIn(email: string, password: string): Promise<any> {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  public async GetCurrentUser() {
    return this.auth.currentUser;
  }
}
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { auth } from 'firebaseui';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.page.html',
  styleUrls: ['./login-modal.page.scss'],
})
export class LoginModalPage implements OnInit {

  private static signInCallback: () => void;

  private ui: firebaseui.auth.AuthUI;

  constructor(private modalController: ModalController, private router: Router, private afAuth: AngularFireAuth) {

    LoginModalPage.signInCallback = () => {
      this.close();
      // this.router.navigate(['/home'], { replaceUrl: true }); 
    }
  }

  public static signInSuccess(authResult, redirectUrl): boolean {
    console.log('after sign in');
    LoginModalPage.signInCallback();

    // return false;
    return true;
  }

  ngOnInit() {
    this.ui = new auth.AuthUI(this.afAuth);
    this.ui.start('#firebaseui-auth-container', environment.firebaseUIAuthConfig);
  }

  close(): void {
    this.modalController.dismiss();
  }
}

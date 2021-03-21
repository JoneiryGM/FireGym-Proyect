import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'fireGym';
  users:any;
  loading:boolean = true;

  constructor(public auth: AngularFireAuth){
    this.auth.user.subscribe((user)=>{
      setTimeout(() => {
        this.loading = false;
        this.users = user;
      }, 1000);
    })
  }

  login() {
    // this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.auth.signInWithEmailAndPassword('joneiri98@gmail.com','123456789');
  }

  logout() {
    this.auth.signOut();
  }
}

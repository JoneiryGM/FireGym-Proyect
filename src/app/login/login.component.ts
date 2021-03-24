import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin:FormGroup;
  constructor(public createform:FormBuilder, public auth: AngularFireAuth) { }

  ngOnInit(): void {
    this.formLogin = this.createform.group({
      email:['', Validators.compose([Validators.required, Validators.email])],
      password:['', Validators.required]
    })
  }

  signIn(){
    this.auth.signInWithEmailAndPassword(this.formLogin.value.email,this.formLogin.value.password)
    .then((user)=>{
      console.log(user);
    });
  }
}

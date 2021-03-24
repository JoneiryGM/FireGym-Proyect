import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin:FormGroup;
  correctData:boolean = true;
  errorText:string;
  constructor(public createform:FormBuilder, public auth: AngularFireAuth, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.formLogin = this.createform.group({
      email:['', Validators.compose([Validators.required, Validators.email])],
      password:['', Validators.required]
    })
  }

  signIn(){
    if(this.formLogin.valid){
      this.correctData=true;
      this.spinner.show();
        this.auth.signInWithEmailAndPassword(this.formLogin.value.email,this.formLogin.value.password)
        .then((user)=>{
        console.log(user);
        this.spinner.hide();
        }).catch((error)=>{
          this.correctData = false;
          this.errorText = error.message;
          this.spinner.hide();
        })
    }else{
      this.correctData=false;
      this.errorText='Check that the data is correct';
    }
  }
}

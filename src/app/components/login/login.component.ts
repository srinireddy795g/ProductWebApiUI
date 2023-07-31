import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { AuthUserService } from 'src/app/services/auth-user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(private authService:AuthUserService){}
  ngOnInit() {
   this.initForm();
  }
  initForm(){
  this.formGroup = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  })
}
loginProcess(){
  if(this.formGroup.valid){
    this.authService.login(this.formGroup.value).subscribe(result=>{
      if(result.success){
        console.log(result);        
      }
    })
  }
}
}

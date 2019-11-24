import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ps-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
email:string;
password:string;

  constructor(private auth:AuthServiceService,private router:Router) { }

  ngOnInit() {
  }
  login(){
    this.auth.login(this.email,this.password).subscribe(()=>{
this.router.navigate([''])
    })
  }
  discard(){

  }

}

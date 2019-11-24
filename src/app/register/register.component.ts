import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ps-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder,private authService:AuthServiceService,private router:Router) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
    register(){
      if(this.registerForm.valid){
      const userData= this.registerForm.getRawValue();
      this.authService.register(userData).subscribe((data)=>{
        console.log(data);
        this.router.navigate(['login'])
      })
    }
    else{
      alert("please fill the details ")
    }

    }

}

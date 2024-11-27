import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angualr Reactive Form';
  loginForm = new FormGroup({ // ye form ko control krega
    user:new FormControl('',[Validators.required,Validators.email]), // ye  sirf user ko control krega and second part validaters hota hia
    password:new FormControl('',[Validators.required,Validators.minLength(5)]),

  })
  loginUser()
  {
    console.warn(this.loginForm.value);
  }
  // yaha pe ham validatrs ka message input filed ke bad shoe kra rhe hai
  get user()
  {
    return this.loginForm.get('user');
  }
  get password()
  {
    return this.loginForm.get('password');
  }
}

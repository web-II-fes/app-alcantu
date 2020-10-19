import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from './../servicios/auth.service';
import { TokenStorageService } from './../servicios/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  itemForm: FormGroup;

  isLoggedIn = false;
	isLoginFailed = false;
	errorMessage = '';
	roles: string[] = [];

  constructor( private tokenService: TokenStorageService, private authService: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
			this.isLoggedIn = true;
  }
  this.initForm();
}

  initForm(){
    this.itemForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  submit() {
		this.authService.login(this.itemForm.value).subscribe((data) => {
				this.tokenService.guardarToken(data.token);

				this.isLoginFailed = false;
				this.isLoggedIn = true;

				this.router.navigate(['/persona/personas']);
			}, (err) => {
				this.errorMessage = err.error.message;
				this.isLoginFailed = true;
			}
		);
  }

  /*submit(){
    let credenciales = this.itemForm.value;
    this.auth.login(credenciales).subscribe((data) => {
      let user = data;
      this.tokenService.guardarToken(data.token);
    });
  }*/

}

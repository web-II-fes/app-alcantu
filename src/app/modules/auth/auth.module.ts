import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AuthService } from './servicios/auth.service';
import { TokenStorageService } from './servicios/token-storage.service';
import { UserService } from './servicios/user.service';

@NgModule({
    declarations: [
        LoginComponent,
        RegistroComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCardModule
    ],
    providers: [ AuthService, TokenStorageService, UserService ]
  })
  export class AuthModule { }
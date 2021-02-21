import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {AuthRoutingModule} from './auth-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./services/auth.service";



@NgModule({
  declarations: [LoginComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule
    ],
  providers: [AuthService]
})
export class AuthModule { }

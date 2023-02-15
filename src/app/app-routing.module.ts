import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotesComponent } from './components/notes/notes.component';
import { OtpComponent } from './components/otp/otp.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'' , pathMatch:'full' , redirectTo:'register'},
  {path:'login' , component:LoginComponent },
  {path: 'register' , component:RegisterComponent},
  {path: 'otp' , component:OtpComponent},
  {path: 'notes' , component:NotesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

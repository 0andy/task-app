import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login.page';
import { Tab1Page } from '../tab1/tab1.page';

const routes: Routes = [
    { path: '', component: LoginPage },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class LoginPageRoutingModule { }
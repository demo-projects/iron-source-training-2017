import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {LoginModule} from './login/login.module';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'list', loadChildren: './todos/todos.module#TodosModule'},
];

@NgModule({
  declarations: [AppComponent],
  imports     : [
    RouterModule.forRoot(routes),
    BrowserModule,
    LoginModule,
  ],
  providers   : [],
  bootstrap   : [AppComponent]
})
export class AppModule {
}

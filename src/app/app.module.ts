import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { RouterModule } from '@angular/router';
import { HomeService } from './services/home-service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserDetailsComponent
  ],
  imports:[ BrowserModule, HttpClientModule, MatTableModule, FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomePageComponent},
      {path: 'user-detail/:userId', component: UserDetailsComponent},
    ])],
  providers: [HomeService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }

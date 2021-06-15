import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { DeleteComponent } from './delete/delete.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,  ReactiveFormsModule  } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ViewComponent,
    DeleteComponent,
    FormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

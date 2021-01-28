import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

import {AppComponent} from './app.component';
import {MatTableModule} from '@angular/material/table';
import {LoginLayoutComponent} from './layouts/login-layout/login-layout.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './core/services/auth.service';
import {HomeComponent} from './core/components/home/home.component';
import {HeaderComponent} from './core/components/header/header.component';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {SidebarComponent} from './core/components/sidebar/sidebar.component';
import {CommonService} from './core/services/common.service';
import {MatMenuModule} from '@angular/material/menu';
import {ContactsModule} from './modules/contacts/contacts.module';
import {AppRoutingModule} from './app-routing-module';

@NgModule({
  declarations: [
    AppComponent,
    LoginLayoutComponent,
    HomeComponent,
    HeaderComponent,
    MainLayoutComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ContactsModule,
    AppRoutingModule
  ],
  providers: [AuthService, CommonService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}

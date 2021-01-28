import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {LoginLayoutComponent} from './layouts/login-layout/login-layout.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './core/services/auth.service';
import {HomeComponent} from './core/components/home/home.component';
import {HeaderComponent} from './core/components/header/header.component';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {SidebarComponent} from './core/components/sidebar/sidebar.component';
import {CommonService} from './core/services/common.service';
import {ContactsModule} from './modules/contacts/contacts.module';
import {AppRoutingModule} from './app-routing-module';
import {CoreModule} from './core/core.module';

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
    ContactsModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [AuthService, CommonService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}

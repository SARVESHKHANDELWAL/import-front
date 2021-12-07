import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgOtpInputModule } from  'ng-otp-input';
// import { FlatpickrModule } from 'angularx-flatpickr';
// import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LoginwithotpComponent } from './loginwithotp/loginwithotp.component';
import { VerifyotpComponent } from './verifyotp/verifyotp.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { VerifyMobileComponent } from './verify-mobile/verify-mobile.component';
import { authInterceptorProviders } from 'src/_helpers/auth.interceptor';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { ProfileComponent } from './profile/profile.component';
// import { SignupComponent } from  './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { CompanysetupComponent } from './master/companysetup/companysetup.component';
import { PortComponent } from './master/port/port.component';
import { LicenseComponent } from './master/license/license.component';
import { CurrencysettingsComponent } from './master/currencysettings/currencysettings.component';
import { BusineespartnerComponent } from './master/busineespartner/busineespartner.component';
import { BankimportComponent } from './master/bankimport/bankimport.component';
import { DocumentComponent } from './master/document/document.component';

import { GeneratepoComponent } from './imports/generatepo/generatepo.component';
import { PlanningComponent } from './imports/planning/planning.component';
import { VendorComponent } from './imports/vendor/vendor.component';
import { BankComponent } from './imports/bank/bank.component';
import { LetterofcreditComponent } from './imports/letterofcredit/letterofcredit.component';
import {ThirdpartyinspectionComponent} from './imports/thirdpartyinspection/thirdpartyinspection.component';
import { MailComponent } from './imports/vendor/mail/mail.component';
import { GeneratepopaymentComponent } from './imports/generatepo/generatepopayment/generatepopayment.component';

import { MembershipcomponentComponent } from './membershipcomponent/membershipcomponent.component';
import { AddformComponent } from './addform/addform.component';
import { EditvendorComponent } from './editvendor/editvendor.component';
import { OtpComponent } from './otp/otp.component';
import { OtpmailComponent } from './otpmail/otpmail.component';
import { PlansComponent } from './plans/plans.component';
import { TableComponent } from './table/table.component';
import { VesseltrackingComponent } from './vesseltracking/vesseltracking.component';


// import { PieChartComponent } from './pie-chart/pie-chart.component';
// import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,             // Main Component
    LoginComponent,           // User Login Component
    RegisterComponent,        //User Registeration Component
    HomeComponent,            //User Dashboard Component
    ProfileComponent,         //User Profile Component
    BoardAdminComponent,      //Board Admin Component
    BoardModeratorComponent,  // 
    BoardUserComponent,       
    VerifyEmailComponent,      // verifying email address of user 
    VerifyMobileComponent,     // Mobile OTP Verifation Component
    VerifyotpComponent,        
    LoginwithotpComponent,     //Login with OTP component    
    MembershipcomponentComponent,
    CompanysetupComponent,
    BankComponent,
    BusineespartnerComponent,
    CurrencysettingsComponent,
    LicenseComponent,    
    PortComponent,
    AddformComponent,          //Form for Import
    GeneratepoComponent,       //Generate PO Page Component
    VendorComponent,
    EditvendorComponent,       //Edit vendor details component
    OtpComponent,              //One time Password component
    PlanningComponent,         //Planning Component for process
    OtpmailComponent,          //One Time Password component 
    PlansComponent,            // To show membership plan to user.
    TableComponent,            // To show dashboard table 
    NavbarComponent, 
    DocumentComponent, 
    LetterofcreditComponent,
    BankimportComponent,
    VesseltrackingComponent,
    ThirdpartyinspectionComponent,
    MailComponent,
    GeneratepopaymentComponent
    // PieChartComponent,       // showing Pie charts on dashboard to show to total orders
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgbModule,
    FormsModule,    //Exports the required providers and directives for template-driven forms, making them available for import by NgModules that import this module               
    HttpClientModule,  //Configures the dependency injector for HttpClient with supporting services for XSRF. Automatically imported by HttpClientModule.
    BrowserAnimationsModule,  //Exports BrowserModule with additional dependency-injection providers for use with animations.
    ReactiveFormsModule, //Exports the required infrastructure and directives for reactive forms, making them available for import by NgModules that import this module.
    NgOtpInputModule,    //Adds directives and providers for in-app navigation among views defined in an application. Use the Angular Router service to declaratively specify application states and manage state transitions.
    // NgxIntlTelInputModule,
    // FlatpickrModule.forRoot(),
    // PieChartComponent,
    // ChartsModule,      //The component to instantiate when the path matches. Can be empty if child routes specify components.    
  ],
  providers: [authInterceptorProviders], //Dependencies whose providers are listed here become available for injection into any component, directive, pipe or service that is a child of this injector. The NgModule used for bootstrapping uses the root injector, and can provide dependencies to any part of the app.
  bootstrap: [AppComponent] //The set of components that are bootstrapped when this module is bootstrapped. The components listed here are automatically added to entryComponents.
})
export class AppModule { }

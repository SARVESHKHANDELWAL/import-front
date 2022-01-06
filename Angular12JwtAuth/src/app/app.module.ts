import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgOtpInputModule } from  'ng-otp-input';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { NgSelect2Module } from 'ng-select2';
import * as moment from 'moment';
// import { MomentModule } from 'ngx-moment';

import { AppRoutingModule } from './app-routing.module';
import { authInterceptorProviders } from 'src/_helpers/auth.interceptor';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { RegisterComponent } from './register/register.component';
import { LoginOtpComponent } from './loginotp/loginotp.component';
import { LoginComponent } from './login/login.component';
import { VerifyotpComponent } from './verifyotp/verifyotp.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { VerifyMobileComponent } from './verify-mobile/verify-mobile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { ProfileComponent } from './profile/profile.component';

// ------------------------------------------------------MASTER-----------------------------------------------------------//
import { CompanysetupComponent } from './master/companysetup/companysetup.component';
import { LicenseComponent } from './master/license/license.component';
import { PortComponent } from './master/port/port.component';
import { CurrencysettingsComponent } from './master/currencysettings/currencysettings.component';
import { BusineespartnerComponent } from './master/busineespartner/busineespartner.component';
import { BankimportComponent } from './imports/bankimport/bankimport.component';
import { DocumentComponent } from './master/document/document.component';
import { RolemanagementComponent } from './master/rolemanagement/rolemanagement.component';
import { UsermanagementComponent } from './master/usermanagement/usermanagement.component';
import { ClientsComponent } from './master/clients/clients.component';

// ------------------------------------------------------IMPORT-----------------------------------------------------------//
import { PlanningComponent } from './imports/planning/planning.component';
import { VendorComponent } from './imports/vendor/vendor.component';
import { EditvendorComponent } from './imports/vendor/editvendor/editvendor.component';
import { MailComponent } from './imports/vendor/mail/mail.component';
import { GeneratepoComponent } from './imports/generatepo/generatepo.component';
import { GeneratepopaymentComponent } from './imports/generatepo/generatepopayment/generatepopayment.component';
import { LetterofcreditComponent } from './imports/letterofcredit/letterofcredit.component';
import { BankComponent } from './master/bank/bank.component';
import { ThirdpartyinspectionComponent } from './imports/thirdpartyinspection/thirdpartyinspection.component';

// ------------------------------------------------------EXPORT-----------------------------------------------------------//


// -----------------------------------------------------------------------------------------------------------------//
import { VesseltrackingComponent } from './vesseltracking/vesseltracking.component';
import { CertificateComponent } from './certificate/certificate.component';
import { MembershipcomponentComponent } from './membershipcomponent/membershipcomponent.component';
// import { TableComponent } from './table/table.component';
// import { AddformComponent } from './addform/addform.component';



@NgModule({
  declarations: [
    AppComponent,             // Main Component
    HomeComponent,            //User Dashboard Component
    NavbarComponent,

    RegisterComponent,        //User Registeration Component
    LoginOtpComponent,          //Login with OTP component     
    LoginComponent,            // User Login Component
    VerifyotpComponent,        
    VerifyEmailComponent,      // verifying email address of user 
    VerifyMobileComponent,     // Mobile OTP Verifation Component
    BoardAdminComponent,      //Board Admin Component
    BoardModeratorComponent,  
    BoardUserComponent,       
    ProfileComponent,         //User Profile Component
    
// ------------------------------------------------------MASTER-----------------------------------------------------------//
    CompanysetupComponent,
    LicenseComponent,    
    PortComponent,
    CurrencysettingsComponent,
    BusineespartnerComponent,
    BankimportComponent,
    DocumentComponent, 
    RolemanagementComponent,
    UsermanagementComponent,
    ClientsComponent,

// ------------------------------------------------------IMPORT-----------------------------------------------------------//
    PlanningComponent,         //Planning Component for process              
    VendorComponent,
    EditvendorComponent,       //Edit vendor details component                  
    MailComponent,
    GeneratepoComponent,       //Generate PO Page Component
    GeneratepopaymentComponent,
    LetterofcreditComponent,
    BankComponent,
    ThirdpartyinspectionComponent,
    
// ------------------------------------------------------EXPORT-----------------------------------------------------------//



// -----------------------------------------------------------------------------------------------------------------//
    VesseltrackingComponent, 
    CertificateComponent,
    MembershipcomponentComponent, // To show membership plan to user.    
    // AddformComponent,          //Form for Import
    // TableComponent,            // To show dashboard table 
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    NgbModule,
    FormsModule,    //Exports the required providers and directives for template-driven forms, making them available for import by NgModules that import this module               
    HttpClientModule,  //Configures the dependency injector for HttpClient with supporting services for XSRF. Automatically imported by HttpClientModule.
    BrowserAnimationsModule,  //Exports BrowserModule with additional dependency-injection providers for use with animations.
    ReactiveFormsModule, //Exports the required infrastructure and directives for reactive forms, making them available for import by NgModules that import this module.
    NgOtpInputModule,    //Adds directives and providers for in-app navigation among views defined in an application. Use the Angular Router service to declaratively specify application states and manage state transitions.    
    Ng2TelInputModule,
    NgSelect2Module
    // MomentModule
  ],
  providers: [authInterceptorProviders], //Dependencies whose providers are listed here become available for injection into any component, directive, pipe or service that is a child of this injector. The NgModule used for bootstrapping uses the root injector, and can provide dependencies to any part of the app.
  bootstrap: [AppComponent] //The set of components that are bootstrapped when this module is bootstrapped. The components listed here are automatically added to entryComponents.
})
export class AppModule { }

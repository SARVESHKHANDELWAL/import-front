import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

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

// import { AddformComponent } from './addform/addform.component';
// import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'index', component: HomeComponent},   
  {path: 'register' , component: RegisterComponent}, 
  {path: 'loginwithotp', component: LoginOtpComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'otp', component: VerifyotpComponent },
  { path: 'verifyMobile', component: VerifyMobileComponent},
  { path: 'verifyEmail', component: VerifyEmailComponent},  

  // ------------------------------------------------------MASTER ROUTERS-----------------------------------------------------------//
  {path: 'master-companysetup', component: CompanysetupComponent},
  {path: 'master-license',component: LicenseComponent},
  {path: 'master-port',component: PortComponent},
  {path: 'master-curency', component:CurrencysettingsComponent},
  {path: 'master-busineespartner',component: BusineespartnerComponent},
  {path: 'master-bank', component: BankComponent},
  {path: 'master-document', component: DocumentComponent},
  {path: 'master-rolemanagement',component: RolemanagementComponent },
  {path: 'master-clients', component: ClientsComponent},
  {path: 'master-usermanagement', component: UsermanagementComponent},
  // ------------------------------------------------------IMPORT ROUTERS-----------------------------------------------------------//
  {path: 'import-planning', component: PlanningComponent},
  {path: 'import-vendor', component: VendorComponent},
  {path: 'import-vendor-editvendor',component: EditvendorComponent},    
  {path: 'import-vendor-mail', component: MailComponent},
  {path: 'import-generatepo', component: GeneratepoComponent},
  {path: 'import-generatepo-generatepopayment', component: GeneratepopaymentComponent},
  {path: 'import-letterofcredit', component: LetterofcreditComponent},
  {path: 'import-bankimport' , component: BankimportComponent},
  {path: 'import-third_party_inspection', component: ThirdpartyinspectionComponent },
  // ------------------------------------------------------EXPORT ROUTERS-----------------------------------------------------------//


  
  // -----------------------------------------------------------------------------------------------------------------------------//
  {path: 'vesseltracking', component: VesseltrackingComponent},
  { path:'certificate', component: CertificateComponent},
  { path: 'membership', component: MembershipcomponentComponent},
 
  // {path: 'addform', component: AddformComponent},
  // {path: 'table', component: TableComponent}    
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

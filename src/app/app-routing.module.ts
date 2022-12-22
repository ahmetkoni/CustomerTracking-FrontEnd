import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuriousCustomerAddComponent } from './Components/curious-customer-add/curious-customer-add.component';
import { CuriousCustomerUpdateComponent } from './Components/curious-customer-update/curious-customer-update.component';
import { CuriousCustomerComponent } from './Components/curious-customer/curious-customer.component';
import { CustomerAddComponent } from './Components/customer-add/customer-add.component';
import { CustomerUpdateComponent } from './Components/customer-update/customer-update.component';
import { CustomerComponent } from './Components/customer/customer.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForeignInvestorAddComponent } from './Components/foreign-investor-add/foreign-investor-add.component';
import { ForeignInvestorUpdateComponent } from './Components/foreign-investor-update/foreign-investor-update.component';
import { ForeignInvestorComponent } from './Components/foreign-investor/foreign-investor.component';
import { InvestorAddComponent } from './Components/investor-add/investor-add.component';
import { InvestorUpdateComponent } from './Components/investor-update/investor-update.component';
import { InvestorComponent } from './Components/investor/investor.component';
import { PossibleCustomerAddComponent } from './Components/possible-customer-add/possible-customer-add.component';
import { PossibleCustomerUpdateComponent } from './Components/possible-customer-update/possible-customer-update.component';
import { PossibleCustomerComponent } from './Components/possible-customer/possible-customer.component';
import { RoutineServiceAddComponent } from './Components/routine-service-add/routine-service-add.component';
import { RoutineServiceUpdateComponent } from './Components/routine-service-update/routine-service-update.component';
import { RoutineServiceComponent } from './Components/routine-service/routine-service.component';
import { SessionAddComponent } from './Components/session-add/session-add.component';
import { SessionUpdateComponent } from './Components/session-update/session-update.component';
import { SessionComponent } from './Components/session/session.component';

const routes: Routes = [
  {path:"",component:DashboardComponent},
  {path:"customer",component:CustomerComponent},
  {path:"customer/add",component:CustomerAddComponent},
  {path:"customer/update/:id",component:CustomerUpdateComponent},
  {path:"customer/getcount",component:DashboardComponent},
  {path:"curiousCustomer",component:CuriousCustomerComponent},
  {path:"curiousCustomer/add",component:CuriousCustomerAddComponent},
  {path:"curiousCustomer/update/:id",component:CuriousCustomerUpdateComponent},
  {path:"foreignInvestor",component:ForeignInvestorComponent},
  {path:"foreignInvestor/add",component:ForeignInvestorAddComponent},
  {path:"foreignInvestor/update/:id",component:ForeignInvestorUpdateComponent},
  {path:"foreignInvestor/getforeigninvestor",component:DashboardComponent},
  {path:"investor",component:InvestorComponent},
  {path:"investor/add",component:InvestorAddComponent},
  {path:"investor/update/:id",component:InvestorUpdateComponent},
  {path:"investor/getinvest",component:DashboardComponent},
  {path:"possibleCustomer",component:PossibleCustomerComponent},
  {path:"possibleCustomer/add",component:PossibleCustomerAddComponent},
  {path:"possibleCustomer/update/:id",component:PossibleCustomerUpdateComponent},
  {path:"routineService",component:RoutineServiceComponent},
  {path:"routineService/add",component:RoutineServiceAddComponent},
  {path:"routineService/update/:id",component:RoutineServiceUpdateComponent},
  {path:"session",component:SessionComponent},
  {path:"session/add",component:SessionAddComponent},
  {path:"session/update/:id",component:SessionUpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 
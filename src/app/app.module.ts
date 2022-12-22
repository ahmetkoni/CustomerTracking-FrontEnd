import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuriousCustomerComponent } from './Components/curious-customer/curious-customer.component';
import { CustomerComponent } from './Components/customer/customer.component';
import { NaviComponent } from './Components/navi/navi.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { InvestorComponent } from './Components/investor/investor.component';
import { ForeignInvestorComponent } from './Components/foreign-investor/foreign-investor.component';
import { PossibleCustomerComponent } from './Components/possible-customer/possible-customer.component';
import { RoutineServiceComponent } from './Components/routine-service/routine-service.component';
import { SessionComponent } from './Components/session/session.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from 'ngx-toastr';
import { FilterPipeCuriousPipe } from './pipes/filter-pipe-curious.pipe';
import { FilterPipeForeignPipe } from './pipes/filter-pipe-foreign.pipe';
import { FilterPipeInvestorPipe } from './pipes/filter-pipe-investor.pipe';
import { FilterPipePossiblePipe } from './pipes/filter-pipe-possible.pipe';
import { RoutinePipe } from './pipes/filter-pipe-routine.pipe';
import { FilterPipeSessionPipe } from './pipes/filter-pipe-session.pipe';
import { CustomerAddComponent } from './Components/customer-add/customer-add.component';
import { CuriousCustomerAddComponent } from './Components/curious-customer-add/curious-customer-add.component';
import { ForeignInvestorAddComponent } from './Components/foreign-investor-add/foreign-investor-add.component';
import { InvestorAddComponent } from './Components/investor-add/investor-add.component';
import { PossibleCustomerAddComponent } from './Components/possible-customer-add/possible-customer-add.component';
import { RoutineServiceAddComponent } from './Components/routine-service-add/routine-service-add.component';
import { SessionAddComponent } from './Components/session-add/session-add.component';
import { CustomerUpdateComponent } from './Components/customer-update/customer-update.component';
import { CuriousCustomerUpdateComponent } from './Components/curious-customer-update/curious-customer-update.component';
import { ForeignInvestorUpdateComponent } from './Components/foreign-investor-update/foreign-investor-update.component';
import { InvestorUpdateComponent } from './Components/investor-update/investor-update.component';
import { PossibleCustomerUpdateComponent } from './Components/possible-customer-update/possible-customer-update.component';
import { RoutineServiceUpdateComponent } from './Components/routine-service-update/routine-service-update.component';
import { SessionUpdateComponent } from './Components/session-update/session-update.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CuriousCustomerComponent,
    NaviComponent,
    SidebarComponent,
    InvestorComponent,
    ForeignInvestorComponent,
    PossibleCustomerComponent,
    RoutineServiceComponent,
    SessionComponent,
    FilterPipePipe,
    FilterPipeCuriousPipe,
    FilterPipeForeignPipe,
    FilterPipeInvestorPipe,
    FilterPipePossiblePipe,
    RoutinePipe,
    FilterPipeSessionPipe,
    CustomerAddComponent,
    CuriousCustomerAddComponent,
    ForeignInvestorAddComponent,
    InvestorAddComponent,
    PossibleCustomerAddComponent,
    RoutineServiceAddComponent,
    SessionAddComponent,
    CustomerUpdateComponent,
    CuriousCustomerUpdateComponent,
    ForeignInvestorUpdateComponent,
    InvestorUpdateComponent,
    PossibleCustomerUpdateComponent,
    RoutineServiceUpdateComponent,
    SessionUpdateComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right",
      timeOut:1000
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

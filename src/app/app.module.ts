import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutesModule } from './routes/routes.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/services/dashboard.service';
import { CtNgXBootstrapModule } from './ct-ngx-bootstrap/ct-ngx-bootstrap.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    CtNgXBootstrapModule,
    FormsModule
  ],
  providers: [
    DashboardService
  ],
  exports: [CtNgXBootstrapModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

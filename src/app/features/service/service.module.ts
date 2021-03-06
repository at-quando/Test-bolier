import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/module/shared.module';
import { ServiceComponent } from './service.component';
import { ServiceService } from './service.service';

const routes: Routes = [
  {
    path: '',
    component: ServiceComponent
  },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ServiceComponent],
  providers: [
    ServiceService
  ]
})
export class ServiceModule { }

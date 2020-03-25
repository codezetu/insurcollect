import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { AdminLayoutSidebarLargeComponent } from './admin-layout-sidebar-large/admin-layout-sidebar-large.component';
import { HeaderSidebarLargeComponent } from './admin-layout-sidebar-large/header-sidebar-large/header-sidebar-large.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { SharedPipesModule } from '../../pipes/shared-pipes.module';
import { SearchModule } from '../search/search.module';
import { SidebarLargeComponent } from './admin-layout-sidebar-large/sidebar-large/sidebar-large.component';
import { FooterComponent } from '../footer/footer.component';
import { SharedDirectivesModule } from '../../directives/shared-directives.module';
import { DashboardComponent } from './admin-layout-sidebar-large/dashboard/dashboard.component';
import { IconsModule } from 'src/app/icons/icons.module';

const components = [
  HeaderSidebarLargeComponent,
  SidebarLargeComponent,
  FooterComponent,
  AdminLayoutSidebarLargeComponent,
  AuthLayoutComponent,
  BlankLayoutComponent,
  DashboardComponent,
];

@NgModule({
  imports: [
    NgbModule,
    RouterModule,
    FormsModule,
    SearchModule,
    SharedPipesModule,
    SharedDirectivesModule,
    PerfectScrollbarModule,
    CommonModule,
    IconsModule
  ],
  declarations: components,
  exports: [ components, IconsModule ] 
})
export class LayoutsModule {}

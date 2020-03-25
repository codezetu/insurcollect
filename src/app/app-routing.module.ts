import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './guards/auth.guard';
import { BlankLayoutComponent } from './shared/components/layouts/blank-layout/blank-layout.component';
import { AdminLayoutSidebarLargeComponent } from './shared/components/layouts/admin-layout-sidebar-large/admin-layout-sidebar-large.component';
import { DashboardComponent } from 'shared/components/layouts/admin-layout-sidebar-large/dashboard/dashboard.component';

const adminRoutes: Routes = [
  {
    path: 'account',
    loadChildren: () => import('./views/account/account.module').then(m => m.AccountModule),
  },
  // {
  //   path: 'uikits',
  //   loadChildren: () => import('./views/ui-kits/ui-kits.module').then(m => m.UiKitsModule),
  // },
  // {
  //   path: 'forms',
  //   loadChildren: () => import('./views/forms/forms.module').then(m => m.AppFormsModule),
  // },
  // {
  //   path: 'invoice',
  //   loadChildren: () => import('./views/invoice/invoice.module').then(m => m.InvoiceModule),
  // },
  // {
  //   path: 'inbox',
  //   loadChildren: () => import('./views/inbox/inbox.module').then(m => m.InboxModule),
  // },
  // {
  //   path: 'calendar',
  //   loadChildren: () => import('./views/calendar/calendar.module').then(m => m.CalendarAppModule),
  // },
  // {
  //   path: 'chat',
  //   loadChildren: () => import('./views/chat/chat.module').then(m => m.ChatModule),
  // },
  // {
  //   path: 'tables',
  //   loadChildren: () => import('./views/data-tables/data-tables.module').then(m => m.DataTablesModule),
  // },
  // {
  //   path: 'pages',
  //   loadChildren: () => import('./views/pages/pages.module').then(m => m.PagesModule),
  // },
  // {
  //   path: 'icons',
  //   loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule),
  // },
];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule),
      },
    ],
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: 'others',
        loadChildren: () => import('./views/others/others.module').then(m => m.OthersModule),
      },
    ],
  },
  {
    path: 'home',
    component: AdminLayoutSidebarLargeComponent,
    // canActivate: [AuthGuard],
    // children: adminRoutes,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
         path: '', component: DashboardComponent 
      },
      { path: 'dashboard',
        component: DashboardComponent 
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'others/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

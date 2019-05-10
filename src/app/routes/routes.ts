import {DashboardComponent} from '../dashboard/dashboard.component';

export const appRoutes = [
  {
      path: '', component: DashboardComponent,
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
      path: 'logout', redirectTo: 'dashboard'
  },

  // Not found
  {
      path: '**', redirectTo: '/dashboard'
  }

];


import { Routes } from '@angular/router';
import { UserComponent } from './Component/user/user.component';
import { RoutingRoutingModule } from './routing/routing-routing.module';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./routing/routing-routing.module').then(
        (m) => m.RoutingRoutingModule
      ),
  },
];

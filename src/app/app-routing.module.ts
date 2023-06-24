import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { HomeComponent } from './features/home/home.component';
import { ModelsComponent } from './features/models/models.component';
import { ModelDetailsComponent } from './features/model-details/model-details.component';
import { ModelResolver } from './features/models/model.resolver';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/models', 
    pathMatch: 'full' 
  },
  { 
    path: 'dashboard', 
    component: HomeComponent, 
    canActivate: [MsalGuard] 
  },
  { 
    path: 'models', 
    component: ModelsComponent, 
    canActivate: [MsalGuard],
    resolve: { modelData : ModelResolver } 
  },
  { 
    path: 'models-details', 
    component: ModelDetailsComponent, 
    canActivate: [MsalGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

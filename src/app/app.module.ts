import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IPublicClientApplication, PublicClientApplication, InteractionType, BrowserCacheLocation } from '@azure/msal-browser';
import { MsalGuard, MsalInterceptor, MsalBroadcastService, MsalInterceptorConfiguration, MsalModule, MsalService, MSAL_GUARD_CONFIG, MSAL_INSTANCE, MSAL_INTERCEPTOR_CONFIG, MsalGuardConfiguration, MsalRedirectComponent } from '@azure/msal-angular';

import { msalConfig, loginRequest, protectedResources } from './auth.config';
import { HeaderComponent } from './shared/header/header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SideNavMenuComponent } from './shared/side-nav-menu/side-nav-menu.component';
import { HomeComponent } from './features/home/home.component';
import { ModelsComponent } from './features/models/models.component';
import { CardComponent } from './shared/cards/card.component';
import { ModelDetailsComponent } from './features/model-details/model-details.component';
import { ModelDataService } from './services/model-data.service';

/**
 * Here we pass the configuration parameters to create an MSAL instance.
 * For more info, visit: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-angular/docs/v2-docs/configuration.md
 */

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication(msalConfig);
}

/**
 * MSAL Angular will automatically retrieve tokens for resources 
 * added to protectedResourceMap. For more info, visit: 
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-angular/docs/v2-docs/initialization.md#get-tokens-for-web-api-calls
 */
export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();

  protectedResourceMap.set(protectedResources.todoListApi.endpoint, protectedResources.todoListApi.scopes);

  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap
  };
}

/**
 * Set your default interaction type for MSALGuard here. If you have any
 * additional scopes you want the user to consent upon login, add them here as well.
 */
export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return { 
    interactionType: InteractionType.Redirect,
    authRequest: loginRequest
  };
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavMenuComponent,
    HomeComponent,
    ModelsComponent,
    CardComponent,
    ModelDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MsalModule.forRoot(new PublicClientApplication(msalConfig),
      {
        // The routing guard configuration. 
        interactionType: InteractionType.Redirect,
        authRequest: {
          scopes: protectedResources.todoListApi.scopes
        }
      },
      {
        // MSAL interceptor configuration.
        // The protected resource mapping maps your web API with the corresponding app scopes. If your code needs to call another web API, add the URI mapping here.
        interactionType: InteractionType.Redirect,
        protectedResourceMap: new Map([
          [protectedResources.todoListApi.endpoint, protectedResources.todoListApi.scopes]
        ])
      })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
  },
  MsalGuard,
  ModelDataService
  ],
  bootstrap: [AppComponent,MsalRedirectComponent]
})
export class AppModule { }

import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
import { I18N_PROVIDERS } from '../service/i18n/i18n.service';
import { NOTIFICATION_PROVIDERS } from '../service/notification/notification.service';
import { AuthGuard } from '../service/auth/auth-guard';
import { INTERCEPTORS } from '../service/interceptors';

const AUTH_PROVIDERS = [
  AuthService,
  AuthGuard
];

@NgModule({
  imports: [],
  declarations: [],
  exports: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AUTH_PROVIDERS,
        I18N_PROVIDERS,
        NOTIFICATION_PROVIDERS,
        INTERCEPTORS
      ]
    };
  }

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}

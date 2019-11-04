import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'pabs', loadChildren: './pabs/pabs.module#PabsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'transpo', loadChildren: './transpo/transpo.module#TranspoPageModule' },
  { path: '', loadChildren: './slider/slider.module#SliderPageModule' },
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
  { path: 'qr', loadChildren: './qr/qr.module#QrPageModule' },
  { path: 'chat-room', loadChildren: './chat-room/chat-room.module#ChatRoomPageModule' },
  { path: 'chat-home', loadChildren: './chat-home/chat-home.module#ChatHomePageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'chat-web', loadChildren: './chat-web/chat-web.module#ChatWebPageModule' },
  { path: 'provider-ui', loadChildren: './provider-ui/provider-ui.module#ProviderUIPageModule' },
  { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
  { path: 'settings-provider', loadChildren: './settings-provider/settings-provider.module#SettingsProviderPageModule' },
  { path: 'seeker-list', loadChildren: './seeker-list/seeker-list.module#SeekerListPageModule' },
  { path: 'provider-apply', loadChildren: './provider-apply/provider-apply.module#ProviderApplyPageModule' },
  { path: 'seeker-transaction', loadChildren: './seeker-transaction/seeker-transaction.module#SeekerTransactionPageModule' },  { path: 'otp', loadChildren: './otp/otp.module#OtpPageModule' },

  //{ path: 'provider-driver', loadChildren: './provider-driver/provider-driver.module#ProviderDriverPageModule' }
  //{ path: 'privacy-policy', loadChildren: './privacy-policy/privacy-policy.module#PrivacyPolicyPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})


export class AppRoutingModule {}

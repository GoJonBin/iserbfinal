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
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'provider-ui', loadChildren: './provider-ui/provider-ui.module#ProviderUIPageModule' },
  { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})


export class AppRoutingModule {}

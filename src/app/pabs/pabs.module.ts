import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PabsPageRoutingModule } from './pabs.router.module';

import { PabsPage } from './pabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PabsPageRoutingModule
  ],
  declarations: [PabsPage]
})
export class PabsPageModule {}

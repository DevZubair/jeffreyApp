import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PicDictionaryPage } from './pic-dictionary.page';

const routes: Routes = [
  {
    path: '',
    component: PicDictionaryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PicDictionaryPage]
})
export class PicDictionaryPageModule {}

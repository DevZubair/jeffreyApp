import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig  } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {
  interstitialConfig: AdMobFreeInterstitialConfig = {
    isTesting: true, // Remove in production
    autoShow: true,
    id: 'ca-app-pub-3940256099942544/1033173712'
  }; 
  categoryID = null;

  constructor(private activatedRoute: ActivatedRoute,private admobFree: AdMobFree) { }

 ngOnInit() {
   this.categoryID = this.activatedRoute.snapshot.paramMap.get('categoryID');
   this.launchInterstitial();
 }
 
 launchInterstitial() {
    this.admobFree.interstitial.config(this.interstitialConfig);
    this.admobFree.interstitial.prepare().then(() => {
      console.log('Success of Interstitial');
    });
  }
}

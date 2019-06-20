import { Component } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig  } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  bannerConfig: AdMobFreeBannerConfig = {
    isTesting: true, // Remove in production
    autoShow: true,
    id: 'ca-app-pub-3940256099942544/6300978111'
   };

  constructor(private admobFree: AdMobFree) {
   
  }

  ngOnInit() {
    this.showBanner();
  }

  showBanner() {

    this.admobFree.banner.config(this.bannerConfig);
    this.admobFree.banner.prepare().then(() => {
        console.log('Success of Banner');
    }).catch(e => console.log(e));
  }

}

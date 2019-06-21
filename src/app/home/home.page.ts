import { Component } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig  } from '@ionic-native/admob-free/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AppRate } from '@ionic-native/app-rate/ngx';

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

  constructor(private admobFree: AdMobFree,private socialSharing: SocialSharing,private appRate: AppRate) {
    // set certain preferences
    this.appRate.preferences.storeAppURL = {
          ios: 'com.queno.school',
          android: 'market://details?id=com.ionicframework.quenoschool346167',
          windows: 'ms-windows-store://review/?ProductId=<store_id>'
    }   
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

  socialShare(){
    // Share via email
    this.socialSharing.share('My App Message', 'Subject', '', 'https://play.google.com/store/apps/details?id=com.inoover.picturedictionary').then(() => {
    // Success!
    }).catch(() => {
    // Error!
    });
  }

  rateTheApp(){
    this.appRate.promptForRating(true);
  }

}

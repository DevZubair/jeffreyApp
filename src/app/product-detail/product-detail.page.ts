import { Component, OnInit } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  showPlayButton1 = true
  showPlayButton2 = true

  constructor(private nativeAudio: NativeAudio) {
    this.nativeAudio.preloadSimple('sample1', 'assets/mp3/sample.mp3').then(this.onSuccess, this.onError);
   }

  ngOnInit() {
  }

  ionViewWillLeave() {
    this.stopAudio1();
    this.stopAudio2();
  }

  playAudio1(){
    this.showPlayButton1 = false;
    this.stopAudio2();
    this.nativeAudio.play('sample1').then(this.onSuccess, this.onError);
  }

  stopAudio1(){
    this.showPlayButton1 = true;
    this.nativeAudio.stop('sample1').then(this.onStopSuccess,this.onStopError);
  }

  playAudio2(){
    this.showPlayButton2 = false;
    this.stopAudio1();
    this.nativeAudio.play('sample1').then(this.onSuccess, this.onError);
  }

  stopAudio2(){
    this.showPlayButton2 = true;
    this.nativeAudio.stop('sample1').then(this.onStopSuccess,this.onStopError);
  }

  onSuccess(data){
  console.log('Playing mp3')
  }
  
  onError(data){
  console.log('Error in Playing mp3')
  }

  onStopSuccess(data){
  console.log('Stopped mp3')
  }
    
  onStopError(data){
  console.log('Error in Stopping mp3')
  }
  

}

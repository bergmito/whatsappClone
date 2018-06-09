import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmojiInputComponent } from 'ng-emoji-picker';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = 'app';
  text: string = '';
  openPopup: Function;

  @ViewChild('inputMessage') inputMessage: EmojiInputComponent;
  @ViewChild('inputMessageTest') inputMessageTest: ElementRef;

  constructor(public navCtrl: NavController) {

  }

  ionViewWillEnter() {
    // console.log('=======================ionViewWillEnter');
    // console.log(this.inputMessageTest.nativeElement);
    // console.log('ionViewWillEnter=======================');
    // (this.inputMessageTest.nativeElement as HTMLInputElement).focus();
  }

  setPopupAction(fn: any) {
    console.log('selectedEmoji');
    this.openPopup = fn;
  }

  textChange($event) {
    console.log("$event=================");
    console.log($event);
    (this.inputMessage.inputEl.nativeElement as HTMLInputElement).focus();
    console.log("=================$event");
  }

  backspace() {
    console.log('Text: ' + this.text);
    console.log('Text-Length: ' + this.text.length);
    console.log(this.inputMessage);
    console.log('lastCursorPosition: ' + this.inputMessage.lastCursorPosition);
    (this.inputMessage.inputEl.nativeElement as HTMLInputElement).setSelectionRange(this.inputMessage.lastCursorPosition, this.inputMessage.lastCursorPosition);
    (this.inputMessage.inputEl.nativeElement as HTMLInputElement).focus();
  }

}

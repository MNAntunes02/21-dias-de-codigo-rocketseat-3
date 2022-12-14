import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.css']
})
export class EmojiComponent implements OnInit {

  arr = [
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐ ",
      "๐ก",
      "๐ข",
      "๐ฃ",
      "๐ค",
      "๐ฅ",
      "๐ฆ",
      "๐ง",
      "๐จ",
      "๐ฉ",
      "๐ช",
      "๐ซ",
      "๐ฌ",
      "๐ญ",
      "๐ฎ",
      "๐ฏ",
      "๐ฐ",
      "๐ฑ",
      "๐ฒ",
      "๐ณ",
      "๐ด",
      "๐ต",
      "๐ถ",
      "๐ท",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐ค",
      "๐ค",
      "๐ค",
      "๐ค",
      "๐ค",
      "๐ค",
      "๐ค ",
      "๐คก",
      "๐คข",
      "๐คฃ",
      "๐คค",
      "๐คฅ",
      "๐คง",
      "๐คจ",
      "๐คฉ",
      "๐คช",
      "๐คซ",
      "๐คฌ",
      "๐คฎ",
      "๐คฏ",
      "๐ง",
  ]

  @ViewChildren('emojis') emojis! : ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {


  }

  copyEmoji(event: Event){
    // let p: any = ev.composedPath()[0];
    let p: EventTarget = event.composedPath()[1];

    console.log(this.emojis)
    // console.log(ev.composedPath()[0])
  }

  copyEmojia(event: number){
    console.log(this.arr[event]);

    navigator.clipboard.writeText(this.arr[event]);

    /* Alert the copied text */
    // alert("Emoji " + this.arr[event] + " foi copiado!");

  }

}

import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.css']
})
export class EmojiComponent implements OnInit {

  arr = [
      "😁",
      "😂",
      "😃",
      "😄",
      "😅",
      "😆",
      "😇",
      "😈",
      "😉",
      "😊",
      "😋",
      "😌",
      "😍",
      "😎",
      "😏",
      "😐",
      "😑",
      "😒",
      "😓",
      "😔",
      "😕",
      "😖",
      "😗",
      "😘",
      "😙",
      "😚",
      "😛",
      "😜",
      "😝",
      "😞",
      "😟",
      "😠",
      "😡",
      "😢",
      "😣",
      "😤",
      "😥",
      "😦",
      "😧",
      "😨",
      "😩",
      "😪",
      "😫",
      "😬",
      "😭",
      "😮",
      "😯",
      "😰",
      "😱",
      "😲",
      "😳",
      "😴",
      "😵",
      "😶",
      "😷",
      "🙁",
      "🙂",
      "🙃",
      "🙄",
      "🤐",
      "🤑",
      "🤒",
      "🤓",
      "🤔",
      "🤕",
      "🤠",
      "🤡",
      "🤢",
      "🤣",
      "🤤",
      "🤥",
      "🤧",
      "🤨",
      "🤩",
      "🤪",
      "🤫",
      "🤬",
      "🤮",
      "🤯",
      "🧐",
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

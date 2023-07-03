import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.css']
})
export class EmojiComponent implements OnInit {

  arr = [
      "😁","😂","😃","😄","😅","😆","😇","😈","😉","😊","😋","😌",
      "😍","😎","😏","😐","😑","😒","😓","😔","😕","😖","😗","😘",
      "😙","😚","😛","😜","😝","😞","😟","😠","😡","😢","😣","😤",
      "😥","😦","😧","😨","😩","😪","😫","😬","😭","😮","😯","😰",
      "😱","😲","😳","😴","😵","😶","😷","🙁","🙂","🙃","🙄","🤐",
      "🤑","🤒","🤓","🤔","🤕","🤠","🤡","🤢","🤣","🤤","🤥","🤧",
      "🤨","🤩","🤪","🤫","🤬","🤮","🤯","🧐",
  ]

  @ViewChildren('emojis') emojis! : ElementRef<HTMLDivElement>;

  constructor(private _snackBar: MatSnackBar) { }

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

    this._snackBar.open('Emoji copiado!',this.arr[event],{duration:1000});

  }

}

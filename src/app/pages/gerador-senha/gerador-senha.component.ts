import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerador-senha',
  templateUrl: './gerador-senha.component.html',
  styleUrls: ['./gerador-senha.component.css']
})
export class GeradorSenhaComponent implements OnInit {
  
  letra = "";

  constructor() { }

  ngOnInit(): void {

  }

  gPassword(){
    // console.log(this.randomPasswd(10))
    console.log(this.getPassword)
    
  }

  // randomPasswd(len: number){
  //   let passwd = ""
  //   do {
  //     passwd += Math.random().toString(26).substring(2)
  //   } while (passwd.length < len);
  //   passwd = passwd.substring(0, len)
  //   this.letra = passwd
  //   return passwd
  // }

   getPassword(length: number) {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
    
    do{
      var password = "";
      for (var i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
      }
    }while(!password.includes('a') || !password.includes('*') || !password.includes('A'))


    this.letra = password
  }


}

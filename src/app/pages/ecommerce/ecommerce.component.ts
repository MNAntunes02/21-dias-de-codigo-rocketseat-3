import { Component, OnInit } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {

  faCartShopping = faCartShopping;

  api = [
    {
      nome:"God of War Ragnarok",
      console: "PS5",
      precoAnterior: "R$ 349,90",
      precoAtual: "R$ 290,31",
      imagem: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/375097/Jogo-God-Of-War-Ragnarok-PS5-Pr-Venda_1659462526_g.jpg",
    },
    {
      nome:"The Last Of Us Part II",
      console: "PS4",
      precoAnterior: "R$ 283,98",
      precoAtual: "R$ 99,99",
      imagem: "https://images.kabum.com.br/produtos/fotos/107331/jogo-the-last-of-us-part-ii-ps4_1659030888_gg.jpg",
    },
    {
      nome:"Grand Theft Auto V",
      console: "PS3",
      precoAnterior: "",
      precoAtual: "R$ 118,90",
      imagem: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/182855/Jogo-Grand-Theft-Auto-V-Ps3_1661779714_gg.jpg",
    },
    {
      nome:"Grand Theft Auto San Andreas",
      console: "PS2",
      precoAnterior: "R$ 190,00",
      precoAtual: "R$ 4,00",
      imagem: "https://cdn.awsli.com.br/800x800/138/138431/produto/7989213/a2dd1c5b9b.jpg",
    },
    {
      nome:"Jogo Crash Bandicoot 3: Warped",
      console: "PS",
      precoAnterior: "R$ 190,00",
      precoAtual: "R$ 324,00",
      imagem: "https://cdn.awsli.com.br/600x450/138/138431/produto/147752270/63f35d29f0.jpg",
    },
    {
      nome:"God of War Ragnarok",
      console: "PS5",
      precoAnterior: "R$ 349,90",
      precoAtual: "R$ 290,31",
      imagem: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/375097/Jogo-God-Of-War-Ragnarok-PS5-Pr-Venda_1659462526_g.jpg",
    },
    {
      nome:"The Last Of Us Part II",
      console: "PS4",
      precoAnterior: "R$ 283,98",
      precoAtual: "R$ 99,99",
      imagem: "https://images.kabum.com.br/produtos/fotos/107331/jogo-the-last-of-us-part-ii-ps4_1659030888_gg.jpg",
    },
    {
      nome:"Grand Theft Auto V",
      console: "PS3",
      precoAnterior: "",
      precoAtual: "R$ 118,90",
      imagem: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/182855/Jogo-Grand-Theft-Auto-V-Ps3_1661779714_gg.jpg",
    },
    {
      nome:"Grand Theft Auto San Andreas",
      console: "PS2",
      precoAnterior: "R$ 190,00",
      precoAtual: "R$ 4,00",
      imagem: "https://cdn.awsli.com.br/800x800/138/138431/produto/7989213/a2dd1c5b9b.jpg",
    },
    {
      nome:"Jogo Crash Bandicoot 3: Warped",
      console: "PS",
      precoAnterior: "R$ 190,00",
      precoAtual: "R$ 324,00",
      imagem: "https://cdn.awsli.com.br/600x450/138/138431/produto/147752270/63f35d29f0.jpg",
    },
    {
      nome:"God of War Ragnarok",
      console: "PS5",
      precoAnterior: "R$ 349,90",
      precoAtual: "R$ 290,31",
      imagem: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/375097/Jogo-God-Of-War-Ragnarok-PS5-Pr-Venda_1659462526_g.jpg",
    },
    {
      nome:"The Last Of Us Part II",
      console: "PS4",
      precoAnterior: "R$ 283,98",
      precoAtual: "R$ 99,99",
      imagem: "https://images.kabum.com.br/produtos/fotos/107331/jogo-the-last-of-us-part-ii-ps4_1659030888_gg.jpg",
    },
    {
      nome:"Grand Theft Auto V",
      console: "PS3",
      precoAnterior: "",
      precoAtual: "R$ 118,90",
      imagem: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/182855/Jogo-Grand-Theft-Auto-V-Ps3_1661779714_gg.jpg",
    },
    {
      nome:"Grand Theft Auto San Andreas",
      console: "PS2",
      precoAnterior: "R$ 190,00",
      precoAtual: "R$ 4,00",
      imagem: "https://cdn.awsli.com.br/800x800/138/138431/produto/7989213/a2dd1c5b9b.jpg",
    },
    {
      nome:"Jogo Crash Bandicoot 3: Warped",
      console: "PS",
      precoAnterior: "R$ 190,00",
      precoAtual: "R$ 324,00",
      imagem: "https://cdn.awsli.com.br/600x450/138/138431/produto/147752270/63f35d29f0.jpg",
    },
    {
      nome:"God of War Ragnarok",
      console: "PS5",
      precoAnterior: "R$ 349,90",
      precoAtual: "R$ 290,31",
      imagem: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/375097/Jogo-God-Of-War-Ragnarok-PS5-Pr-Venda_1659462526_g.jpg",
    },
    {
      nome:"The Last Of Us Part II",
      console: "PS4",
      precoAnterior: "R$ 283,98",
      precoAtual: "R$ 99,99",
      imagem: "https://images.kabum.com.br/produtos/fotos/107331/jogo-the-last-of-us-part-ii-ps4_1659030888_gg.jpg",
    },
    {
      nome:"Grand Theft Auto V",
      console: "PS3",
      precoAnterior: "",
      precoAtual: "R$ 118,90",
      imagem: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/182855/Jogo-Grand-Theft-Auto-V-Ps3_1661779714_gg.jpg",
    },
    {
      nome:"Grand Theft Auto San Andreas",
      console: "PS2",
      precoAnterior: "R$ 190,00",
      precoAtual: "R$ 4,00",
      imagem: "https://cdn.awsli.com.br/800x800/138/138431/produto/7989213/a2dd1c5b9b.jpg",
    },
    {
      nome:"Jogo Crash Bandicoot 3: Warped",
      console: "PS",
      precoAnterior: "R$ 190,00",
      precoAtual: "R$ 324,00",
      imagem: "https://cdn.awsli.com.br/600x450/138/138431/produto/147752270/63f35d29f0.jpg",
    },
    {
      nome:"God of War Ragnarok",
      console: "PS5",
      precoAnterior: "R$ 349,90",
      precoAtual: "R$ 290,31",
      imagem: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/375097/Jogo-God-Of-War-Ragnarok-PS5-Pr-Venda_1659462526_g.jpg",
    },
    {
      nome:"The Last Of Us Part II",
      console: "PS4",
      precoAnterior: "R$ 283,98",
      precoAtual: "R$ 99,99",
      imagem: "https://images.kabum.com.br/produtos/fotos/107331/jogo-the-last-of-us-part-ii-ps4_1659030888_gg.jpg",
    },
    {
      nome:"Grand Theft Auto V",
      console: "PS3",
      precoAnterior: "",
      precoAtual: "R$ 118,90",
      imagem: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/182855/Jogo-Grand-Theft-Auto-V-Ps3_1661779714_gg.jpg",
    },
    {
      nome:"Grand Theft Auto San Andreas",
      console: "PS2",
      precoAnterior: "R$ 190,00",
      precoAtual: "R$ 4,00",
      imagem: "https://cdn.awsli.com.br/800x800/138/138431/produto/7989213/a2dd1c5b9b.jpg",
    },
    {
      nome:"Jogo Crash Bandicoot 3: Warped",
      console: "PS",
      precoAnterior: "R$ 190,00",
      precoAtual: "R$ 324,00",
      imagem: "https://cdn.awsli.com.br/600x450/138/138431/produto/147752270/63f35d29f0.jpg",
    },
    {
      nome:"God of War Ragnarok",
      console: "PS5",
      precoAnterior: "R$ 349,90",
      precoAtual: "R$ 290,31",
      imagem: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/375097/Jogo-God-Of-War-Ragnarok-PS5-Pr-Venda_1659462526_g.jpg",
    },
    {
      nome:"The Last Of Us Part II",
      console: "PS4",
      precoAnterior: "R$ 283,98",
      precoAtual: "R$ 99,99",
      imagem: "https://images.kabum.com.br/produtos/fotos/107331/jogo-the-last-of-us-part-ii-ps4_1659030888_gg.jpg",
    },
    {
      nome:"Grand Theft Auto V",
      console: "PS3",
      precoAnterior: "",
      precoAtual: "R$ 118,90",
      imagem: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/182855/Jogo-Grand-Theft-Auto-V-Ps3_1661779714_gg.jpg",
    },
    {
      nome:"Grand Theft Auto San Andreas",
      console: "PS2",
      precoAnterior: "R$ 190,00",
      precoAtual: "R$ 4,00",
      imagem: "https://cdn.awsli.com.br/800x800/138/138431/produto/7989213/a2dd1c5b9b.jpg",
    },
    {
      nome:"Jogo Crash Bandicoot 3: Warped",
      console: "PS",
      precoAnterior: "R$ 190,00",
      precoAtual: "R$ 324,00",
      imagem: "https://cdn.awsli.com.br/600x450/138/138431/produto/147752270/63f35d29f0.jpg",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}


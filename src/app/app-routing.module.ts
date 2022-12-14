import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './pages/ecommerce/ecommerce.component';
import { EmojiComponent } from './pages/emoji/emoji.component';
import { GeradorSenhaComponent } from './pages/gerador-senha/gerador-senha.component';
import { IndexComponent } from './pages/index/index.component';
import { PageApiComponent } from './pages/page-api/page-api.component';
import { TeclasComponent } from './pages/teclas/teclas.component';
import { UnsplashApiComponent } from './pages/unsplash-api/unsplash-api.component';

const routes: Routes = [
  {path: "", component: IndexComponent},
  {path: "ecommerce", component: EcommerceComponent},
  {path: "page-api", component: PageApiComponent},
  {path: "teclas", component: TeclasComponent},
  {path: "gerador-senha", component: GeradorSenhaComponent},
  {path: "unsplash-api", component: UnsplashApiComponent},
  {path: "emoji", component: EmojiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

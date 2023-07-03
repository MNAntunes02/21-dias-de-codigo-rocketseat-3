import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './pages/ecommerce/ecommerce.component';
import { EmojiComponent } from './pages/emoji/emoji.component';
import { GeradorSenhaComponent } from './pages/gerador-senha/gerador-senha.component';
import { IndexComponent } from './pages/index/index.component';
import { PageApiComponent } from './pages/page-api/page-api.component';
import { TeclasComponent } from './pages/teclas/teclas.component';
import { UnsplashApiComponent } from './pages/unsplash-api/unsplash-api.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

const routes: Routes = [
  {path: "", component: IndexComponent},
  {path: "ecommerce", component: EcommerceComponent},
  {path: "portfolio", component: PortfolioComponent},
  {path: "page-api", component: PageApiComponent},
  {path: "teclas", component: TeclasComponent},
  {path: "gerador-senha", component: GeradorSenhaComponent},
  {path: "unsplash-api", component: UnsplashApiComponent},
  {path: "emoji", component: EmojiComponent},
  {path: "**" , redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

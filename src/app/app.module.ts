import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { EcommerceComponent } from './pages/ecommerce/ecommerce.component';
import { IndexComponent } from './pages/index/index.component';
import { PageApiComponent } from './pages/page-api/page-api.component';
import { TeclasComponent } from './pages/teclas/teclas.component';
import { GeradorSenhaComponent } from './pages/gerador-senha/gerador-senha.component';
import { UnsplashApiComponent } from './pages/unsplash-api/unsplash-api.component';
import { EmojiComponent } from './pages/emoji/emoji.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EcommerceComponent,
    IndexComponent,
    PageApiComponent,
    TeclasComponent,
    GeradorSenhaComponent,
    UnsplashApiComponent,
    EmojiComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

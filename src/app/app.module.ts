import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { VicholaService } from './vichola.service';
import { MatInputModule, MatSliderModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatCardModule,
    MatRippleModule,
    MatPaginatorModule,
    MatButtonModule,
    MatListModule,
    AppRoutingModule,
    MatInputModule,
    MatSliderModule,
    FormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [VicholaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

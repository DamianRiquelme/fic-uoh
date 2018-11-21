import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { CollaboratorsComponent } from './components/collaborators/collaborators.component';
import { DlTempComponent } from './components/dl-temp/dl-temp.component';
import { DlHumComponent } from './components/dl-hum/dl-hum.component';
import { MonitorComponent } from './components/monitor/monitor.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ImageGalleryComponent,
    CollaboratorsComponent,
    DlTempComponent,
    DlHumComponent,
    MonitorComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {CollaboratorsComponent} from './components/collaborators/collaborators.component';
import {ImageGalleryComponent} from './components/image-gallery/image-gallery.component';
import {DlTempComponent} from './components/dl-temp/dl-temp.component';
import {DlHumComponent} from './components/dl-hum/dl-hum.component';
import {MonitorComponent} from './components/monitor/monitor.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'collaborators', component: CollaboratorsComponent },
    { path: 'gallery', component: ImageGalleryComponent },
    { path: 'dl-temp', component: DlTempComponent },
    { path: 'dl-hum', component: DlHumComponent },
    { path: 'monitor', component: MonitorComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

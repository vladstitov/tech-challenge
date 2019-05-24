import {PersonGalleryComponent} from './gallery/person-gallery/person-gallery.component';
import {Routes} from '@angular/router';

export const appRoutes: Routes = [

  { path: '', redirectTo: 'person-gallery', pathMatch: 'full' },
  { path: 'person-gallery', component:PersonGalleryComponent }
  ];

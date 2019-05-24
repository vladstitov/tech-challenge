import { Component, OnInit } from '@angular/core';
import {PersonAlbumService} from '../../core/person-album.service';
import {Observable} from 'rxjs';
import {VOImage} from '../../models/album.models';

@Component({
  selector: 'app-person-gallery',
  templateUrl: './person-gallery.component.html',
  styleUrls: ['./person-gallery.component.css']
})
export class PersonGalleryComponent implements OnInit {
  images$: Observable<VOImage[]>;
  constructor(
    private albumService: PersonAlbumService
  ) {
    this.images$ = albumService.images$;
  }
  ngOnInit() {
  }

}

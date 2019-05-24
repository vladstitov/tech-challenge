import { Component, OnInit } from '@angular/core';
import {PersonAlbumService} from '../../core/person-album.service';
import {Observable} from 'rxjs';
import {VOAlbum, VOImage, VOPerson} from '../../models/album.models';

@Component({
  selector: 'app-select-album',
  templateUrl: './select-album.component.html',
  styleUrls: ['./select-album.component.css']
})
export class SelectAlbumComponent implements OnInit {

  persons$: Observable<VOPerson[]>;
  albums$: Observable<VOAlbum[]>;
  currentPerson: VOPerson;
  currentAlbum: VOAlbum;

  constructor(
    private albumService: PersonAlbumService
  ) {
    this.persons$ = albumService.persons$;
    this.albums$ = albumService.albums$;
  }

  ngOnInit() {
  }

  onPersonChanged() {
    this.albumService.currentPerson = this.currentPerson;

  }

  onAlbumChanged() {
    this.albumService.currentAlbum = this.currentAlbum;
  }
}

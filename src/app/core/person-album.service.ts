import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {VOAlbum, VOImage, VOPerson} from '../models/album.models';
import {HttpClient} from '@angular/common/http';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonAlbumService {

  persons$: BehaviorSubject<VOPerson[]> = new BehaviorSubject(null);
  albums$: BehaviorSubject<VOAlbum[]> = new BehaviorSubject(null);
  images$: BehaviorSubject<VOImage[]> = new BehaviorSubject(null);

  currentPerson$: BehaviorSubject<VOPerson> = new BehaviorSubject(null);
  currentAlbum$: BehaviorSubject<VOAlbum> = new BehaviorSubject(null);

  set currentPerson(person: VOPerson) {
    const cur = this.currentPerson$.getValue();
    if(cur !== person) this.currentPerson$.next(person);

  }
  set currentAlbum(album: VOAlbum) {
    const cur = this.currentAlbum$.getValue();
    if(cur !== album) this.currentPerson$.next(album);

  }

  set selectedAlbum(album: string) {

  }

  selectedImage: string;
  constructor(
    private http: HttpClient
  ) {

    this.currentPerson$.pipe(filter(v =>!!v)).subscribe(person => {
     const url = 'get_albums_person' + person.id;
     /// after response
     this.albums$.next([]);
    })

    this.currentAlbum$.pipe(filter(v =>!!v)).subscribe(person => {
      const url = 'get_albums_person' + person.id;
      /// after response
      this.images$.next([]);
    });

    const url = ' persons ';

    this.persons$.next([])

  }



}

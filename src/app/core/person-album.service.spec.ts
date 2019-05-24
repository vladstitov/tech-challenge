import { TestBed } from '@angular/core/testing';

import { PersonAlbumService } from './person-albom.service';

describe('PersonAlbomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonAlbumService = TestBed.get(PersonAlbumService);
    expect(service).toBeTruthy();
  });
});

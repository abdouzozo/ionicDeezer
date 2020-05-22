import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSearchAlbum} from "../Models/data-search-album";
import { DataSearchArtist} from "../Models/data-search-artist";

@Injectable({
  providedIn: 'root'
})
export class DeezerService {
  TAG: 'DeezerService';

  constructor(private http: HttpClient) {}

  getAuthors(artist:string):Promise<DataSearchArtist> {

    console.log(`${this.TAG} getAuthors ${artist}`);
    const url: string = 'https://api.deezer.com/search/artist?q=' + encodeURI(artist);
    console.log(`${this.TAG} url: ${url}`);
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        let json: DataSearchArtist = data as DataSearchArtist;
        resolve(json);
      }, err => {
        console.log(err);
      });
    });
  }

  getAlbums(artist:string):Promise<DataSearchAlbum> {

    console.log("getAlbum artist name is : " + artist);

    console.log(`${this.TAG} getAlbums ${artist}`);
    const url: string = 'https://api.deezer.com/search/album?q=' + encodeURI(artist);
    console.log(`${this.TAG} url: ${url}`);
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        let json: DataSearchAlbum = data as DataSearchAlbum;
        resolve(json);
      }, err => {
        console.log(err);
      });
    });
  }

}

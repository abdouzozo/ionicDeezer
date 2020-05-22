import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Artist} from "../Models/Artist";
import {DataSearchArtist} from "../Models/data-search-artist";
import { DeezerService } from '../service/deezer.service';
import {DataSearchAlbum} from "../Models/data-search-album";
import {Album} from "../Models/album";

artist: Artist;

@Component({
  selector: 'app-list-album',
  templateUrl: './list-album.page.html',
  styleUrls: ['./list-album.page.scss'],
})
export class ListAlbumPage implements OnInit {

  artist: string;
  listAlbum: Album[];
  readonly TAG:string = 'List-Album';

  ngOnInit() {

      this.route
          .queryParams
          .subscribe(params => {
            this.artist = params['name'];
          });

      console.log("mon artist est passé : " + this.artist);
      this.searchAlbums();


    }

  constructor(public deezerService:DeezerService, private route: ActivatedRoute, public router: Router) {

  }

  searchAlbums(){
    console.log('${this.TAG} onSearchArtist begin');

    /*let val:string = event.target.value;
    console.log('${this.TAG} val ${val}');*/

    this.deezerService.getAlbums(this.artist).then( (result :DataSearchAlbum ) => {

      console.log('${this.TAG} data=${JSON.stringify(result)}');
      this.listAlbum = result.data;
    } ).catch( (err) => {
      console.log('${this.TAG} err=${JSON.stringify(err)}');
    });
  }

  /*searchAlbums() {
    this.deezerService.getAlbums(this.artist).then( result => {
      console.log(`${this.TAG} data = ${JSON.stringify(result)}`);
      this.listAlbum = result.data;
    }).catch( err => {
      console.log(` ${this.TAG} err : ${err} `);
    });
  }*/




}

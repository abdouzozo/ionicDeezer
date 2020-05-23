import { Component, OnInit } from '@angular/core';
import {DeezerService} from "../service/deezer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Track} from "../Models/track";
import {DataSearchTrack} from "../Models/data-search-track";

@Component({
  selector: 'app-list-track',
  templateUrl: './list-track.page.html',
  styleUrls: ['./list-track.page.scss'],
})
export class ListTrackPage implements OnInit {

  album: number;
  listTrack: Track[];
  readonly TAG:string = 'List-Track';

  audio: HTMLAudioElement;
  showToggle:boolean = true;


  constructor(public deezerService:DeezerService, private route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    /*this.route
        .queryParams
        .subscribe(params => {
          this.album = params['id'];
        });*/

    this.album = Number(this.route.snapshot.paramMap.get('id'));

    console.log("mon album est passé : " + this.album);
    this.searchTracks();

    this.audio = new Audio();

  }

  searchTracks(){
    console.log(`${this.TAG} onSearchTracks begin`);

    /*let val:string = event.target.value;
    console.log('${this.TAG} val ${val}');*/

    this.deezerService.getTracks(this.album).then( (result :DataSearchTrack ) => {

      console.log(`${this.TAG} data=${JSON.stringify(result)}`);
      this.listTrack = result.data;
    } ).catch( (err) => {
      console.log(`${this.TAG} err=${JSON.stringify(err)}`);
    });
  }

  showToggleFun(){
    if(this.showToggle == true){
      this.showToggle = false;
    }else{
      this.showToggle = true;
    }
  }

  startAudio(preview: string) {
    this.showToggle = false;
    /*let options: StreamingAudioOptions = {
      successCallback: () => { console.log('Finished Audio') },
      errorCallback: (e) => { console.log('Error: ', e) },
      initFullscreen: false // iOS only!
    };*/
    this.audio.src = preview;
    this.audio.play();
  }


  stopAudio(preview: string) {
    this.audio.src = preview;
    this.showToggle = true;
    this.audio.pause();
  }


}

import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
export interface PeriodicElement {
  name: string;
  id: number;
  src:string
  format:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, format:'MP3/192',name: 'SoundHelix-Song-1',src:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'},
  {id: 2, format:'MP3/192',name: 'SoundHelix-Song-2',src:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'},

  {id: 3,format:'MP3/192', name: 'SoundHelix-Song-3',src:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'},
  {id: 4,format:'MP3/192', name: 'SoundHelix-Song-4',src:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'},
  {id: 5,format:'MP3/192', name: 'SoundHelix-Song-5',src:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'},
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent{
  title = 'test';

  public currentSong=''
  displayedColumns: string[] = ['id', 'name','format' ];
  dataSource = ELEMENT_DATA;
  public getRecord(e: any,){
    console.log(e)
    this.currentSong =e.src
  }
  public closePlayer(){
    this.currentSong =''
  }
}







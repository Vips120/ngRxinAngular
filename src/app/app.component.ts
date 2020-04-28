import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SelectedSong } from './store/action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'myapp';
  public songs: any[];
  public Songlist$: Observable<any[]>;
  constructor(private store: Store<{ list: any[] }>) {}
  ngOnInit() {
    this.Songlist$ = this.store.pipe(select('list'));
    this.Songlist$.subscribe((data) => {
      // console.log(data);
      this.songs = data;
    });
  }
  SelectedSong(item: any) {
    this.store.dispatch(new SelectedSong(item));
  }
}

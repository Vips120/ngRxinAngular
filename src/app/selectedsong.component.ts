import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-selectedsong',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12" *ngIf="song">
          <div class="card text-left">
            <div class="card-body">
              <h4 class="card-title">{{ song.name }}</h4>
              <p class="card-text">{{ song.singer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class SelectedSongComponent implements OnInit {
  public Song$: Observable<any>;
  public song: any;
  constructor(private store: Store<{ song: any }>) {}
  ngOnInit() {
    this.Song$ = this.store.select('song');
    this.Song$.subscribe((item) => {
      //   console.log(item);
      this.song = item;
    });
  }
}

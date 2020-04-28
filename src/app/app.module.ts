import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { SongsList, SongReducer } from './store/reducer';
import { SelectedSongComponent } from './selectedsong.component';

@NgModule({
  declarations: [AppComponent, SelectedSongComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ list: SongsList, song: SongReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

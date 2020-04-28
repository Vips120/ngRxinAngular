import { Action } from '@ngrx/store';
export enum SelectedSongType {
  SELECTED_SONG = '[Song] ITEM',
}

export class SelectedSong implements Action {
  readonly type = SelectedSongType.SELECTED_SONG;
  constructor(public payload: any) {}
}

export type SongAction = SelectedSong;

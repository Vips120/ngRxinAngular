import { SongAction, SelectedSongType } from '../action/index';

export const SongsList = () => {
  return [
    {
      id: 1,
      name: 'Stupid Love',
      singer: 'Lady Gaga',
    },
    {
      id: 2,
      name: 'Break my Heart',
      singer: 'Dua Lipa',
    },
    {
      id: 3,
      name: 'godZilla',
      singer: 'Eminem',
    },
  ];
};

export const SongReducer = (state = null, action: SongAction) => {
  switch (action.type) {
    case SelectedSongType.SELECTED_SONG:
      return action.payload;
    default:
      return state;
  }
};

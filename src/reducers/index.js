import { combineReducers } from 'redux';
import { selectedSong } from '../actions';
const songsReducer = () => {
    return [
        {title: 'no Scrubs', duration: '4.00'},
        {title: 'Macarene', duration: '2.30'},
        {title: 'All star', duration: '4.50'},
        {title: 'I want it thay way', duration: '3.00'},
    ]
}


const SelectedSong = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: SelectedSong
})


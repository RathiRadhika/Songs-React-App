import {combineReducers} from 'redux';

const songReducer =()=>{

    return [
        {title:'Hello brother',duration:'4:05'},
        {title:'Bole chudiya',duration:'4:00'},
        {title:'Pathodi',duration:'4:05'},
        {title:'Kesariya',duration:'4:05'},
    ];
};

const selectedSongReducer=(selectedSong=null,action)=>{

    if(action.type=='SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs:songReducer,
    selectedSong:selectedSongReducer
});
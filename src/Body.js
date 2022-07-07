import React from "react";
import './Body.css';
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import Header from "./Header";
import SongRow from "./SongRow";

function Body({spotify}) {
    const [{discover_weekly}, dispatch] = useDataLayerValue();
    return ( 
        <div className="body">
            <Header spotify={spotify}/>
            <div className="body__info">
                <img src="https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/qqFQbWsG9EYzHqzYlXM9Id6v5Soowf52K8R61PU5ghdPzDwCCn9hkgjCdLMv3pzaArUKMVSXOzuV-Z2zCeFyB3ia5f6b9o2tmvmaEDeRlQ4=/ODI6NzE6NTFUOTAtNTAtMg==" alt=""/>
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>

                {discover_weekly?.tracks.items.map(item => (
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    );
}

export default Body;
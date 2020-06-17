import React from 'react';

import BladeImage from '../../BladeImage/BladeImage';
import BladeMiniDescription from '../../BladeMiniDescription/BladeMiniDescription';

const bladeRow = (props) => {
    const bladeImages = [];
    props.rowList.forEach(ele => {
        bladeImages.push(<BladeImage key={ele.name} blade={ele} clicked={props.clicked} />);
    }); 

    let bladeMiniDesc = null;
    if (props.doesRowContainActiveBlade) {
        bladeMiniDesc = <BladeMiniDescription 
            activeThumbnail={props.activeThumbnail} 
            descThumbClicked={props.descThumbClicked} 
            activeBlade={props.activeBlade}/>;
    };

    return (
        <div>
            {bladeImages}
            {bladeMiniDesc}
        </div> 
    );
};

export default bladeRow;
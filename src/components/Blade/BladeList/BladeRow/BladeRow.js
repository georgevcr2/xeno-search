import React from 'react';

import BladeImage from './BladeImage/BladeImage';

const bladeRow = (props) => {
    const row = [];
    props.list.forEach(ele => {
        row.push(<BladeImage key={ele.name} imgClicked={props.imgClicked} source={props.images[ele.thumbnail]} altText={ele.name} />);
    });

    return <div>{row}</div>;
};

export default bladeRow;
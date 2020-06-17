import React from 'react';

import BladeRow from './BladeRow/BladeRow';
import styled from 'styled-components';

const Div = styled.div`
    display: block;
`;

const bladeList = (props) => {
    const rows = [];
    let bladeForRow = [];
    let doesRowContainActiveBlade = false;

    for (let i = 1; i <= props.bladeList.length; i++) {
        bladeForRow.push(props.bladeList[i - 1]);

        if (i % 4 === 0 || i === props.bladeList.length) {
            if (props.activeBlade !== null) {
                bladeForRow.forEach(ele => {
                    doesRowContainActiveBlade = ele.name === props.activeBlade.name || doesRowContainActiveBlade ? true : false;
                });
            }

            rows.push(<BladeRow key={'row' + Math.ceil(i / 4)} 
                activeThumbnail={props.activeThumbnail}
                clicked={props.clicked} 
                descThumbClicked={props.descThumbClicked}
                rowList={bladeForRow} 
                doesRowContainActiveBlade={doesRowContainActiveBlade}
                activeBlade={props.activeBlade} />);

            bladeForRow = [];
            doesRowContainActiveBlade = false;
        };
    }

    return <Div>{rows}</Div>;
};

export default bladeList;
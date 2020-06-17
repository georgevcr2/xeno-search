import React from 'react';
import styled from 'styled-components';

import BladeImage from '../BladeImage/BladeImage'

const Div = styled.div`
    align-content: center;
    text-align: left;
    width: 80%;
    padding: 10px;
    margin: 10px auto;
    box-sizing: border-box;
`;

const DescHeader = styled.div`
`;

const Description = styled.p`
`;

const Link = styled.a`
    text-align: center;
`;

const bladeMiniDescription = (props) => {
    let doesHaveMutipleImages = false;
    if (props.activeBlade.thumbnailimages.length > 1) {
        doesHaveMutipleImages = true;
    }

    return (
        <Div>
            <DescHeader>
                <BladeImage activeThumbnail={props.activeThumbnail} mutipleImages={doesHaveMutipleImages} descThumbClicked={props.descThumbClicked} blade={props.activeBlade} />
                <h2>{props.activeBlade.name}</h2>
            </DescHeader>
            <Description>{props.activeBlade.description}</Description>
            <Link>Show More...</Link>
        </Div>
    );
};

export default bladeMiniDescription;
import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    padding: 10px 10px;
    &:hover {
        cursor: ${props => props.noClick ? 'default' : 'pointer'};
    }
`;

const bladeImage = (props) => {
    const imageClickedHandler = () => {
        if (props.mutipleImages  !==  undefined) {
            if (props.mutipleImages) {
                props.descThumbClicked();
            }
        } else {
            props.clicked(props.blade);
        }
    }

    return <Img 
        onClick={imageClickedHandler} 
        src={props.activeThumbnail !== undefined ? props.activeThumbnail : props.blade.thumbnailimages[0]} alt={props.blade.name} 
        width="100" height="100" />;
};

export default bladeImage;
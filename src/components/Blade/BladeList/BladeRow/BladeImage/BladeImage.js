import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    padding: 10px 10px;
    &:hover {
        cursor: pointer
    }
`;

const bladeImage = (props) => {
    return <Img onClick={props.clicked} onClick={() => props.imgClicked(props.altText)} src={props.source} alt={props.altText} width="100" height="100" />;
};

export default bladeImage;
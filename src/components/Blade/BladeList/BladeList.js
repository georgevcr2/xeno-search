import React from 'react';

import bladeListJSON from '../../../bladelist.json';
import BladeRow from './BladeRow/BladeRow';
import styled from 'styled-components';

const Div = styled.div`
    display: block;
`;

const bladeList = (props) => {
    const importAll = (r) => {
        let images = {};
        r.keys().map((item, index) => { 
            return images[item.replace('./', '')] = r(item); 
        });
        return images;
    }

    const images = importAll(require.context('../../../assets/images/bladeimages', false, /\.(png|jpe?g|svg)$/));

    const bladeArr = bladeListJSON.filter(ele => {
        return ele;
    }, []);

    console.log(bladeArr)

    const bladeRowArr = [];
    let temp = [], count = 0;
    const bladeCount = bladeArr.length;
    const elementPerRow = window.innerWidth < 500 ? 2 : 4; // figure something out css? or make this a container? or maybe doing something in the row.js
    for (let i = 1; i <= bladeCount; i++) {
        temp.push(bladeArr.shift());
        if (i % elementPerRow === 0 || i === bladeCount) {
            bladeRowArr.push(<BladeRow key={'row' + count} imgClicked={props.imgClicked} images={images} list={temp} />)
            temp = [];
            count+=1;
        }
    }   

    console.log(bladeRowArr)

    return (
        <Div>
            {bladeRowArr}
        </Div>
    );
};

export default bladeList;
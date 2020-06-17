import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';

import bladeListJSON from '../../bladelist.json';
import Input from '../../components/UI/Input/Input';
import BladeList from '../../components/Blade/BladeList/BladeList';
import { updateObject, importAll } from '../../utility/utility';
import * as actions from '../../store/actions/index';

const H1 = styled.h1`
    font: italic bold 40px 'Helvetica Neue';
    letter-spacing: 0.05em;
`;

class DisplayBlades extends Component {
    constructor() {
        super();

        const images = importAll(require.context('../../assets/images/bladeimages/thumbnails', false, /\.(png|jpe?g|svg)$/));
        const fullimages = importAll(require.context('../../assets/images/bladeimages/fullimages', false, /\.(png|jpe?g|svg)$/));

        const bladeListArr = [];
        let thumbnailLocation = [];
        bladeListJSON.forEach(ele => {
            thumbnailLocation = [];
            for (let i = 0; i < ele.thumbnailimages.length; i++) {
                thumbnailLocation.push(images[ele.thumbnailimages[i]]);
            }
            bladeListArr.push(updateObject(ele, {thumbnailimages: thumbnailLocation}));
        });

        this.state = {
            search: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Search for a Blade or Character'
                },
                value: ''
            },
            filter: {
                placeholder: ''
            },
            bladeList: bladeListArr,
        }
    };

    inputChangedHandler = (event) => {
        const updatedInput = updateObject(this.state.search, {value: event.target.value});        
        this.setState({search: updatedInput});
    };

    render() {
        console.log("[render] should render")
        return (
            <div>
                <H1>XenoSearch</H1>
                <Input 
                    elementType={this.state.search.elementType}
                    elementConfig={this.state.search.elementConfig} 
                    changed={(event) => this.inputChangedHandler(event)} />
                <BladeList 
                    activeThumbnail={this.props.activeThumbnail}
                    clicked={this.props.setActiveBlade} 
                    descThumbClicked={this.props.setActiveThumbnail}
                    bladeList={this.state.bladeList} 
                    activeBlade={this.props.activeBlade} />
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        activeBlade: state.activeBlade,
        activeThumbnail: state.activeThumbnail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActiveBlade: (blade) => dispatch(actions.setActiveBlade(blade)),
        setActiveThumbnail: () => dispatch(actions.setActiveThumbnail())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayBlades);
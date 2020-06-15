import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';

import Input from '../../components/UI/Input/Input';
import BladeList from '../../components/Blade/BladeList/BladeList';
import * as actions from '../../store/actions/index'

const H1 = styled.h1`
    font: italic bold 40px 'Helvetica Neue';
    letter-spacing: 0.1em;
`;

class DisplayBlades extends Component {
    state = {
        search: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Search for a Blade'
            },
            value: ''
        },
        filter: {
            placeholder: ''
        }
    };

    inputChangedHandler = (event) => {
        const updatedInput = { 
            ...this.state.search
        };

        updatedInput.value = event.target.value
        
        this.setState({search: updatedInput});
    };

    render() {
        let bladeMiniDesc = null;
        if (!this.props.activeBlade) {

        };

        console.log(this.props.activeBlade)

        return (
            <div>
                <H1>XenoSearch</H1>
                <Input 
                    elementType={this.state.search.elementType}
                    elementConfig={this.state.search.elementConfig} 
                    changed={(event) => this.inputChangedHandler(event)} />
                <BladeList cuurrentBlade={this.props.activeBlade} imgClicked={this.props.setBladeName} />
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        activeBlade: state.activeBlade
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setBladeName: (bladeName) => dispatch(actions.setCurrentBlade(bladeName))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayBlades);
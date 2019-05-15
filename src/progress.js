
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Progress extends Component {

    constructor(props) {
        super(props)
    }

    renderProgress () {
        const progressItemStyle = {
            width: `${100/this.props.nums}%`,
            height: '100%'
        };
        var ele = [];
        for (var i = 0; i < this.props.nums; i++) {
            if (i <= this.props.index) {
                ele.push(
                    <div style={Object.assign(progressItemStyle, {backgroundColor: this.props.progressColor})} key={i}></div>
                )
            } 
            // else {
            //     ele.push(
            //         <div style={progressItemStyle} key={i}></div>
            //     )
            //}
        }
        return ele;
    }

    render() {

        const progressStyle = {
            display: '-webkit-flex',
            color: this.props.progressColor,
            // margin: '0 25px'
            marginTop:'15px'
        };

        const progressArticleStyle = {
            height: 10,
            border: '1px solid #00a3cf',
            width: '260px',
            display: '-webkit-flex',
            borderRadius: 2,
            overflow: 'hidden',
            marginTop: 3
        };

        return (
            <div style={progressStyle}>
                <div style={progressArticleStyle}>
                {this.renderProgress()}
                    
                </div>
                <div style={{marginLeft:'10px',color:'#000',width:'15%'}}>
                {this.props.index }%
                </div>
            </div>
        )
    }
}

Progress.propTypes = {
    nums: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    progressColor: PropTypes.string.isRequired
};
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image } from 'react-native';


const Thumbnail = ({onPress, source, width, height, radius }) => {
    return (
        <TouchableOpacity 
        onPress={onPress}
        style={{
            width: width,
            height: height,
            borderRadius: radius,
        }}>
            <Image
                source={source}
                style={{
                    width: width,
                    height: height,
                    borderRadius: radius,
                    resizeMode: radius === 0 ? 'stretch' : null
                }}
            />
        </TouchableOpacity>
    )
}

Thumbnail.propTypes = {
    onPress:PropTypes.func,
    source: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    radius: PropTypes.number.isRequired
}
Thumbnail.defaultProps = {
    width: 40,
    height: 40,
    radius: 20
}

export default Thumbnail;
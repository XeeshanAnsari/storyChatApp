import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';


const CText = ({ numberOfLines, bold, color,fontSize, style, children }) => {
    return (
        <Text
            numberOfLines={numberOfLines}
            style={[
                {
                    color: color,
                    fontSize:fontSize,
                    fontWeight: bold ? 'bold' : null
                }, style
            ]}
        >
            {children}
        </Text>
    )
}

CText.propsTypes = {
    numberOfLines: PropTypes.number.isRequired,
    bold: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
    fontSize:PropTypes.string
}

CText.defaultProps = {
    numberOfLines: null,
    color: '#1E1E1E',
    bold: false
}

export default CText;
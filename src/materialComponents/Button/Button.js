import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Button = ({ fullSize, backgroundColor, paddingVertical, paddingHorizontal, marginVertical, marginHorizontal, borderRadius, onPress, style, iconName, color, bold, title }) => {

    return (
        <TouchableOpacity
            style={[
                {
                    width: fullSize ? '100%' : null,
                    flexDirection:'row',
                    backgroundColor: backgroundColor,
                    paddingVertical: paddingVertical,
                    paddingHorizontal: paddingHorizontal,
                    marginVertical: marginVertical,
                    marginHorizontal: marginHorizontal,
                    borderRadius: borderRadius,
                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowOffset: { height: 2, width: 2 },
                    shadowOpacity: 0.5,
                    shadowColor: '#1E1E1E',
                    elevation: 3,
                }
                , style ? style : null
            ]}
            onPress={onPress}
            activeOpacity={0.8}
        >

            {iconName ? <Icon name={iconName} style={{ color: color, fontSize: 20 }} /> : null}
            <Text style={{
                color: color,
                fontWeight: bold ? 'bold' : null,
                marginLeft:5
            }}>{title}</Text>
        </TouchableOpacity>
    )
}

Button.propTypes = {
    fullSize: PropTypes.bool.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    paddingVertical: PropTypes.number.isRequired,
    paddingHorizontal: PropTypes.number.isRequired,
    marginVertical: PropTypes.number,
    marginHorizontal: PropTypes.number,
    borderRadius: PropTypes.number,
    onPress: PropTypes.func.isRequired,
    style: PropTypes.object,
    iconName:PropTypes.string,
    color: PropTypes.string.isRequired,
    bold: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
}

Button.defaultProps = {
    fullSize: false,
    backgroundColor: '#CECECE',
    paddingVertical: 10,
    paddingHorizontal: 12,
    color: '#1E1E1E',
    bold: false,
    title: ''
}

export default Button;
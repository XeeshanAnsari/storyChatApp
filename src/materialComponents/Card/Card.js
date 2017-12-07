import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, TouchableOpacity } from 'react-native';


const Card = ({ onPress, backgroundColor, shadow, borderRadius,marginVertical, borderLeft, style, padding, children }) => {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={onPress}
            style={[
                {
                    zIndex:1,
                    overflow: 'hidden',
                    backgroundColor: backgroundColor,
                    borderRadius: borderRadius,
                    marginVertical:marginVertical ,
                    borderLeftWidth: borderLeft ? 5 : null,
                    borderLeftColor: borderLeft ? '#21A24F' : null,
                },
                shadow ? shadowObj : null
                , style
            ]}>
            <ScrollView>
                <View style={{
                    padding: padding
                }}>
                    {children}
                </View>
            </ScrollView>
        </TouchableOpacity>
    )
}

const shadowObj = {
    shadowColor: '#1e1e1e',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2
}

Card.propTypes = {
    onPress: PropTypes.func,
    backgroundColor: PropTypes.string.isRequired,
    borderRadius: PropTypes.number,
    marginVertical:PropTypes.number.isRequired,
    borderLeft: PropTypes.bool.isRequired,
    shadow: PropTypes.bool.isRequired,
    style: PropTypes.object,
    padding: PropTypes.number.isRequired,
}
Card.defaultProps = {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderLeft: false,
    marginVertical:5,
    shadow: true,
    padding: 0,
}

export default Card;

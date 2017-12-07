import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';

const Content = ({ padding, backgroundColor, style, children }) => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={[
                    {
                        flex: 1,
                        padding: padding,
                        backgroundColor: backgroundColor
                    },
                    style]}>
                    {children}
                </View>
            </ScrollView>
        </View>
    )
}

Content.propTypes = {
    padding: PropTypes.number,
    backgroundColor: PropTypes.string.isRequired,
    style: PropTypes.object
}

Content.defaultProps = {
    backgroundColor: '#F4F5F7'
}

export default Content;
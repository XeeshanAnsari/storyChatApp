import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';


const data = [
    { name: "Label", routeName: 'Label', icon: "ios-star" },
    { name: "Categories", routeName: "Categories", icon: "ios-radio-button-on" },
    { name: "Chat", routeName: "Chat", icon: "ios-square" },
    { name: "Setting", routeName: "Setting", icon: "settings" }
];

class FooterContent extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <Footer  >
                <FooterTab >
                    {
                        data.map((item, index) => {
                            return (
                                <Button key={index} onPress={() => navigation.navigate(item.routeName)}>
                                    <Icon name={item.icon} />
                                    <Text style={{ fontSize: 11, color: '#839ec1' }}>{item.name}</Text>
                                </Button>
                            )
                        })
                    }
                </FooterTab>
            </Footer>
        )
    }
}

export default FooterContent;
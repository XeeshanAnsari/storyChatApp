import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ImageBackground, TouchableOpacity } from 'react-native';
import { Container, Content, Text, Card, CardItem, Thumbnail } from './../../materialComponents';
import styles from './CategoryDetailsStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';

mapStateToProps = (state) => {
    return {

    }
}
mapDispatchToProps = (dispatch) => {
    return {

    }
}


const categories = [
    { "id": "5", "name": "Horror", "image": "https://www.theinquirer.net/w-images/62c8e187-90b6-4ae8-b37b-e2c0db94a919/1/pennywisetheclown-580x358.jpg" },
    { "id": "4", "name": "Horror", "image": "https://www.theinquirer.net/w-images/62c8e187-90b6-4ae8-b37b-e2c0db94a919/1/pennywisetheclown-580x358.jpg" },
    { "id": "3", "name": "Horror", "image": "https://www.theinquirer.net/w-images/62c8e187-90b6-4ae8-b37b-e2c0db94a919/1/pennywisetheclown-580x358.jpg" },
    { "id": "2", "name": "Horror", "image": "https://www.theinquirer.net/w-images/62c8e187-90b6-4ae8-b37b-e2c0db94a919/1/pennywisetheclown-580x358.jpg" }
]

class CategoryDetails extends Component {

    // move to another screen
    _handleRoute = (route, params) => {
        const { navigation } = this.props;
        if (params) {
            navigation.navigate(route, params);
        } else {
            navigation.navigate(route);
        }
    }

    render() {
        const {
            HeaderText,
            CategoryCard,
            CategoryTextContainer,
            CategoryText,
            CardUserContainer,
            CardUserLeftContainer,
            CardUserDetailsContainer,
            PostText,
            SaveMoneyText,
            CardReadButton,
            CardReadButtonText,
            CardUserRightContainer,
            CardFooterButtonContainer,
            CardFooterLikeButton,
            CardFooterButton,
            CardFooterButtonIcon,
            CardFooterButtonText,
            } = styles;
        return (
            <Container>
                <Content padding={20}>
                    <Text style={HeaderText}>Horror Stories</Text>
                    {
                        categories.map(category => {
                            return (
                                <Card
                                    onPress={() => this._handleRoute('CategoryDetails')}
                                    key={category.id}
                                    borderRadius={12}
                                    marginVertical={8} >
                                    <ImageBackground
                                        style={CategoryCard}
                                        source={{ uri: category.image }}>
                                        <View style={CategoryTextContainer}>
                                            <Text style={CategoryText}>
                                                {category.name}
                                            </Text>
                                        </View>
                                    </ImageBackground>
                                    <View style={CardUserContainer}>
                                        <View style={CardUserLeftContainer}>
                                            <Thumbnail source={require('./../../Images/person.png')} />
                                            <View style={CardUserDetailsContainer}>
                                                <Text style={PostText}>Chip - Automatic</Text>
                                                <Text style={SaveMoneyText}>Save more monoey</Text>
                                            </View>
                                        </View>
                                        <View style={CardReadButton}>
                                            <Text style={CardReadButtonText}>Read</Text>
                                        </View>
                                    </View>
                                    <View style={CardFooterButtonContainer}>
                                        <TouchableOpacity style={[CardFooterButton, CardFooterLikeButton]}>
                                            <Icon style={CardFooterButtonIcon} name='thumb-up' />
                                            <Text style={CardFooterButtonText}>12 Likes</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={CardFooterButton}>
                                            <Icon style={CardFooterButtonIcon} name='mode-comment' />
                                            <Text style={CardFooterButtonText}>23 Comments</Text>
                                        </TouchableOpacity>
                                    </View>
                                </Card>
                            )
                        })
                    }
                </Content>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetails);
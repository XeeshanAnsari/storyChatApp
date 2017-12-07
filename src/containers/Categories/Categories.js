import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ImageBackground } from 'react-native';
import { Container, Content, Text, Card, CardItem } from './../../materialComponents';
import styles from './CategoriesStyle';


mapStateToProps = (state) => {
    return {

    }
}
mapDispatchToProps = (dispatch) => {
    return {

    }
}


const categories = [
    { "id": "1", "name": "Horror", "image": "https://www.theinquirer.net/w-images/62c8e187-90b6-4ae8-b37b-e2c0db94a919/1/pennywisetheclown-580x358.jpg" },
    { "id": "2", "name": "Comedy", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo2DINzt3nSN48y4vu_2CEtg2vHO6hrxGk3LGDHpaJ7PLrzL6U" },
    { "id": "3", "name": "Sci-Fi", "image": "https://pbs.twimg.com/media/DEam5v9VwAAhdfc.jpg" },
    { "id": "4", "name": "Horror", "image": "https://www.theinquirer.net/w-images/62c8e187-90b6-4ae8-b37b-e2c0db94a919/1/pennywisetheclown-580x358.jpg" },
    { "id": "5", "name": "Comedy", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo2DINzt3nSN48y4vu_2CEtg2vHO6hrxGk3LGDHpaJ7PLrzL6U" },
    { "id": "6", "name": "Sci-Fi", "image": "https://pbs.twimg.com/media/DEam5v9VwAAhdfc.jpg" },
]

class Categories extends Component {

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
        const { HeaderText, CategoryCard, CategoryText } = styles;
        return (
            <Container>
                <Content padding={20}>
                    <Text style={HeaderText}>Stories</Text>
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
                                        <Text style={CategoryText}>
                                            {category.name}
                                        </Text>
                                    </ImageBackground>
                                </Card>
                            )
                        })
                    }
                </Content>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
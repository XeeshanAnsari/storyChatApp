import React, { Component } from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import {
    App,
    Categories,
    CategoryDetails 
} from './containers';
const DrawerNavigation = DrawerNavigator({
    Categories: {
        screen: Categories
    },
    CategoryDetails:{
        screen:CategoryDetails,
        path:'CategoryDetails/:cate_id'
    }
}, {
        headerMode: 'none',
    }
);


export {
    DrawerNavigation
}
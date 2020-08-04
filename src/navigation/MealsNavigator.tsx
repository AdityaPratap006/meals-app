import React from 'react';
// import { Platform } from 'react-native';
import {
    createAppContainer,
    NavigationRouteConfigMap,
    NavigationRoute,
    NavigationParams,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StackNavigationOptions } from 'react-navigation-stack/lib/typescript/src/vendor/types';
import { createBottomTabNavigator, NavigationBottomTabOptions, NavigationTabProp } from 'react-navigation-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
// import { createMaterialBottomTabNavigator, NavigationMaterialBottomTabOptions } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

// Constants
import { colors } from '../constants';

// Screens
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

const defaultStackNavigationOptions: StackNavigationOptions = {
    headerTitleStyle: {
        fontFamily: 'open-sans-bold',
    },
    headerStyle: {
        backgroundColor: colors.primaryColor,
        elevation: 5,
    },
    headerTintColor: "white",
}

const MealsStackNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen,
        },
        CategoryMeals: {
            screen: CategoryMealsScreen,
        },
        MealDetail: {
            screen: MealDetailScreen,
        },
    },
    {
        initialRouteName: "Categories",
        defaultNavigationOptions: defaultStackNavigationOptions,
    },
);

const FavoritesStackNavigator = createStackNavigator(
    {
        Favorites: {
            screen: FavoritesScreen,
        },
        MealDetail: {
            screen: MealDetailScreen,
        },
    },
    {
        defaultNavigationOptions: defaultStackNavigationOptions,
    },
);

let tabScreensConfig: NavigationRouteConfigMap<NavigationBottomTabOptions, NavigationTabProp<NavigationRoute<NavigationParams>, any>, unknown>;

tabScreensConfig = {
    Meals: {
        screen: MealsStackNavigator,
        navigationOptions: {
            tabBarLabel: "Meals",
            tabBarIcon: (tabInfo) => {
                return (
                    <MaterialIcons
                        name="restaurant"
                        size={25}
                        color={tabInfo.tintColor} />
                );
            },
        },
    },
    Favorites: {
        screen: FavoritesStackNavigator,
        navigationOptions: {
            tabBarLabel: "Favorites",
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons
                        name="ios-star"
                        size={25}
                        color={tabInfo.tintColor}
                    />
                );
            },
        },
    },
}

// colored bottom navigation
// const materialBottomTabNavigator = createMaterialBottomTabNavigator(
//     tabScreensConfig,
//     {
//        activeColor: 'white',
//        inactiveColor: '#eee',
//        shifting: true,
//     }
// );

// white bottom navigation
const bottomTabNavigator = createBottomTabNavigator(
    tabScreensConfig,
    {
        tabBarOptions: {
            activeBackgroundColor: 'white', 
            activeTintColor: colors.primaryColor,
        },
    }
)

const MealsFavTabNavigator = bottomTabNavigator;

const FilterStack = createStackNavigator(
    {
        Filters: FiltersScreen,
    },
    {
        defaultNavigationOptions: defaultStackNavigationOptions,
    }
);

const MainDrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: MealsFavTabNavigator,
            navigationOptions: {
                drawerLabel: 'Recipes',
            },
        },
        Filters: {
            screen: FilterStack,
            navigationOptions: {
                drawerLabel: 'Filters',
            }
        },
    },
    {
        contentOptions: {
            activeTintColor: colors.primaryColor,
            activeBackgroundColor: colors.primaryColorTransparent,
            inactiveTintColor: '#444',
            labelStyle: {
                fontFamily: 'open-sans',
                fontSize: 22,
            },
        },
        drawerBackgroundColor: 'white',
    }
);

export default createAppContainer(MainDrawerNavigator);

import React from 'react'; 
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

// Constants
import { colors } from '../constants';

// Screens
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

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
        defaultNavigationOptions: {
            headerTitleStyle: {
                fontFamily: 'open-sans-bold',
            },
            headerStyle: {
                backgroundColor: colors.primaryColor,
                elevation: 5,
            },
            headerTintColor: "white",
        },
    }
);

const MealsFavTabNavigator = createBottomTabNavigator(
    {
        Meals: {
            screen: MealsStackNavigator,
            navigationOptions: {
                tabBarLabel: "All Meals",
                tabBarIcon: (tabInfo) => {
                    return (
                        <Ionicons
                            name="ios-restaurant"
                            size={25}
                            color={tabInfo.tintColor}
                        />
                    );
                },
            },
        },
        Favorites: {
            screen: FavoritesScreen,
            navigationOptions: {
                tabBarLabel: "Favorites!",
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
    },
    {
        tabBarOptions: {
            activeBackgroundColor: 'white',
            activeTintColor: colors.primaryColor,
        },
    }
);

export default createAppContainer(MealsFavTabNavigator);

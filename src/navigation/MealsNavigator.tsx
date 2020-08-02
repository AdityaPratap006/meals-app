import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// Constants
import { colors } from '../constants';

// Screens
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const MealsStackNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: {
        screen: MealDetailScreen,
    },
}, {
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
});

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsStackNavigator,
    },
    Favorites: {
        screen: FavoritesScreen,
    },
});

export default createAppContainer(MealsFavTabNavigator);
  
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Constants
import { colors } from '../constants';

// Screens
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
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

export default createAppContainer(MealsNavigator);

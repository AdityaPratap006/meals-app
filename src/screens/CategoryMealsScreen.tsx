import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationStackOptions, NavigationStackScreenProps } from 'react-navigation-stack';

// Data
import { MEALS } from '../data/dummyData';

// Components
import MealCardList from '../components/MealCardList';


const CategoryMealsScreen = ({ navigation }: NavigationStackScreenProps) => {
    const categoryId: string = navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter(meal => (meal.categoryIds.includes(categoryId)));

    return (
        <View style={styles.screen}>
             <MealCardList
                mealList={displayedMeals}
                navigation={navigation}
             />
        </View>
    );
};


export default CategoryMealsScreen;

const navOptions = (navData: NavigationStackScreenProps): NavigationStackOptions => {

    return ({
        headerTitle: navData.navigation.getParam('categoryTitle') as string,
    });
}

CategoryMealsScreen.navigationOptions = navOptions;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    
});

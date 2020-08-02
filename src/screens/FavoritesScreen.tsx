import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationStackOptions, NavigationStackScreenProps } from 'react-navigation-stack';

// Data
import { MEALS } from '../data/dummyData';

// Components
import MealCardList from '../components/MealCardList';

const FavoritesScreen = ({ navigation }: NavigationStackScreenProps) => {
    const favMeals = MEALS.filter(meal => meal.categoryIds.includes('c1') || meal.categoryIds.includes('c8'));
    return (
        <View style={styles.screen}>
            <MealCardList
                mealList={favMeals}
                navigation={navigation}
            />
        </View>
    );
};

export default FavoritesScreen;

const navOptions: NavigationStackOptions = {
    headerTitle: 'Your Favorites',
}

FavoritesScreen.navigationOptions = navOptions;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

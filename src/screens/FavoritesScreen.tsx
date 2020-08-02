import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationStackOptions, NavigationStackScreenProps } from 'react-navigation-stack';
import { NavigationBottomTabOptions } from 'react-navigation-tabs';
import { NavigationDrawerScreenProps } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

// Data
import { MEALS } from '../data/dummyData';

// Components
import MealCardList from '../components/MealCardList';
import CustomHeaderButton from '../components/CustomHeaderButton';

type nestedNavigationScreenProp = NavigationStackScreenProps & NavigationBottomTabOptions & NavigationDrawerScreenProps;

const FavoritesScreen = (props: NavigationStackScreenProps) => {
    const favMeals = MEALS.filter(meal => meal.categoryIds.includes('c1') || meal.categoryIds.includes('c8'));

    return (
        <View style={styles.screen}>
            <MealCardList
                mealList={favMeals}
                navigation={(props as nestedNavigationScreenProp).navigation}
            />
        </View>
    );
};

export default FavoritesScreen;

const navOptions = (navData: NavigationStackScreenProps): NavigationStackOptions => ({
    headerTitle: 'Your Favorites',
    headerLeft: (props) => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title="Menu"
                iconName="md-menu"
                onPress={() => {
                    (navData as nestedNavigationScreenProp).navigation.toggleDrawer();
                }}
            />
        </HeaderButtons>
    ),
});

FavoritesScreen.navigationOptions = navOptions;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

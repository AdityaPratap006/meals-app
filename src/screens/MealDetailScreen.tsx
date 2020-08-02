import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationStackOptions, NavigationStackScreenProps } from 'react-navigation-stack';

// Data
import { MEALS } from '../data/dummyData';

// Models
import Meal from '../models/meal';

// Components
import ExtendedAppBar from '../components/ExtendedAppBar';


const MealDetailScreen = ({ navigation }: NavigationStackScreenProps) => {
    const mealId = navigation.getParam('mealId') as string;
    const meal = MEALS.find(mealItem => mealItem.id === mealId) as Meal;

    return (
        <View style={styles.screen}>
            <Text>{meal.title}</Text>
            <Button
                title="Go to Categories"
                onPress={() => {
                    navigation.popToTop();
                }}
            />
        </View>
    );
};

export default MealDetailScreen;

const navOptions = (navData: NavigationStackScreenProps): NavigationStackOptions => {

    const mealId = navData.navigation.getParam('mealId') as string;
    const meal = MEALS.find(mealItem => mealItem.id === mealId) as Meal;

    return ({
        header: (props) => <ExtendedAppBar title={meal.title} headerProps={props} />,
    });
}

MealDetailScreen.navigationOptions = navOptions;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

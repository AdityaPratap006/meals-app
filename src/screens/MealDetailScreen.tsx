import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import { NavigationStackOptions, NavigationStackScreenProps } from 'react-navigation-stack';

// Data
import { MEALS } from '../data/dummyData';

// Models
import Meal from '../models/meal';

// Constants
import { colors } from '../constants';

const MealDetailScreen = ({ navigation }: NavigationStackScreenProps) => {
    return (
        <View style={styles.screen}>
            <Text>Meal Details Screen</Text>
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
        headerTitle: meal.title,
        headerStyle: {
            height: Dimensions.get('window').height * 0.20,
            backgroundColor: colors.primaryColor,
        }
    });
}

MealDetailScreen.navigationOptions = navOptions;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

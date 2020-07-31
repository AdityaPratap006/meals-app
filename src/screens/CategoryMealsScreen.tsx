import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

interface CategoryMealsScreenProp {
    navigation: NavigationStackProp,
};

const CategoryMealsScreen = ({ navigation }: CategoryMealsScreenProp) => {
    return (
        <View style={styles.screen}>
            <Text>Category Meals Screen</Text>
            <Button
                title="Go to Meal Detail!"
                onPress={() => {
                    navigation.navigate({
                        routeName: 'MealDetail'
                    });
                }}
            />
        </View>
    );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

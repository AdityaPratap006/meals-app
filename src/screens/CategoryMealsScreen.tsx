import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationStackOptions, NavigationStackScreenProps } from 'react-navigation-stack';

const CategoryMealsScreen = ({ navigation }: NavigationStackScreenProps) => {
    const categoryTitle: string = navigation.getParam('categoryTitle');
    return (
        <View style={styles.screen}>
            <Text>{categoryTitle}</Text>
            <Button
                title="Go to Meal Detail!"
                onPress={() => {
                    navigation.navigate({
                        routeName: 'MealDetail'
                    });
                }}
            />
            <Button
                title="Go Back"
                onPress={() => {
                    navigation.pop();
                }}
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
    },
});

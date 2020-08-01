import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { NavigationStackOptions, NavigationStackScreenProps } from 'react-navigation-stack';

// Data
import { MEALS } from '../data/dummyData';

const CategoryMealsScreen = ({ navigation }: NavigationStackScreenProps) => {
    const categoryId: string = navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter(meal => (meal.categoryIds.includes(categoryId)));

    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.title}</Text>
                    </View>
                )}
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

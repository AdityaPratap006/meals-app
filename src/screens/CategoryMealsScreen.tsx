import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { NavigationStackOptions, NavigationStackScreenProps } from 'react-navigation-stack';

// Data
import { MEALS } from '../data/dummyData';

// Components
import MealCard from '../components/MealCard';

const CategoryMealsScreen = ({ navigation }: NavigationStackScreenProps) => {
    const categoryId: string = navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter(meal => (meal.categoryIds.includes(categoryId)));

    return (
        <View style={styles.screen}>
            <FlatList
                style={styles.list}
                data={displayedMeals}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <MealCard
                        title={item.title}
                        imageURL={item.imageUrl}
                        duration={item.duration}
                        affordability={item.affordability}
                        complexity={item.complexity}
                        onSelect={() => { 
                            navigation.navigate({
                                routeName: 'MealDetail',
                                params: {
                                    mealId: item.id,
                                }
                            });
                        }}
                    />
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
    list: {
        width: '100%',
    }
});

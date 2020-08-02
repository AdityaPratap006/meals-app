import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

// Model
import Meal from '../models/meal';

// Components
import MealCard from '../components/MealCard';

interface MealCardListProp {
    mealList: Meal[] | undefined | null;
    navigation: NavigationStackProp;
};

const MealCardList = ({ mealList, navigation }: MealCardListProp) => {
    return (
        <FlatList
            style={styles.list}
            data={mealList}
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
    );
};

export default MealCardList;

const styles = StyleSheet.create({
    list: {
        width: '100%',
    },
});

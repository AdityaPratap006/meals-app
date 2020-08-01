import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';


// Models
import Category from '../models/category';

interface CategoryCardProp {
    item: Category;
    navigation: NavigationStackProp;
};

const CategoryCard = ({ item, navigation }: CategoryCardProp) => {

    const navigateToCategoryMeals = () => {
        navigation.navigate({
            routeName: 'CategoryMeals',
        });
    }

    return (
        <TouchableOpacity
            style={styles.card}
            onPress={navigateToCategoryMeals}
        >
            <View>
                <Text>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default CategoryCard;

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 15,
        height: 150,
    },
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Models
import Category from '../models/category';

interface CategoryCardProp {
    item: Category;
};

const CategoryCard = ({ item }: CategoryCardProp) => {
    return (
        <View style={styles.card}>
            <Text>{item.title}</Text>
        </View>
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

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

// Models
import Category from '../models/category';

interface CategoryCardProp {
    item: Category;
    onSelect: () => void;
};

const CategoryCard = ({ item, onSelect }: CategoryCardProp) => {

    return (
        <TouchableOpacity
            style={styles.card}
            onPress={onSelect}
        >
            <View style={[
                styles.container,
                {
                    backgroundColor: item.color,
                }
            ]}>
                <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
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
        elevation: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems:'flex-end',
        padding: 10,
        paddingBottom: 15,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        textAlign: 'right',
    }
});

import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, Dimensions } from 'react-native';

// Models
import Category from '../models/category';

interface CategoryCardProp {
    item: Category;
    onSelect: () => void;
};

const CategoryCard = ({ item, onSelect }: CategoryCardProp) => {

    return (
        <View style={styles.card}>
            <TouchableNativeFeedback
                style={styles.touchable}
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
            </TouchableNativeFeedback>
        </View>
    );
};

export default CategoryCard;

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 15,
        height: Dimensions.get("window").height * 0.20,
        elevation: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },
    touchable: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 10,
        paddingBottom: 15,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        textAlign: 'right',
    }
});

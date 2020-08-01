import React from 'react';
import { StyleSheet, Text, View, Button, ListRenderItemInfo, } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { FlatList } from 'react-native-gesture-handler';

// Data
import { CATEGORIES } from '../data/dummyData';

// Models 
import Category from '../models/category';
import CategoryCard from '../components/CategoryCard';

// Components

interface CategoriesScreenProp {
    navigation: NavigationStackProp,
};

const CategoriesScreen = ({ navigation }: CategoriesScreenProp) => {

    const renderGridItem = (data: ListRenderItemInfo<Category>) => {
        const { item } = data;
        return (
           <CategoryCard item={item}/>
        );
    }

    return (
        <FlatList
            numColumns={2}
            keyExtractor={(item) => item.id}
            data={CATEGORIES}   
            renderItem={renderGridItem}
        />
    );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

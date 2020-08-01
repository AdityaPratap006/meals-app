import React from 'react';
import { StyleSheet, ListRenderItemInfo } from 'react-native';
import { NavigationStackProp, NavigationStackOptions } from 'react-navigation-stack';
import { FlatList } from 'react-native-gesture-handler';

// Data
import { CATEGORIES } from '../data/dummyData';

// Models 
import Category from '../models/category';
import CategoryCard from '../components/CategoryCard';

// Constants
import { colors } from '../constants';

// Components

interface CategoriesScreenProp {
    navigation: NavigationStackProp,
};

const CategoriesScreen = ({ navigation }: CategoriesScreenProp) => {

    const renderGridItem = (data: ListRenderItemInfo<Category>) => {
        const { item } = data;
        return (
            <CategoryCard item={item} navigation={navigation} />
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

CategoriesScreen.navigationOptions = {
    headerTitle: "Meal Categories",
    headerStyle: {
        backgroundColor: colors.primaryColor,
    },
    headerTintColor: "white",
} as NavigationStackOptions;

export default CategoriesScreen;

const styles = StyleSheet.create({

});

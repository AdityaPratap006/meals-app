import React from 'react';
import { StyleSheet, ListRenderItemInfo, FlatList } from 'react-native';
import { NavigationStackProp, NavigationStackOptions } from 'react-navigation-stack';

// Data
import { CATEGORIES } from '../data/dummyData';

// Models 
import Category from '../models/category';

// Components
import CategoryCard from '../components/CategoryCard';

interface CategoriesScreenProp {
    navigation: NavigationStackProp,
};

const CategoriesScreen = ({ navigation }: CategoriesScreenProp) => {

    const renderGridItem = (data: ListRenderItemInfo<Category>) => {
        const { item } = data;
        return (
            <CategoryCard item={item} onSelect={() => {
                navigation.navigate({
                    routeName: 'CategoryMeals',
                    params: {
                        categoryId: item.id,
                        categoryTitle: item.title,
                    }
                });
            }} />
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
} as NavigationStackOptions;

export default CategoriesScreen;

const styles = StyleSheet.create({

});

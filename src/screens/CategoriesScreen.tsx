import React from 'react';
import { StyleSheet, ListRenderItemInfo, FlatList, View } from 'react-native';
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
        <View style={styles.screen}>
            <FlatList
                style={styles.list}
                numColumns={2}
                keyExtractor={(item) => item.id}
                data={CATEGORIES}
                renderItem={renderGridItem}
            />
        </View>
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: "Meal Categories",
} as NavigationStackOptions;

export default CategoriesScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    list: {
        width: '100%',
    }
});

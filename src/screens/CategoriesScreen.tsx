import React from 'react';
import { StyleSheet, ListRenderItemInfo, FlatList, View } from 'react-native';
import { NavigationStackOptions, NavigationStackScreenProps } from 'react-navigation-stack';
import { NavigationDrawerScreenProps } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationBottomTabOptions } from 'react-navigation-tabs';

// Data
import { CATEGORIES } from '../data/dummyData';

// Models 
import Category from '../models/category';

// Components
import CategoryCard from '../components/CategoryCard';
import CustomHeaderButton from '../components/CustomHeaderButton';

type nestedNavigationScreenProp = NavigationStackScreenProps & NavigationBottomTabOptions & NavigationDrawerScreenProps;

const CategoriesScreen = (props: NavigationStackScreenProps) => {

    const renderGridItem = (data: ListRenderItemInfo<Category>) => {
        const { item } = data;
        return (
            <CategoryCard item={item} onSelect={() => {
                (props as nestedNavigationScreenProp).navigation.navigate({
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

CategoriesScreen.navigationOptions = (navData: NavigationStackScreenProps): NavigationStackOptions => {
    
    return ({
        headerTitle: "Meal Categories",
        headerLeft: (props) => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="Menu"
                    iconName="md-menu"
                    onPress={() => {
                        (navData as nestedNavigationScreenProp).navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        ),
    });
};

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

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { FlatList } from 'react-native-gesture-handler';

// Data
import { CATEGORIES } from '../data/dummyData';

interface CategoriesScreenProp {
    navigation: NavigationStackProp,
};

const CategoriesScreen = ({ navigation }: CategoriesScreenProp) => {
    return (
        <FlatList
            numColumns={2}
            keyExtractor={(item) => item.id}
            data={CATEGORIES}
            renderItem={({ item }) => {
                return (
                    <View>
                        <Text>{item.title}</Text>
                    </View>
                );
            }}
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

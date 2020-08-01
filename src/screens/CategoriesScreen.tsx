import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

interface CategoriesScreenProp {
    navigation: NavigationStackProp,
};

const CategoriesScreen = ({ navigation }: CategoriesScreenProp) => {
    return (
        <View style={styles.screen}>
            <Text>Categories Screen</Text>
            <Button
                title="Go to Meals!"
                onPress={() => {
                    navigation.navigate("CategoryMeals");
                }}
            />
        </View>
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

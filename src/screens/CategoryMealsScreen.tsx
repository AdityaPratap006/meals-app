import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CategoriyMealsScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Categories Screen</Text>
        </View>
    );
};

export default CategoriyMealsScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

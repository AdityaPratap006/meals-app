import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationStackOptions, NavigationStackScreenProps } from 'react-navigation-stack';

// Data
import { MEALS } from '../data/dummyData';

const FavoritesScreen = ({ navigation }: NavigationStackScreenProps) => {
    return (
        <View style={styles.screen}>
            <Text>Favorites Screen</Text>
        </View>
    );
};

export default FavoritesScreen;

const navOptions: NavigationStackOptions = {
    headerTitle: 'Your Favorites',
}

FavoritesScreen.navigationOptions = navOptions;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

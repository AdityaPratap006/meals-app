import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationStackScreenProps, NavigationStackOptions } from 'react-navigation-stack';

const FiltersScreen = ({ navigation }: NavigationStackScreenProps) => {
    return (
        <View style={styles.screen}>
            <Text>Filters Screen</Text>
        </View>
    );
};

export default FiltersScreen;

const navOptions: NavigationStackOptions = {
    headerTitle: 'Filters',
}

FiltersScreen.navigationOptions = navOptions;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

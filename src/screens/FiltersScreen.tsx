import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationStackOptions, NavigationStackScreenProps } from 'react-navigation-stack';
import { NavigationBottomTabOptions } from 'react-navigation-tabs';
import { NavigationDrawerScreenProps } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

// Components
import CustomHeaderButton from '../components/CustomHeaderButton';

type nestedNavigationScreenProp = NavigationStackScreenProps & NavigationBottomTabOptions & NavigationDrawerScreenProps;

const FiltersScreen = (props: NavigationStackScreenProps) => {
    return (
        <View style={styles.screen}>
            <Text>Filters Screen</Text>
        </View>
    );
};

export default FiltersScreen;

const navOptions = (navData: NavigationStackScreenProps): NavigationStackOptions => ({
    headerTitle: 'Filters',
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
})

FiltersScreen.navigationOptions = navOptions;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

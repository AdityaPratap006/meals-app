import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { NavigationStackOptions, NavigationStackScreenProps } from 'react-navigation-stack';
import { NavigationBottomTabOptions } from 'react-navigation-tabs';
import { NavigationDrawerScreenProps } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

// Constants
import { colors } from '../constants';

// Components
import CustomHeaderButton from '../components/CustomHeaderButton';

interface FilrerSwitchProp {
    state: boolean;
    setState: (val: boolean) => void;
    title: string;
};

const FilterSwitch = (props: FilrerSwitchProp) => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.title}</Text>
            <Switch
                trackColor={{
                    true: colors.primaryColor,
                    false: '#ccc',
                }}
                thumbColor={props.state ? colors.primaryColor : '#ccc'}
                value={props.state}
                onValueChange={(newValue) => {
                    props.setState(newValue);
                }}
            />
        </View>
    );
};

type nestedNavigationScreenProp = NavigationStackScreenProps & NavigationBottomTabOptions & NavigationDrawerScreenProps;

const FiltersScreen = (props: NavigationStackScreenProps) => {

    const [isGlutenFree, setIsGlutenFree] = useState<boolean>(false);
    const [isVegetarian, setIsVegetarian] = useState<boolean>(false);
    const [isVegan, setIsVegan] = useState<boolean>(false);
    const [isLactoseFree, setIsLactoseFree] = useState<boolean>(false);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Filters Screen</Text>
            <FilterSwitch
                title='Gluten Free'
                state={isGlutenFree}
                setState={setIsGlutenFree}
            />
            <FilterSwitch
                title='Vegetarian'
                state={isVegetarian}
                setState={setIsVegetarian}
            />
            <FilterSwitch
                title='Vegan'
                state={isVegan}
                setState={setIsVegan}
            />
            <FilterSwitch
                title='Lactose Free'
                state={isLactoseFree}
                setState={setIsLactoseFree}
            />
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
});

FiltersScreen.navigationOptions = navOptions;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center',
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10,
    },

});

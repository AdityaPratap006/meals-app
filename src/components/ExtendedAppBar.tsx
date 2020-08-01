import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackHeaderProps, HeaderBackButton } from 'react-navigation-stack';
import ExpoConstants from 'expo-constants';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

// Constants
import { colors } from '../constants';

// Components
import CustomHeaderButton from '../components/CustomHeaderButton';

interface ExtendedAppBarProp {
    title: string;
    headerProps: StackHeaderProps;
};

const ExtendedAppBar = ({ title, headerProps }: ExtendedAppBarProp) => {
    return (
        <View style={styles.appBar}>
            <View style={styles.buttonRow}>
                <HeaderBackButton
                    tintColor="white"
                    onPress={() => {
                        headerProps.navigation.pop();
                    }}
                />
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title="Favorite" iconName="ios-star" onPress={() => {
                        console.log("Mark as Favorite");
                    }} />
                </HeaderButtons>
            </View>
            <View style={styles.titleRow}>
                <Text style={styles.title} numberOfLines={2}>{title}</Text>
            </View>
        </View>

    );
};

export default ExtendedAppBar;

const styles = StyleSheet.create({
    appBar: {
        paddingTop: ExpoConstants.statusBarHeight,
        height: 120 + ExpoConstants.statusBarHeight,
        backgroundColor: colors.primaryColor,
        paddingBottom: 20,
        elevation: 5,
    },
    buttonRow: {
        height: '50%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleRow: {
        height: '50%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    title: {
        color: "#fff",
        fontSize: 20,
        fontFamily: 'open-sans-bold',
    },
});

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

interface MealDetailScreenProps {
    navigation: NavigationStackProp;
};

const MealDetailScreen = ({ navigation }: MealDetailScreenProps) => {
    return (
        <View style={styles.screen}>
            <Text>Meal Details Screen</Text>
            <Button
                title="Go to Categories"
                onPress={() => {
                    navigation.popToTop();
                }}
            />
        </View>
    );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

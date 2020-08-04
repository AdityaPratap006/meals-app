import React from 'react';
import { StyleSheet, View, ViewStyle, StyleProp } from 'react-native';

interface CardProp {
    style?: StyleProp<ViewStyle>;
    children: React.ReactNode;
};

const Card = (props: CardProp) => {
    return (
        <View style={[styles.card, props.style]}>
            {props.children}
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    card: {
        elevation: 6,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

// Constants
import { colors } from '../constants';

interface MealCardProp {
    title: string;
    imageURL: string;
    duration: number;
    affordability: string;
    complexity: string;
    onSelect: () => void;
};

const MealCard = ({ title, imageURL, duration, affordability, complexity, onSelect }: MealCardProp) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onSelect}>
            <View style={styles.container}>
                <View style={[styles.mealRow, styles.mealHeader]}>
                    <ImageBackground
                        source={{
                            uri: imageURL,
                        }}
                        style={styles.bgImage}
                    >
                        <Text>{title}</Text>
                    </ImageBackground>
                </View>
                <View style={[styles.mealRow, styles.mealDetail]}>
                    <Text style={styles.detailText}>{duration}m</Text>
                    <Text style={styles.detailText}>{affordability}</Text>
                    <Text style={styles.detailText}>{complexity}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default MealCard;

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 15,
        elevation: 10,
        borderRadius: 20,
        overflow: 'hidden',
    },
    container: {
        flex: 1,
        height: 300,
        backgroundColor: 'white',
    },
    mealRow: {
        flexDirection: 'row',
    },
    mealHeader: {
        height: '85%',
        backgroundColor: 'orange'
    },
    bgImage: {
        width: '100%',
        height: '100%',
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
    },
    detailText: {
        fontSize: 14,
        fontFamily: 'open-sans-bold',
        textTransform: 'uppercase',
        color: colors.primaryColor,
    },
});

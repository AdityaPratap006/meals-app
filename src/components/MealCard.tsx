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
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{title}</Text>
                        </View>
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
        backgroundColor: '#f5f5f5',
    },
    mealRow: {
        flexDirection: 'row',
    },
    mealHeader: {
        height: '85%',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontSize: 20,
        fontFamily: 'open-sans',
        color: 'white',
    },
    mealDetail: {
        height: '15%', 
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detailText: {
        fontSize: 14,
        fontFamily: 'open-sans-bold',
        textTransform: 'uppercase',
        color: colors.primaryColor,
    },
});

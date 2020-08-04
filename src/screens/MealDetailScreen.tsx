import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions, FlatList, ListRenderItemInfo } from 'react-native';
import { NavigationStackOptions, NavigationStackScreenProps } from 'react-navigation-stack';

// Data
import { MEALS } from '../data/dummyData';

// Models
import Meal from '../models/meal';

// Constants
import { colors } from '../constants/';

// Components
import ExtendedAppBar from '../components/ExtendedAppBar';
import Card from '../components/Card';


const MealDetailScreen = ({ navigation }: NavigationStackScreenProps) => {
    const mealId = navigation.getParam('mealId') as string;
    const meal = MEALS.find(mealItem => mealItem.id === mealId) as Meal;

    const renderIngredients = ({ item }: ListRenderItemInfo<string>) => {
        return (
            <Card style={styles.ingredientCard}>
                <Text style={styles.ingredientText}>{item}</Text>
            </Card>
        );
    }

    const renderSteps = ({ item, index }: ListRenderItemInfo<string>) => {
        return (
            <Card style={styles.stepCard}>
                <View style={styles.stepCardTitle} >
                    <Text style={styles.stepNumber}>Step {index + 1}</Text>
                </View>
                <View style={styles.stepCardBody} >
                    <Text style={styles.stepText}>{item}</Text>
                </View>
            </Card>
        );
    }

    return (
        <ScrollView style={styles.screen}>
            <Image
                source={{ uri: meal.imageUrl }}
                style={styles.image}
            />
            <View style={[styles.row, styles.mealHighlight]}>
                <Text style={styles.highlightText}>{meal.duration}m</Text>
                <Text style={styles.highlightText}>{meal.affordability}</Text>
                <Text style={styles.highlightText}>{meal.complexity}</Text>
            </View>
            <Text style={styles.sectionTitle}>Ingredients</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={meal.ingredients}
                keyExtractor={item => item}
                renderItem={renderIngredients}
            />
            <Text style={styles.sectionTitle}>Steps</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={meal.steps}
                keyExtractor={item => item}
                renderItem={renderSteps}
            />
        </ScrollView>
    );
};

export default MealDetailScreen;

const navOptions = (navData: NavigationStackScreenProps): NavigationStackOptions => {

    const mealId = navData.navigation.getParam('mealId') as string;
    const meal = MEALS.find(mealItem => mealItem.id === mealId) as Meal;

    return ({
        header: (props) => <ExtendedAppBar title={meal.title} headerProps={props} />,
    });
}

MealDetailScreen.navigationOptions = navOptions;

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'white',
    },
    image: {
        width: Dimensions.get('window').width * 1.00,
        height: Dimensions.get('window').height * 0.40,
    },
    row: {
        flexDirection: 'row',
    },
    mealHighlight: {
        height: 40,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    highlightText: {
        fontSize: 14,
        fontFamily: 'open-sans-bold',
        textTransform: 'uppercase',
        color: colors.primaryColor,
    },
    sectionTitle: {
        marginTop: 30,
        marginBottom: 10,
        marginHorizontal: 20,
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: colors.primaryColor,
    },
    ingredientCard: {
        marginVertical: 20,
        marginHorizontal: 15,
        width: Dimensions.get('window').width * 0.35,
    },
    ingredientText: {
        fontFamily: 'open-sans',
        fontSize: 20,
        color: colors.primaryColor,
        textAlign: 'center',
    },
    stepCard: {
        height: 300,
        marginVertical: 20,
        marginHorizontal: 15,
        width: Dimensions.get('window').width * 0.75,
        alignItems: 'flex-start',
    },
    stepCardTitle: {
        height: '15%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    stepNumber: {
        fontFamily: 'open-sans',
        fontSize: 20,
        color: colors.primaryColor,
    },
    stepCardBody: {
        height: '85%',
        paddingTop: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    stepText: {
        fontFamily: 'open-sans',
        fontSize: 18,
        color: colors.primaryColor,
        textAlign: 'left',
    },
});

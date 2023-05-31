import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LocationListItem = ({containerStyle, location}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <View style={styles.leftView}>
                <Text style={styles.name}>
                    {location.city.name + ', ' + location.city.country}
                </Text>
                <Text>{'Degree: ' + location.city.degree}</Text>
                <Text>{'Humidity: ' + location.city.humidity}</Text>
                <Text>{location.city.description}</Text>
            </View>
        </View>
    );
};

export default LocationListItem;

const styles = StyleSheet.create({
    container: {
        padding: 16,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 5,
        borderRadius: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftView: {},
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});
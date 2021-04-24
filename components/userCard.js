import React, { Component } from "react";
import { Avatar, Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { View, StyleSheet } from "react-native";

/* User Card Compoent */
export const UserCard = ({ user }) => {

    /* Render Compoent */
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Avatar style={styles.avatar} source={{ uri: user.avatar_url }} />
            </View>
            <View style={styles.row}>
                <Text style={styles.name}>{user.name}</Text>
            </View>
            <View style={styles.row}>
                <Text>{user.location}</Text>
            </View>

            <View style={styles.row}>

                <Icon
                    style={styles.icon}
                    fill='#8F9BB3'
                    name='people-outline'
                />
                <Text>{user.followers}</Text>
                <Text>{`  `}</Text>
                <Icon
                    style={styles.icon}
                    fill='#8F9BB3'
                    name='star-outline'
                />
                <Text>{user.following}</Text>

                {/* 9.8k followers · 4 following ·  244 */}
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: "white",
        margin: 15,
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    row: {
        flexDirection: 'row',
        justifyContent: "center",
        width: "100%",
        paddingBottom: 5
    },
    avatar: {
        width: 130,
        height: 130,
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    icon: {
        width: 20,
        height: 20,
    }
});


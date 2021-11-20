import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';

const App = () => {

    const Header = () => {
        return (
            <View style={styles.header}>
                <Text style={styles.text}> HEARING ASSIT </Text>
            </View>
        )
    }

    const Boxes = () => {
        return (
            <View style={styles.boxes}>

                <View style={styles.item}>
                    <View style={styles.inner}>
                        <Text style={styles.text1}> Trợ thính </Text>
                    </View>
                </View>

                <View style={styles.item}>
                    <View style={styles.inner}>
                        <Text style={styles.text1}> Lịch sử </Text>
                    </View>
                </View>

                <View style={styles.item}>
                    <View style={styles.inner}>
                        <Text style={styles.text1}> Hướng dẫn </Text>
                    </View>
                </View>

                <View style={styles.item}>
                    <View style={styles.inner}>
                        <Text style={styles.text1}> Thoát </Text>
                    </View>
                </View>

            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <Boxes/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        backgroundColor: 'antiquewhite',
        width: '100%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxes: {
        backgroundColor: 'antiquewhite',
        width: '100%',
        height: '60%',
        padding: 25,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        width: '50%',
        height: '30%',
        backgroundColor: 'antiquewhite',
        padding: 10
    },
    inner: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    text1: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10
    },
    text: {
        color: 'mediumpurple',
        fontSize: 36,
        fontWeight: 'bold',
    }
});

export default App;

import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Arrow } from '../components/SVG'

export default function CustomDropDown(props) {
    const [show, setShow] = useState(false);
    let rotateText = '180deg';
    if (show) {
        rotateText = '0deg'
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={e => setShow(!show)} activeOpacity={1}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 8, paddingRight: 10 }}>
                    <Text style={styles.text}>{props.title}</Text>
                    <View style={{ transform: [{ rotate: rotateText }] }}>
                        <Arrow />
                    </View>
                </View>
            </TouchableOpacity>
            {show && props.children}

        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        // color: 'rgba(54,58,104,1)',
        fontSize: 16,
        fontWeight: '800',
        color: 'black'
    },
    container: {
        width: '100%',
        marginBottom: 20,
        paddingVertical: 10,
        paddingLeft: 15,
        paddingRight: 10,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        backgroundColor: 'white',
        elevation: 5,
    }
});

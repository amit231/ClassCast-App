import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Svg, { Path, G } from "react-native-svg"
const imageDim = 100;
export default function CustomDropDown(props) {
    let rotateText = '180deg';
    if (props.show) {
        rotateText = '0deg'
    }
    return (
        <TouchableOpacity onPress={props.onClick} activeOpacity={1}>
            <View style={styles.container}>
                <Image source={{ uri: props.image }} style={styles.image} />
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{props.title}</Text>
                    <View style={styles.flexRowStart}>
                        <Svg
                            width={20}
                            height={20}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 122.88 122.88"
                        >
                            <G fillRule="evenodd" clipRule="evenodd">
                                <Path
                                    d="M61.44 0c33.93 0 61.44 27.51 61.44 61.44s-27.51 61.44-61.44 61.44S0 95.37 0 61.44 27.51 0 61.44 0z"
                                    fill="#d5392e"
                                />
                                <Path
                                    d="M84.32 65.41c3.31-2.13 3.3-4.51 0-6.4L50.13 39.36c-2.7-1.69-5.51-.7-5.43 2.82l.11 39.7c.23 3.82 2.41 4.86 5.62 3.1l33.89-19.57z"
                                    fill="#fff"
                                />
                            </G>
                        </Svg>
                        <Text>&nbsp;&nbsp;{props.videoCount}&nbsp;Videos</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    flexRowStart: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        paddingBottom: 15,
        borderBottomColor: '#e5e5e5',


        // padding
    },
    image: {
        width: '40%',

        aspectRatio: 1,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'black'
    },
    infoContainer: {

        width: '55%',
    },
    title: {
        width: '100%',
        fontSize: 21,
        fontWeight: '500',
        marginBottom: 10
        // backgroundColor: 'red'
    }
});

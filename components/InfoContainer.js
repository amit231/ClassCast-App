import React, { useState, useCallback, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function InfoContainer(props) {
    const [showMoreButton, setShowMoreButton] = useState(false);
    const [textShown, setTextShown] = useState(false);
    const [numLines, setNumLines] = useState(undefined);

    const toggleTextShown = () => {
        setTextShown(!textShown);
    };

    useEffect(() => {
        setNumLines(textShown ? undefined : 3);
    }, [textShown]);

    const onTextLayout = useCallback(
        (e) => {
            if (e.nativeEvent.lines.length > 3 && !textShown) {
                console.log(e.nativeEvent.lines.length)
                setShowMoreButton(true);
                setNumLines(3);
            }
        },
        [textShown],
    );
    const { title, description } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style>
                <Text onTextLayout={onTextLayout}
                    numberOfLines={numLines}
                    style={styles.description}
                    ellipsizeMode="tail">{description}</Text>
                {showMoreButton ? (
                    <Text onPress={toggleTextShown} style={styles.readMoreStyle}>
                        {textShown ? 'See More' : 'See Less'}
                    </Text>
                ) : null}
            </View>
        </View>
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
        marginBottom: 23
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginVertical: 8
    },
    description: {
        lineHeight: 20,
        // fontWeight: '100'
        color: 'rgba(41, 41, 55, 0.49)'
    },
    descContainer: {
        position: 'relative'
    },
    readMoreStyle: {
        position: 'absolute',
        color: 'orange',
        backgroundColor: 'white',
        paddingHorizontal: 7,
        paddingRight: 11,
        right: 0,
        bottom: 0
    }

});

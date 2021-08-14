import React, { useState } from "react";
import { View, StyleSheet, Text, useWindowDimensions } from "react-native";

import { Arrow, Locked, Unlocked } from '../components/SVG'
import CustomDropDown from "../components/CustomDropdown";
import CoursePreview from '../components/CoursePreview'
import InfoContainer from '../components/InfoContainer'

const Courses = [
    {
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpUnuB0wKvr2e8ab4ShWKPUpRL6pgA2AIdzQ&usqp=CAU',
        title: 'Here is your first demo course',
        videoCount: 10
    }
]


const Goals = [
    {
        title: 'Prime factorization Exercise',
        desc: '',
        locked: true
    },

    {
        title: 'Fill in the blanks',
        desc: '',
        locked: true
    },
    {
        title: 'Match the following',
        desc: 'starts 14 March',
        locked: false
    },

]

const Tests = [
    { test: '101 Tests' }
]


const Home = () => {
    const dimensions = useWindowDimensions();
    const [showPropertyType, setShowPropertyType] = useState(false)
    return (
        <View
            style={[
                styles.background,
                { width: dimensions.width, height: dimensions.height },
            ]}
        >
            <Arrow style={{ transform: [{ rotate: '270deg' }], marginVertical: 15 }} />
            {Courses.map(course => <CoursePreview
                key={course.uri}
                image={course.uri}
                title={course.title}
                videoCount={course.videoCount}
            />)}
            <InfoContainer
                title={'Intoduction'}
                description='If you Follow these instructions if you need to build native code in your project. For example, if you are integrating React Native into an existing application, or if you "ejected" from Expo, you'
                limit={3}
            />
            {/* <View style={styles.dropDownContainer}> */}
            <CustomDropDown
                title={'Fundamental Theorem of Arithmatic'}
                onClick={e => setShowPropertyType(!showPropertyType)}
                show={showPropertyType}>
                {Goals.map(single => <View key={single.title} style={styles.singleGoal}>
                    <View style={styles.lock}>
                        {single.locked ? <Locked /> : <Unlocked />}
                    </View>
                    <View>
                        <Text style={styles.title} >{single.title}</Text>
                        {!single.locked && <Text style={styles.desc}>{single.desc}</Text>}
                    </View>
                </View>
                )}
            </CustomDropDown>
            <CustomDropDown
                title={'HCF and LCM'}
                onClick={e => setShowPropertyType(!showPropertyType)}
                show={showPropertyType}>
                {Tests.map(single => <Text key={single.title} style={styles.tests}>
                    {single.test}
                </Text>
                )}
            </CustomDropDown>

        </View>

        // </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: "white",
        paddingHorizontal: '5%',
        paddingVertical: 10
    },
    dropDownContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    singleGoal: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 9,
        paddingLeft: '6%'
    },
    lock: {
        marginRight: 10,

    },
    title: {
        // fontWeight: '400',
    },
    desc: {
        color: 'rgba(41, 41, 55, 0.49)'

    }, tests: {
        color: 'rgba(41, 41, 55, 0.69)'

    }
});
export default Home

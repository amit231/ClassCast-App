import React from 'react'
import Svg, { Path } from "react-native-svg"


export function Arrow(props) {
    return <Svg
        width={16}
        height={9}
        viewBox="0 0 16 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={props.style ? props.style : {}}
    >
        <Path
            d="M1.598 8l6.5-7 6.5 7"
            stroke="#363A68"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
}


export function Locked() {
    return <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 24 24"

    >
        <Path d="M12 10V6A6 6 0 000 6v3h2V6c0-2.206 1.794-4 4-4s4 1.794 4 4v4H6v14h18V10H12zm10 12H8V12h14v10z" fill='black' />
    </Svg>
}
export function Unlocked() {
    return <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 24 24"
    >
        <Path d="M6 8V6a6 6 0 0112 0v2h-2V6c0-2.206-1.795-4-4-4S8 3.794 8 6v2H6zm-3 2v14h18V10H3z" fill='black' />
    </Svg>
}
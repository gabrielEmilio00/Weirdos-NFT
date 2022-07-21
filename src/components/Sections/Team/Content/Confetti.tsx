import React from "react";
import { useWindowSize } from "react-use";
import ReactConfetti from "react-confetti";


export default function Confetti() {
    const {width, height} = useWindowSize();
    return (
        <ReactConfetti
        width={width}
        height={height+280}
        numberOfPieces={150}
        gravity={0.01}
        />
    )
}
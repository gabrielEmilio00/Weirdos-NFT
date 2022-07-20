import React, { useLayoutEffect, useRef } from "react";
import gsap  from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled, { keyframes } from "styled-components";
import Vector from "../../../../assets/icons/Vector";

const VectorContainer = styled.div`
    position: absolute;
    top: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    overflow: hidden;

svg {
    width: 100%;
    height: 100%;
}
`
const Bounce = keyframes`
    from { transform: translateX(-50%) scale(0.5); }
    to { transform: translateX(-50%) scale(1); }
`
const Ball = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: ${props => props.theme.text};
    animation: ${Bounce} 0.5s linear infinite alternate;
`

export default function DrawSvg() {
const ref = useRef(null);
const ballRef = useRef<any>(null);

gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {
    let element = ref.current; 

    let svg: any = document.getElementsByClassName('svg-path')[0];

    const length = svg.getTotalLength();    
    
    svg.style.strokeDasharray = length;
    // svg.setAttribute("style", `strokeDasharray: ${length}`)

    svg.style.strokeDashoffset = length;
    // svg.setAttribute("style", `strokeDashoffset: ${length}`)
    
    let t1 = gsap.timeline({
        scrollTrigger: {
            trigger: element,
            start: "top center",
            end: "bottom bottom",
            onUpdate: (self) => {               
                const draw = length * self.progress;
                
                // svg.setAttribute("style", `strokeDashoffset: ${length - draw}`);
                svg.style.strokeDashoffset = length - draw;
                
            },
            onToggle: self => {
                if(self.isActive) {
                    ballRef.current!.style.display = 'none';
                } else {
                    ballRef.current!.style.display = 'inline-block';
                }
            }
        }
    })

    return(() => {
        if(t1) t1.kill();
    });
}, []   )

    return(
        <> 
        <Ball ref={ballRef}/>
        <VectorContainer ref={ref}>
            <Vector />
        </VectorContainer>
        </>
    )
}
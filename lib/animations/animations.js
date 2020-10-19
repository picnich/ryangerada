import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Gsap Animations 
export const homeTextIntro = (el1, el2, el3) => {
    const splitText = new SplitText([el1, el2, el3], { type: "words"})
    gsap.from(splitText.words, {
        opacity: 0,
        y: 100,
        stagger: 0.01
    })
}

export const scrollerTextAnim = (el) => {
    const splitText = new SplitText(el, {type: "words"})
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: el,
            start: "40% 70%",
            // markers: true
        }
    })
    tl.from(splitText.words, {
        opacity: 0,
        y: 100,
        stagger: 0.005
    })
}

// Framer Motion Animations
export const stagger = {
    animate: { 
        transition: { 
            staggerChildren: 0.1, 
            delayChildren: 0.5,
        } 
    },
}

export const transition = { 
    duration: 0.8, 
    ease: [0.6, -0.05, 0.01, 0.9] 
}


export const coverGrow = {
    initial: { width: "100%" },
    animate: { width: 0 },
} 

export const slideUp = {
    initial: {
        opacity: 0,
        y: '60px'
    },
    animate: {
        opacity: 1,
        y: 0
    }
}

export const slideleft = {
    initial: {
        width: '100%'
    },
    animate: {
        width: 0
    }
}
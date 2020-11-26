import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";
import { split } from "lodash";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Gsap Animations 
export const homeTextIntro = (el) => {
    const splitText = new SplitText(el, { type: "words"})
    gsap.from(el, {
        opacity: 0,
        yPercent: 20,
        // stagger: 0.01,
        ease: 'Power1.easeOut',
        duration: 0.5
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
    tl.from(el, {
        opacity: 0,
        duration: 1,
        y: 100,
        stagger: 0.005,
        ease: 'Power1.easeOut'
    })
}

export const workProjectFirstAnim = (el1, el2) => {
    if (el1.current !== null) {
        const splitText = new SplitText([el1, el2], {type: 'words'});
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el1,
                start: "50% 85%"
            }
        })
        tl.from(splitText.words, {
            yPercent: 150,
            duration: 1,
            // stagger: 0.02,
            ease: 'Power1.easeOut'
        })
    }
}

export const workProjectLastAnim = (el1, el2, el3) => {
    if (el1.current !== null) {
        const splitText = new SplitText([el1, el2, el3], {type: 'words'});
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el1,
                start: "50% 85%"
            }
        })
        tl.from(splitText.words, {
            delay: 1,
            duration: 1,
            // yPercent: 150,
            opacity: 0,
            // stagger: 0.01,
            ease: 'Power1.easeOut'
        })
    }
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
    ease: [0.6, -0.05, 0.01, 0.9],
    delay: 1
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
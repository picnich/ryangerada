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
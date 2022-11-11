import { useEffect, useState } from 'react'

function useScroll(frecuency: number = 100): [number, boolean] {
    // Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) < 1
    const [lastScroll, setLastScroll] = useState<number | undefined>(undefined)
    const [scrollY, setScrollY] = useState<number>(0)
    const [isScrolling, setIsScrolling] = useState(false)
    const [tick, setTick] = useState(true)
    useEffect(() => {
        const html = document.body.parentElement
        const viewportHeight = window.innerHeight
        setScrollY(
            ((6 / 5) * viewportHeight * html?.scrollTop!) / html?.scrollHeight!
        )
        setTimeout(() => {
            if (lastScroll == html!.scrollTop) {
                setIsScrolling(false)
            } else {
                setLastScroll(html!.scrollTop)
                setIsScrolling(true)
            }
            setTick(!tick)
        }, frecuency)
    }, [lastScroll, tick, isScrolling, frecuency])

    return [scrollY, isScrolling]
}

export default useScroll

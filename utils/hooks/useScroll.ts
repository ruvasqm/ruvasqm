import { useEffect, useState } from 'react'

function useScroll(frecuency: number = 100) {
    // Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) < 1
    const [lastScroll, setLastScroll] = useState<number | undefined>(undefined)
    const [scrollY, setScrollY] = useState<number>(0)
    const [isScrolling, setIsScrolling] = useState(false)
    const [tick, setTick] = useState(true)

    useEffect(() => {
        const html = document.body.parentElement
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

    const scrollTo = (id: string) => {
        const el = document.getElementById(id)!
        el.scrollIntoView({ behavior: 'smooth' })
    }

    const scrolledPercent = (id: string) => {
        const el = document.getElementById(id)!
        const html = document.body.parentElement!
        return html.scrollTop / el.clientHeight
    }
    return { scrollY, scrollTo, scrolledPercent, isScrolling }
}

export default useScroll

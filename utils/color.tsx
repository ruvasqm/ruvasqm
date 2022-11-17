// from https://stackoverflow.com/questions/46432335/hex-to-hsl-convert-javascript
const hexToHSL = (hex: string) => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)!

    let r = parseInt(result[1], 16) / 255
    let g = parseInt(result[2], 16) / 255
    let b = parseInt(result[3], 16) / 255

    let max = Math.max(r, g, b)
    let min = Math.min(r, g, b)
    let h, s
    let l = (max + min) / 2

    if (max == min) {
        h = s = 0 // achromatic
    } else {
        let d = max - min
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0)
                break
            case g:
                h = (b - r) / d + 2
                break
            default:
                h = (r - g) / d + 4
                break // it has to be b
        }
        h /= 6
    }

    s = s * 100
    s = Math.round(s)
    l = l * 100
    l = Math.round(l)
    h = Math.round(360 * h)
    return { h: h, s: s, l: l }
}

const adjustContrast = (fgHex: string, bgHex: string, factor: number) => {
    let fgHSL = hexToHSL(fgHex)
    const bgHSL = hexToHSL(bgHex)
    while (fgHSL.l / bgHSL.l < factor) {
        fgHSL.l *= 1.1
    }
    return `hsl(${fgHSL.h}, ${100}%, ${fgHSL.l}%)`
}

export const generateRandomColor = () => {
    const hue = Math.floor(Math.random() * 360)
    const saturation = '100%'
    const lightness = '68%' //TODO: make this into a theme dependent value
    return `hsl(${hue}, ${saturation}, ${lightness})`
}
export default adjustContrast

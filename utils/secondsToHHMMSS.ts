const secondsToHms = (d: number) => {
    const h = Math.floor(d / 3600)
    const m = Math.floor((d % 3600) / 60)
    const s = Math.floor((d % 3600) % 60)

    const hDisplay = h > 0 ? h + 'H : ' : ''
    const mDisplay = m > 0 ? m + 'm : ' : ''
    const sDisplay = s > 0 ? s + 's' : ''
    return hDisplay + mDisplay + sDisplay
}

export default secondsToHms

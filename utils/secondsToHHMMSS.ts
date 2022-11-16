const secondsToHms = (d: number) => {
    const h = Math.floor(d / 3600)
    const m = Math.floor((d % 3600) / 60)
    const s = Math.floor((d % 3600) % 60)

    const hDisplay = h + 'H : '
    const mDisplay = m + 'm : '
    const sDisplay = s + 's'
    return (
        hDisplay.padStart(6, '0') +
        mDisplay.padStart(6, '0') +
        sDisplay.padStart(3, '0')
    )
}

export default secondsToHms

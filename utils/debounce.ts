const debounce = (func: Function, wait = 200, immediate = true) => {
    let timeout: ReturnType<typeof setTimeout> | null
    return function () {
        const context = debounce,
            args = arguments
        const later = function () {
            timeout = null
            if (!immediate) func.apply(context, args)
        }
        const callNow = immediate && !timeout
        clearTimeout(timeout!)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
}

export default debounce

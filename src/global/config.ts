export const originPath = () => {
    if (process.env.STAGE_ENV !== "PROD") {
        return window.location.origin
    } else {
       return window.location.href
    }
}
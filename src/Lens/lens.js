export function lens(path) {
    const keys = path.split('.');
    return {
        path : keys
    }
}
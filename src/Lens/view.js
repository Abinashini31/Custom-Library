export function view(lens, obj) {
    return lens.path.reduce((acc, key) => acc?.[key], obj);
}
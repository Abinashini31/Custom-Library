export function set(lens, value, obj) {
    const keys = lens.path;
    const set = (o, index) => {
        const key = keys[index];
        if(index === keys.length-1) {
            return{ ...o, [key]: value};
        }
        return {
            ...o,
            [key]: set(o?.[key] ?? {}, index + 1)
        };
    };
    return set(obj, 0);
}
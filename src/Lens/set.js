export function set(lens, value, obj) {
    const keys = lens.path;
    const set = (o, index) => {
        const key = keys[index];
        if(index === keys.length-1) {
            return{ ...o, [key]: value};
        }
        return {
            ...o,
            [key]: setIn(o?.[key] ?? {}, index + 1)
        };
    };
    return setIn(obj, 0);
}
export function pluck(keys, data) {
    const val = (obj, path) => {
        return path.split('.').reduce((acc, key) => acc?.[key], obj);
    };

    if(typeof keys === 'string') {
        return data.map(item => val(item, keys));
    }

    if(Array.isArray(keys)) {
        return data.map(item => {
            const result = {};

            keys.forEach(key => {
                result[key] = val(item,key);
            });
            return result;
        });
    }
    return [];
}
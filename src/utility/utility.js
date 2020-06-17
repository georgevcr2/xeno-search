export const updateObject = (prevState, updateProps) => {
    return {
        ...prevState,
        ...updateProps
    };
}

export const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { 
        return images[item.replace('./', '')] = r(item); 
    });
    return images;
}
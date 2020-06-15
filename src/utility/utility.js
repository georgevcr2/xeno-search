export const updateObject = (prevState, updateProps) => {
    return {
        ...prevState,
        ...updateProps
    };
}
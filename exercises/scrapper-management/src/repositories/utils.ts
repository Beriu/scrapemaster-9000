export const fakeId = () => Math.random().toString();

export const fakeCall = <T>(payload: T): Promise<T> => {
    const dereference = JSON.parse(JSON.stringify(payload));
    return new Promise(resolve => setTimeout(() => resolve(dereference), 1000));
};
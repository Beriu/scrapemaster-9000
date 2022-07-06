import { faker } from '@faker-js/faker';

export const fakeId = () => faker.datatype.uuid();

export const fakeDate = () => faker.date.past();

export const fakeTime = () =>
    faker.datatype.datetime({ min: 1, max: 30 }).getSeconds();

export const fakeName = () =>
    `${faker.internet.userName()}_${faker.word.adjective()}_${faker.datatype.number()}`;

export const fakeResult = () => faker.lorem.sentence();

export const fakeSelector = () => faker.word.noun();

export const randomize = <T>(v: T[]): T => faker.helpers.arrayElement(v);

export const fakeLorem = () => faker.lorem.words();

export const fakeUrl = () => faker.internet.url();

export const fakeCall = <T>(payload: T): Promise<T> => {
    const dereference = JSON.parse(JSON.stringify(payload));
    return new Promise((resolve) =>
        setTimeout(() => resolve(dereference), 1000)
    );
};

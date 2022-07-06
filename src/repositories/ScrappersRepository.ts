import { Scrapper, ScrapperStatus } from '../types';
import { fakeId, fakeCall, fakeDate, fakeName, randomize } from './utils';

const generate = () => ({
    id: fakeId(),
    name: fakeName(),
    status: randomize(Object.values(ScrapperStatus)),
    createdAt: fakeDate(),
});

const dummyScrappers: Scrapper[] = Array(5)
    .fill(null)
    .map(() => generate());

export const getScrappers = (): Promise<Scrapper[]> => {
    return fakeCall(dummyScrappers);
};

export const findScrapper = (id: string): Promise<Scrapper | undefined> => {
    const found = dummyScrappers.find((scrp) => scrp.id === id);
    return fakeCall(found);
};

export const createScrapper = (name?: string): Promise<Scrapper> => {
    const scrapper: Scrapper = {
        id: fakeId(),
        name: fakeName(),
        status: ScrapperStatus.NEW,
        createdAt: fakeDate(),
    };
    dummyScrappers.push(scrapper);
    return fakeCall(scrapper);
};

export const deleteScrapper = (id: string): Promise<Scrapper | undefined> => {
    const found = dummyScrappers.find((scrp) => scrp.id === id);
    if (!found) return fakeCall(undefined);
    dummyScrappers.splice(dummyScrappers.indexOf(found), 1);
    return fakeCall(found);
};

export const updateScrapperStatus = (
    id: string,
    status: ScrapperStatus
): Promise<Scrapper | undefined> => {
    const found = dummyScrappers.find((scrp) => scrp.id === id);
    if (!found) return fakeCall(undefined);
    found.status = status;
    return fakeCall(found);
};

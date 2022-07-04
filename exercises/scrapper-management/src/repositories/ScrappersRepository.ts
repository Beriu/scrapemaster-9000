import { Scrapper, ScrapperStatus } from "../types";

const fakeId = () => Math.random().toString();

const dummyScrappers: Scrapper[] = [
    {
        id: fakeId(),
        name: "SomeCoolScrapper3000",
        status: ScrapperStatus.NEW,
        createdAt: new Date()
    },
    {
        id: fakeId(),
        name: "RamajanScrapperooni",
        status: ScrapperStatus.OFFLINE,
        createdAt: new Date()
    },
    {
        id: fakeId(),
        name: "MaxScrappings29",
        status: ScrapperStatus.IDDLE,
        createdAt: new Date()
    },
    {
        id: fakeId(),
        name: "YaBoyScrappy",
        status: ScrapperStatus.RUNNING,
        createdAt: new Date()
    }
];

const fakeCall = <T>(payload: T): Promise<T> => {
    return new Promise(resolve => setTimeout(() => resolve(payload), 2000));
};


export const getScrappers = (): Promise<Scrapper[]> => {
    return fakeCall(dummyScrappers);
};

export const findScrapper = (id: string): Promise<Scrapper | undefined> => {
    const found = dummyScrappers.find(scrp => scrp.id === id);
    return fakeCall(found);
};

export const deleteScrapper = (id: string): Promise<Scrapper | undefined> => {
    const found = dummyScrappers.find(scrp => scrp.id === id);
    if(!found) return fakeCall(undefined);
    dummyScrappers.splice(dummyScrappers.indexOf(found),1);
    return fakeCall(found);
};

export const updateScrapperStatus = (id: string, status: ScrapperStatus): Promise<Scrapper | undefined> => {
    const found = dummyScrappers.find(scrp => scrp.id === id);
    if(!found) return fakeCall(undefined);
    found.status = status;
    return fakeCall(found);
};
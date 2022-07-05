import { Scrapper, ScrapperStatus } from "../types";
import { fakeId, fakeCall } from "./utils";


const dummyScrappers: Scrapper[] = [
    {
        id: fakeId(),
        name: "SomeCoolScrapper3000",
        status: ScrapperStatus.NEW,
        createdAt: new Date()
    },
    {
        id: fakeId(),
        name: "WakeAndScrape",
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


export const getScrappers = (): Promise<Scrapper[]> => {
    return fakeCall(dummyScrappers);
};

export const findScrapper = (id: string): Promise<Scrapper | undefined> => {
    const found = dummyScrappers.find(scrp => scrp.id === id);
    return fakeCall(found);
};

export const createScrapper = (name?: string): Promise<Scrapper> => {
    const scrapper: Scrapper = {
        id: fakeId(),
        name: "FreshNewWhip",
        status: ScrapperStatus.NEW,
        createdAt: new Date(),
    };
    dummyScrappers.push(scrapper);
    return fakeCall(scrapper);
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
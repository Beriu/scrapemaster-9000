import { ScrapperTarget } from "../types";
import { fakeId, fakeCall } from "./utils";


const dummyTargets: ScrapperTarget[] = [
    {
        id: fakeId(),
        name: "Title on Example",
        url: "example.com",
        options: {
            allTargetsRequired: false,
            multipleValues: false,
        },
        targets: [
            {
                id: fakeId(),
                label: "title",
                selector: "p>h4.title"
            }
        ]
    }
];

export const getScrapperTargets = (): Promise<ScrapperTarget[]> => fakeCall(dummyTargets);

export const createScrapperTarget = (st: ScrapperTarget): Promise<ScrapperTarget> => {
    dummyTargets.push(st);
    return fakeCall(st);
}; 
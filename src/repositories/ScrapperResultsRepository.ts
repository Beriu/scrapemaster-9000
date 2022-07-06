import {
    Scrapper,
    ScrapperTarget,
    ScrappingResult,
    ScrappingResultType,
} from '../types';
import {
    fakeId,
    fakeCall,
    fakeTime,
    fakeDate,
    fakeResult,
    fakeLabel,
    randomize,
} from './utils';

const generate = () => ({
    scrapperId: fakeId(),
    scrapperTargetId: fakeId(),

    ranAt: fakeDate(),
    time: fakeTime(),
    type: randomize(Object.values(ScrappingResultType)),

    values: [
        {
            id: fakeId(),
            label: fakeLabel(),
            selector: fakeResult(),
        },
        {
            id: fakeId(),
            label: fakeLabel(),
            selector: fakeResult(),
        },
    ],
});

const dummyResults: ScrappingResult[] = Array(5)
    .fill(null)
    .map(() => generate());

export const run = (
    s: Scrapper,
    t: ScrapperTarget
): Promise<ScrappingResult> => {
    const values = t.targets.map((t) => ({
        id: t.id,
        label: t.label,
        selector: fakeResult(),
    }));

    const newResult: ScrappingResult = {
        scrapperId: s.id,
        scrapperTargetId: t.id,
        ranAt: fakeDate(),
        time: fakeTime(),
        type: ScrappingResultType.SUCCESS,
        values,
    };

    dummyResults.push(newResult);
    return fakeCall(newResult);
};

export const getAllResults = (): Promise<ScrappingResult[]> => {
    return fakeCall(dummyResults);
};

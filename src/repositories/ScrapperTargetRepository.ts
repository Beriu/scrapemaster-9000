import { ScrapperTarget } from '../types';
import {
    fakeId,
    fakeCall,
    fakeLorem,
    fakeUrl,
    randomize,
    fakeLabel,
    fakeCssSelector,
} from './utils';

const generate = () => ({
    id: fakeId(),
    name: fakeLorem(),
    url: fakeUrl(),
    options: {
        allTargetsRequired: randomize([true, false]),
        multipleValues: randomize([true, false]),
    },
    targets: [
        {
            id: fakeId(),
            label: fakeLabel(),
            selector: fakeCssSelector(),
        },
        {
            id: fakeId(),
            label: fakeLabel(),
            selector: fakeCssSelector(),
        },
    ],
});

const dummyTargets: ScrapperTarget[] = Array(5)
    .fill(null)
    .map(() => generate());

export const getScrapperTargets = (): Promise<ScrapperTarget[]> =>
    fakeCall(dummyTargets);

export const createScrapperTarget = (
    st: ScrapperTarget
): Promise<ScrapperTarget> => {
    dummyTargets.push(st);
    return fakeCall(st);
};

export enum ScrapperStatus {
    NEW = 'new',
    OFFLINE = 'offline',
    IDDLE = 'iddle',
    RUNNING = 'running'
}

export interface ScrapperOptions {
    allTargetsRequired: boolean;
    multipleValues: boolean;
}

export interface Scrapper {
    id: string;
    name: string;
    status: ScrapperStatus;
    createdAt: Date;
}

export interface ScrapperTarget {
    id: string;
    name: string;
    url: string;
    targets: Map<string, string>;
    options: ScrapperOptions;
}

export enum ScrappingResultType {
    SUCCESS = 'success',
    FAILURE = 'failure',
}

export interface ScrappingResult {
    scrapperId: string;
    scrapperTargetId: string;
    time: number;
    ranAt: Date;
    type: ScrappingResultType;
    values: Map<string, string | string[]>
}


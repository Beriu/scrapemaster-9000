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

export interface PropertyTarget {
    id: string;
    label: string;
    selector: string;
}

export interface ScrapperTarget {
    id: string;
    name: string;
    url: string;
    targets: PropertyTarget[];
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

export interface OutletContext {
    isLoading: boolean; 
    setLoading: (v: boolean) => void
}


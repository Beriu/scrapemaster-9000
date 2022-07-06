import { FunctionComponent } from 'react';
import { Scrapper, ScrapperStatus } from '../types';
import OptionsMenu, { OptionsMenuItem } from './OptionsMenu';

export interface ScrapperComponentProps {
    scrapper: Scrapper;
    retireHandler: () => void;
    stopHandler: () => void;
    startHandler: () => void;
}

const ScrapperComponent: FunctionComponent<ScrapperComponentProps> = function ({
    scrapper,
    retireHandler,
    startHandler,
    stopHandler,
}) {
    const StatusColorMap: Record<ScrapperStatus, string> = {
        [ScrapperStatus.NEW]: 'bg-blue-500',
        [ScrapperStatus.OFFLINE]: 'bg-red-500',
        [ScrapperStatus.IDDLE]: 'bg-yellow-500',
        [ScrapperStatus.RUNNING]: 'bg-green-500',
    };

    const statusColor = (status: ScrapperStatus) => StatusColorMap[status];

    const generateOptions = (p: any): OptionsMenuItem[] => {
        return [
            {
                label: 'Start',
                clickHandler: startHandler,
            },
            {
                label: 'Stop',
                clickHandler: stopHandler,
            },
            {
                label: 'Delete',
                clickHandler: retireHandler,
            },
        ];
    };

    return (
        <div className="flex items-center justify-between bg-white px-6 py-2 mb-2 rounded-lg border border-gray-200 w-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 transition duration-500 cursor-pointer">
            <span className="flex items-center">
                <span
                    className={`${statusColor(
                        scrapper.status
                    )} h-4 w-4 rounded-full inline-block`}
                ></span>
                <span className="grow-0 px-4 w-8 text-xs text-slate-500">
                    {scrapper.status}
                </span>
            </span>
            <span>{scrapper.name}</span>
            <OptionsMenu items={generateOptions(scrapper)} />
        </div>
    );
};

export default ScrapperComponent;

import { FunctionComponent } from 'react';
import {
    OutletContext,
    Scrapper,
    ScrapperStatus,
    ScrapperTarget as ScrapperTargetType,
} from '../types';
import { CheckCircleIcon, XCircleIcon, PlayIcon } from '@heroicons/react/solid';
import OptionsMenu, { OptionsMenuItem } from './OptionsMenu';
import { Menu } from '@headlessui/react';
import { useOutletContext } from 'react-router-dom';

interface Props {
    target: ScrapperTargetType;
    onRun: (s: Scrapper, t: ScrapperTargetType) => void;
}

const Tag = (props: any) => (
    <span
        className={`${props.className} inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
    >
        {props.children}
    </span>
);

const ScrapperTarget: FunctionComponent<Props> = function ({ target, onRun }) {
    const iconClass = 'h-5 w-5 inline-block';

    const { scrappers } = useOutletContext<OutletContext>();

    const scrapperOptions: OptionsMenuItem[] = scrappers
        .filter((s) =>
            [ScrapperStatus.NEW, ScrapperStatus.IDDLE].includes(s.status)
        )
        .map((s) => ({
            label: s.name,
            clickHandler: () => onRun(s, target),
        }));

    return (
        <div className="rounded overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4">
                <div className="text-xl mb-2 flex justify-between">
                    <span className="text-ellipsis font-bold">
                        {target.name}
                    </span>
                    <OptionsMenu items={scrapperOptions}>
                        <Menu.Button className="inline-flex w-full justify-center px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none">
                            <PlayIcon
                                className="h-8 w-8 text-green-600 hover:text-green-700"
                                aria-hidden="true"
                            />
                        </Menu.Button>
                    </OptionsMenu>
                </div>
                <p className="text-gray-700 text-base flex flex-col items-start">
                    <Tag>URL: {target.url}</Tag>

                    <Tag className="text-center">
                        All Values Required:{' '}
                        {target.options.allTargetsRequired ? (
                            <CheckCircleIcon className={iconClass} />
                        ) : (
                            <XCircleIcon className={iconClass} />
                        )}
                    </Tag>

                    <Tag className="text-center">
                        Multiple Values:{' '}
                        {target.options.multipleValues ? (
                            <CheckCircleIcon className={iconClass} />
                        ) : (
                            <XCircleIcon className={iconClass} />
                        )}
                    </Tag>
                </p>
            </div>
            <div className="px-6 border-t border-t-slate-300 pt-2 pb-2">
                {target.targets.map((t) => (
                    <Tag key={t.id}>
                        {t.label} : {t.selector}
                    </Tag>
                ))}
            </div>
        </div>
    );
};

export default ScrapperTarget;

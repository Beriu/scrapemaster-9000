import { FunctionComponent } from 'react';
import { ScrappingResult as ScrappingResultType } from '../types';

interface Props {
    result: ScrappingResultType;
}

const Tag = (props: any) => (
    <span
        className={`${props.className} inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
    >
        {props.children}
    </span>
);

const ScrappingResult: FunctionComponent<Props> = function ({ result }) {
    return (
        <div className="rounded overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4">
                <div className="text-xl mb-2 flex flex-col">
                    <span className="text-ellipsis font-bold">
                        {result.scrapperId}
                    </span>
                    <span className="text-ellipsis font-bold">
                        {result.scrapperTargetId}
                    </span>
                </div>
            </div>
            <div className="px-6 border-t border-t-slate-300 pt-2 pb-2">
                {result.values.map((r) => (
                    <Tag key={r.id}>
                        {r.label} : {r.selector}
                    </Tag>
                ))}
            </div>
        </div>
    );
};

export default ScrappingResult;

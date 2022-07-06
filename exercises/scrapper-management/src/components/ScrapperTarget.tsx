import { FunctionComponent } from 'react';
import { ScrapperTarget as ScrapperTargetType } from '../types';
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid";

interface Props {
    target: ScrapperTargetType;
}

const Tag = (props: any) => (
    <span className={`${props.className} inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>
        { props.children }
    </span>
);

const ScrapperTarget: FunctionComponent<Props> = function ({ target }) {

    const iconClass = "h-5 w-5 inline-block";

    return (
        <div className="rounded overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
                { target.name }
            </div>
            <p className="text-gray-700 text-base flex flex-col items-start">
                <Tag>URL: { target.url }</Tag>

                <Tag className="text-center">
                    All Values Required: { 
                    target.options.allTargetsRequired 
                        ? <CheckCircleIcon className={iconClass} /> 
                        : <XCircleIcon className={iconClass} /> 
                    }
                </Tag>

                <Tag className="text-center">
                    Multiple Values: { 
                    target.options.multipleValues 
                        ? <CheckCircleIcon className={iconClass} /> 
                        : <XCircleIcon className={iconClass} /> 
                    }
                </Tag>
            </p>
            </div>
            <div className="px-6 border-t border-t-slate-300 pt-2 pb-2">
            {
                target.targets.map(t => <Tag key={t.id}>{ t.label } : { t.selector }</Tag>)
            }
            </div>
        </div>
    );
};

export default ScrapperTarget;
import { FunctionComponent } from 'react';
import { ScrapperTarget as ScrapperTargetType } from '../types';

interface Props {
    target: ScrapperTargetType;
}

const ScrapperTarget: FunctionComponent<Props> = function ({ target }) {
    return (
        <div className='flex flex-col'>
            <span>{ target.name }</span>
            <span>{ target.url }</span>
            <span>{ target.options.allTargetsRequired }</span>
            <span>{ target.options.multipleValues }</span>
            {
                target.targets.map(t => <span>{ t.label } : { t.selector }</span>)
            }
        </div>
    );
};

export default ScrapperTarget;
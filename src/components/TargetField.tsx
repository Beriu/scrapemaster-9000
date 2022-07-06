import { FunctionComponent } from 'react';
import { PropertyTarget } from '../types';

interface FieldProps {
    target: PropertyTarget;
    setter: (t: PropertyTarget) => void;
}

const TargetField: FunctionComponent<FieldProps> = function ({
    target,
    setter,
}) {
    const onEditTarget = (t: PropertyTarget) => setter(t);

    return (
        <fieldset className="flex flex-ro">
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={target.label}
                onChange={(e) =>
                    onEditTarget({
                        id: target.id,
                        label: e.target.value,
                        selector: target.selector,
                    })
                }
                placeholder="target"
            />
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={target.selector}
                onChange={(e) =>
                    onEditTarget({
                        id: target.id,
                        label: target.label,
                        selector: e.target.value,
                    })
                }
                placeholder="selector"
            />
        </fieldset>
    );
};

export default TargetField;

import { FunctionComponent } from 'react';

interface FieldProps {
    id: string;
    label: string;
    value: any;
    onChange: (v: any) => void;
}

const CheckboxField: FunctionComponent<FieldProps> = function ({
    label,
    value,
    onChange,
    id,
}) {
    return (
        <fieldset>
            <label htmlFor={id} className="text-gray-500 font-bold">
                <input
                    id={id}
                    value={value}
                    onChange={onChange}
                    className="mr-2 leading-tight"
                    type="checkbox"
                />
                <span className="text-md">{label}</span>
            </label>
        </fieldset>
    );
};

export default CheckboxField;

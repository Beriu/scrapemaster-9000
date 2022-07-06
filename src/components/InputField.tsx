import { FunctionComponent } from 'react';

interface FieldProps {
    id: string;
    type: string;
    label: string;
    value: any;
    onChange: (v: any) => void;
}

const InputField: FunctionComponent<FieldProps> = function ({
    label,
    value,
    onChange,
    id,
    type,
}) {
    return (
        <fieldset>
            <label
                htmlFor={id}
                className="block text-gray-700 text-sm font-bold mb-2"
            >
                {label}
            </label>
            <input
                id={id}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type={type}
                value={value}
                onChange={onChange}
                placeholder={label}
            />
        </fieldset>
    );
};

export default InputField;

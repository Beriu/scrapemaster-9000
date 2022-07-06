/** As in custom button c-button */
import { PlusIcon } from '@heroicons/react/outline';
import { FunctionComponent } from 'react';

interface Props {
    isDisabled: boolean;
    text: string;
    onClick: () => void;
}

const AddButton: FunctionComponent<Props> = function ({
    isDisabled,
    onClick,
    text,
}) {
    return (
        <button
            disabled={isDisabled}
            className="bg-white hover:bg-opacity-70 mb-2 text-black py-2 px-4 rounded text-center"
            onClick={onClick}
        >
            <PlusIcon className="h-4 w-4 mr-2 inline-block" />
            {text}
        </button>
    );
};

export default AddButton;

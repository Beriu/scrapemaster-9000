import { FunctionComponent } from 'react';

interface Props {
    isDisabled: boolean;
    text: string;
    onClick: () => void;
    twBg: string
}

const GenericButton: FunctionComponent<Props> = function ({ isDisabled, onClick, text, twBg }) {
    return (
        <button
            disabled={isDisabled}
            className={`${twBg} hover:bg-opacity-70 mb-2 text-black py-2 px-4 rounded text-center`} 
            onClick={onClick}>
            { text }
        </button>
    );
};

export default GenericButton;
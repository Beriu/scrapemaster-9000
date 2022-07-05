import { FunctionComponent, useId, useState } from 'react';
import { ScrapperTarget, PropertyTarget } from '../types';
import InputField from '../components/InputField';
import CheckboxField from '../components/CheckboxField';
import { useOutletContext } from 'react-router-dom';
import GenericButton from '../components/GenericButton';
import TargetField from '../components/TargetField';
import AddButton from '../components/AddButton';


const ScrapperTargetForm: FunctionComponent<{ target?: ScrapperTarget }> = function ({ target }) {

    const generateId = (prefix: string) => `${prefix}_${useId()}`;

    const { isLoading } = useOutletContext<{ isLoading: boolean }>();

    const [name, setName] = useState("");
    const [url, setUrl] = useState("");

    const [allRequired, setAllRequired] = useState(false);
    const [multiple, setMultiple] = useState(false);

    const [targets, setTargets] = useState<PropertyTarget[]>([]);

    const setTargetIndividual = (target: PropertyTarget) => {
        const targeted = targets.find(t => t.id === target.id) as PropertyTarget;
        targeted.label = target.label;
        targeted.selector = target.selector;
        setTargets([...targets]);
    };

    const addTarget = (e: any) => {
        const newTarget = { id: Math.random().toString(), label: "", selector: "" };
        setTargets([...targets, newTarget]);
    }

    return (
        <form className='flex flex-col gap-3' onSubmit={(e) => e.preventDefault()}>
            <InputField 
                id={generateId('name')}
                label="Name"
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <InputField 
                id={generateId('url')}
                label="Target Url"
                type='text'
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />

            <CheckboxField 
                id={generateId('allRequired')}
                label="All targets required"
                value={allRequired}
                onChange={(e) => setAllRequired(e.target.value)}
            />

            <CheckboxField 
                id={generateId('multiple')}
                label="Multiple Values"
                value={multiple}
                onChange={(e) => setMultiple(e.target.value)}
            />

            { 
                targets.map((target, index) => {
                    return <TargetField
                                key={index}
                                target={{ id: target.id, label: target.label, selector: target.selector }} 
                                setter={setTargetIndividual}
                            />
                })
            }

            <AddButton onClick={addTarget} text='Add target field'/>

            <GenericButton twBg='bg-slate-300' isDisabled={isLoading} text="Create" onClick={() => {}} />
        </form>
    );
};

export default ScrapperTargetForm;
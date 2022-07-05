import { FunctionComponent, useEffect, useState } from 'react';
import Modal from '../components/Modal';
import ScrapperTargetComponent from '../components/ScrapperTarget';
import ScrapperTargetForm from '../forms/ScrapperTargetForm';
import { getScrapperTargets } from '../repositories/ScrapperTargetRepository';
import { ScrapperTarget } from '../types';

const ScrapperTargets: FunctionComponent<{}> = function () {

    const [isOpen, setIsOpen] = useState(false);
    const [targets, setTargets] = useState<ScrapperTarget[]>([]);

    const getAll = async () => setTargets(await getScrapperTargets());

    useEffect(() => {
        getAll()
    });

    return (
        <>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} header='Create new Target'>
            <ScrapperTargetForm />
        </Modal>
        {
            targets.map(t => <ScrapperTargetComponent target={t} />)
        }
        </>
    );
};

export default ScrapperTargets;

import { FunctionComponent, useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Modal from '../components/Modal';
import ScrapperTargetComponent from '../components/ScrapperTarget';
import ScrapperTargetForm from '../forms/ScrapperTargetForm';
import { getScrapperTargets, createScrapperTarget } from '../repositories/ScrapperTargetRepository';
import { OutletContext, ScrapperTarget } from '../types';

const ScrapperTargets: FunctionComponent<{}> = function () {

    const [isOpen, setIsOpen] = useState(false);
    const [targets, setTargets] = useState<ScrapperTarget[]>([]);
    const { isLoading, setLoading } = useOutletContext<OutletContext>();

    const getAll = () => {
        setLoading(true);
        getScrapperTargets()
            .then(ts => setTargets(ts))
            .finally(() => setLoading(false))
    };

    const createScrapperTgt = async (tgt: ScrapperTarget) => {
        setLoading(true);
        setTargets([...targets, await createScrapperTarget(tgt)]);
        setLoading(false);
        if(isOpen) setIsOpen(false);
    };

    useEffect(() => {
        getAll();
    }, []);

    return (
        <>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} header='Create new Target'>
            <ScrapperTargetForm onSubmit={createScrapperTgt} />
        </Modal>
        <div className="grid grid-cols-4 gap-2">
            {
                targets.map(t => <ScrapperTargetComponent key={t.id} target={t} />)
            }
        </div>
        </>
    );
};

export default ScrapperTargets;

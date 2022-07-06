import { FunctionComponent, useEffect, useState } from 'react';
import { OutletContext, ScrappingResult } from '../types';
import ScrappingResultComponent from '../components/ScrappingResult';
import { useOutletContext } from 'react-router-dom';
import { getAllResults } from '../repositories/ScrapperResultsRepository';

const ScrapperResults: FunctionComponent<{}> = function () {
    const [results, setResults] = useState<ScrappingResult[]>([]);
    const { isLoading, setLoading } = useOutletContext<OutletContext>();

    const getAllScrappingResults = () => {
        setLoading(true);
        getAllResults()
            .then((rs) => setResults(rs))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        getAllScrappingResults();
    }, []);

    return (
        <div className="grid grid-cols-4 gap-2">
            {results.map((r, index) => (
                <ScrappingResultComponent key={index} result={r} />
            )).reverse()}
        </div>
    );
};

export default ScrapperResults;

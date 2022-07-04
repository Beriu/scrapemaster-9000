import { FunctionComponent, useEffect, useState } from 'react';
import { getScrappers, deleteScrapper, updateScrapperStatus } from '../repositories/ScrappersRepository';
import ScrapperComponent from '../components/Scrapper';
import { Scrapper, ScrapperStatus } from '../types';

const Scrappers: FunctionComponent = () => {

    const [scrappers, setScrappers] = useState<Scrapper[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);

    const fetchScrappers = async () => {
        try {
            setLoading(true);
            setScrappers(await getScrappers())
        }catch(error: any) {
            setError(error?.message);
        }finally{
            setLoading(false);
        }
    };

    const deleteScrapperWrapper = (scrapper: Scrapper) => {
        return () => {
            deleteScrapper(scrapper.id);
            fetchScrappers();
        }
    };

    const startScrapperWrapper = (scrapper: Scrapper) => {
        return () => {
            updateScrapperStatus(scrapper.id, ScrapperStatus.IDDLE);
            fetchScrappers();
        }
    };

    const stopScrapperWrapper = (scrapper: Scrapper) => {
        return () => {
            updateScrapperStatus(scrapper.id, ScrapperStatus.OFFLINE);
            fetchScrappers();
        }
    };

    useEffect(() => {
        fetchScrappers();
    }, []);

    if(error) {
        return <div>Error: {error}</div>
    }

    if(loading) {
        return (
        <div className='flex w-full justify-between'>
            <span>Loading Scrappers...</span>
        </div>
        );
    }

    if(scrappers.length <= 0) {
        return <div>No scrappers.</div>
    }

    return (
        <div className='w-1/2'>
            { 
                scrappers.map(s => (
                    <ScrapperComponent
                        retireHandler={deleteScrapperWrapper(s)}
                        startHandler={startScrapperWrapper(s)}
                        stopHandler={stopScrapperWrapper(s)}
                        key={s.id} 
                        scrapper={s}
                    />
                )) 
            }
        </div>
    );
};

export default Scrappers;

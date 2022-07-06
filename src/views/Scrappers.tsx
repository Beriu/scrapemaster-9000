import { FunctionComponent, useEffect, useState } from 'react';
import {
    getScrappers,
    deleteScrapper,
    updateScrapperStatus,
    createScrapper,
} from '../repositories/ScrappersRepository';
import ScrapperComponent from '../components/Scrapper';
import { OutletContext, Scrapper, ScrapperStatus } from '../types';
import { useOutletContext } from 'react-router-dom';
import AddButton from '../components/AddButton';

const Scrappers: FunctionComponent = () => {
    const { isLoading, setLoading, scrappers, setScrappers } =
        useOutletContext<OutletContext>();

    const [error, setError] = useState<null | string>(null);

    const asyncAction = async (cb: () => any): Promise<void> => {
        try {
            setLoading(true);
            await cb();
        } catch (error: any) {
            setError(error?.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchScrappers = () => {
        asyncAction(async () => setScrappers(await getScrappers()));
    };

    const deleteScrapperWrapper = (scrapper: Scrapper) => {
        return () =>
            asyncAction(async () => {
                const deleted = await deleteScrapper(scrapper.id);
                if (deleted) {
                    const newCopy = scrappers.filter(
                        (scrp) => scrp.id !== deleted.id
                    );
                    setScrappers(newCopy);
                }
            });
    };

    const updateScrapperStatusWrapper = (
        scrapper: Scrapper,
        status: ScrapperStatus
    ) => {
        return async () => {
            try {
                setLoading(true);
                const updated = await updateScrapperStatus(scrapper.id, status);
                if (updated) {
                    const oldIndex = scrappers.indexOf(scrapper);
                    scrappers[oldIndex] = updated;
                    setScrappers([...scrappers]);
                }
            } catch (error: any) {
                setError(error?.message);
            } finally {
                setLoading(false);
            }
        };
    };

    const createNewScrapper = async () => {
        try {
            setLoading(true);
            const newScrp = await createScrapper();
            setScrappers([...scrappers, newScrp]);
        } catch (error: any) {
            setError(error?.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchScrappers();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <AddButton
                isDisabled={isLoading}
                onClick={createNewScrapper}
                text="Create new Scrapper"
            />
            <div className="w-1/2">
                {!isLoading && scrappers.length <= 0 ? (
                    <div className="text-white">No scrappers.</div>
                ) : (
                    scrappers.map((s) => (
                        <ScrapperComponent
                            retireHandler={deleteScrapperWrapper(s)}
                            startHandler={updateScrapperStatusWrapper(
                                s,
                                ScrapperStatus.IDDLE
                            )}
                            stopHandler={updateScrapperStatusWrapper(
                                s,
                                ScrapperStatus.OFFLINE
                            )}
                            key={s.id}
                            scrapper={s}
                        />
                    ))
                )}
            </div>
        </>
    );
};

export default Scrappers;

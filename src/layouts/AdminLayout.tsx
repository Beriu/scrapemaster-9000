import { FunctionComponent, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation, { NavigationItem } from '../components/Navigation';
import LoadingBar from '../components/LoadingBar';
import { Scrapper } from '../types';
import { initialScrappers } from '../repositories/ScrappersRepository';

const AdminLayout: FunctionComponent<{}> = function () {
    const layoutStyle = {
        display: 'grid',
        gridTemplateColumns: 'minmax(200px, 25%) 1fr',
        gap: '2rem',
    };

    const [isLoading, setLoading] = useState(false);
    const [scrappers, setScrappers] = useState<Scrapper[]>([]);

    /** prevents a demo bug */
    useEffect(() => setScrappers(initialScrappers), []);

    const navItems: NavigationItem[] = [
        {
            label: 'Scrappers',
            path: '/',
        },
        {
            label: 'Scrapper Targets',
            path: '/scrapper-targets',
        },
        {
            label: 'Scrapper Results',
            path: '/scrapper-results',
        },
    ];

    return (
        <>
            <LoadingBar isLoading={isLoading} />
            <div className="grid place-items-center h-screen">
                <div style={layoutStyle} className="w-5/6 h-5/6">
                    <Navigation items={navItems} />

                    <main>
                        <Outlet
                            context={{
                                isLoading,
                                setLoading,
                                scrappers,
                                setScrappers,
                            }}
                        />
                    </main>
                </div>
            </div>
        </>
    );
};

export default AdminLayout;

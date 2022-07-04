import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation, { NavigationItem } from '../components/Navigation';

const AdminLayout: FunctionComponent<{}> = function () {
    
    const layoutStyle = {
        display: 'grid',
        gridTemplateColumns: 'minmax(200px, 25%) 1fr',
    };

    const navItems: NavigationItem[] = [
        {
            label: "Home",
            path: "/"
        },
        {
            label: "Scrappers",
            path: "/scrappers"
        },
        {
            label: "Scrapper Targets",
            path: "/scrapper-targets"
        }
    ];

    return (
        <div className="grid place-items-center h-screen">
            <div style={layoutStyle} className="w-5/6 h-5/6">
                <Navigation items={navItems} />

                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;

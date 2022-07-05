import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

export interface NavigationItem {
    label: string,
    path:  string,
};

const Navigation: FunctionComponent<{ items: Array<NavigationItem> }> = function ({ items }) {

    const navLinkClassname = ({ isActive }: { isActive: boolean }) => {
        const base = "flex block px-6 py-2 border-b last:border-b-0 border-gray-200 w-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 transition duration-500 cursor-pointer";
        return isActive ? `${base} bg-gray-100` : base;
    };

    return (
        <aside className="flex justify-center text-center">
            <div className="h-fit grow bg-white rounded-lg border border-gray-200 text-gray-900">
                { 
                    items.map((navItem, index) => (
                        <NavLink
                            className={ navLinkClassname }
                            to={navItem.path}
                            key={index}>
                            {navItem.label}
                        </NavLink>
                    )) 
                }
            </div>
        </aside>
    );
}

export default Navigation;

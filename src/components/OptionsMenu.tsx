import { Menu, Transition } from '@headlessui/react';
import { Fragment, FunctionComponent, ReactNode } from 'react';
import { DotsHorizontalIcon } from '@heroicons/react/outline';

export interface OptionsMenuItem {
    label: string;
    clickHandler: (v?: any) => void;
}

const OptionsMenu: FunctionComponent<{
    items: OptionsMenuItem[];
    children?: JSX.Element | JSX.Element[];
}> = (props) => {
    return (
        <span>
            <Menu as="div" className="relative inline-block">
                <div>
                    {props.children ?? (
                        <Menu.Button className="inline-flex w-full justify-center px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none">
                            <DotsHorizontalIcon
                                className="h-5 w-5 text-black"
                                aria-hidden="true"
                            />
                        </Menu.Button>
                    )}
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="z-10 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {props.items.map((item, index) => (
                            <div key={index} className="px-1 py-1">
                                <Menu.Item>
                                    <button
                                        onClick={item.clickHandler}
                                        className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm text-ellipsis"
                                    >
                                        {item.label}
                                    </button>
                                </Menu.Item>
                            </div>
                        ))}
                    </Menu.Items>
                </Transition>
            </Menu>
        </span>
    );
};

export default OptionsMenu;

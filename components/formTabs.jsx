"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const tabs = [
    { name: 'Summary', href: '/startups/add/summary' },
    { name: 'Additional Info', href: '/startups/add/additional-info' },
    { name: 'Sourcing and Evaluation', href: '/startups/add/sourcing-and-evaluation' },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function FormTabs() {
    const router = useRouter();
    const pathname = usePathname();
    const [selectedTab, setSelectedTab] = useState("Summary");

    useEffect(() => {
        updateSelectedTab(pathname);
    }, [pathname]);

    const updateSelectedTab = (path) => {
        if (path.includes("sourcing-and-evaluation")) setSelectedTab("Sourcing and Evaluation");
        else if (path.includes("additional-info")) setSelectedTab("Additional Info");
        else setSelectedTab("Summary");
    };

    const handleTabChange = (value) => {
        setSelectedTab(value);
        const paths = {
            "Summary": `/startups/add/summary`,
            "Additional Info": `/startups/add/additional-info`,
            "Sourcing and Evaluation": `/startups/add/sourcing-and-evaluation`,
        };
        router.push(paths[value]);
    };

    return (
        <div>
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full rounded-md border-gray-400 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    value={selectedTab}
                    onChange={(e) => handleTabChange(e.target.value)}
                >
                    {tabs.map((tab) => (
                        <option key={tab.name} value={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <div className="border-b border-gray-400">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {tabs.map((tab) => (
                            <a
                                key={tab.name}
                                onClick={() => handleTabChange(tab.name)}
                                className={classNames(
                                    selectedTab === tab.name
                                        ? 'border-blue-500 text-blue-700'
                                        : 'border-transparent text-gray-300 hover:text-gray-400 hover:border-gray-300',
                                    'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer'
                                )}
                                aria-current={selectedTab === tab.name ? 'page' : undefined}
                            >
                                {tab.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}

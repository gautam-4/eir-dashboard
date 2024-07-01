"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

function Tabs({ id }) {
    const router = useRouter();
    const pathname = usePathname();
    const [selectedTab, setSelectedTab] = useState("About Startup");

    useEffect(() => {
        updateSelectedTab(pathname);
    }, [pathname]);

    const updateSelectedTab = (path) => {
        if (path.includes("founders")) setSelectedTab("About Founders");
        else if (path.includes("sourcing-and-evaluation")) setSelectedTab("Sourcing and Evaluation");
        else if (path.includes("checklist")) setSelectedTab("CheckList");
        else setSelectedTab("About Startup");
    };

    const handleTabChange = (value) => {
        const paths = {
            "About Startup": `/startups/${id}/about-startup`,
            "About Founders": `/startups/${id}/about-founders`,
            "Sourcing and Evaluation": `/startups/${id}/sourcing-and-evaluation`,
            "CheckList": `/startups/${id}/checklist`,
        };
        router.push(paths[value]);
    };

    return (
        <>
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">Select your Tab</label>
                <select
                    id="tabs"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => handleTabChange(e.target.value)}
                    value={selectedTab}
                >
                    <option>About Startup</option>
                    <option>About Founders</option>
                    <option>Sourcing and Evaluation</option>
                    <option>CheckList</option>
                </select>
            </div>
            <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                {["About Startup", "About Founders", "Sourcing and Evaluation", "CheckList"].map((tab) => (
                    <li key={tab} className="w-full focus-within:z-10">
                        <Link href={`/startups/${id}/${tab.toLowerCase().replace(/ /g, "-")}`}>
                            <div
                                className={`inline-block w-full p-4 ${selectedTab === tab ? "text-gray-900 bg-gray-100 dark:bg-gray-700 dark:text-white" : "bg-white dark:bg-gray-800"} border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:hover:bg-gray-700`}
                                onClick={() => handleTabChange(tab)}
                            >
                                {tab}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Tabs;
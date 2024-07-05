"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "./ui/button";

function Tabs({ id }) {
    const router = useRouter();
    const pathname = usePathname();
    const [selectedTab, setSelectedTab] = useState("About Startup");

    useEffect(() => {
        updateSelectedTab(pathname);
    }, [pathname]);

    const updateSelectedTab = (path) => {
        if (path.includes("about-founders")) setSelectedTab("About Founders");
        else if (path.includes("sourcing-and-evaluation")) setSelectedTab("Sourcing and Evaluation");
        else if (path.includes("checklist")) setSelectedTab("Checklist");
        else setSelectedTab("About Startup");
    };

    const handleTabChange = (value) => {
        const paths = {
            "About Startup": `/startups/${id}/about-startup`,
            "About Founders": `/startups/${id}/about-founders`,
            "Sourcing and Evaluation": `/startups/${id}/sourcing-and-evaluation`,
            "Checklist": `/startups/${id}/checklist`,
        };
        router.push(paths[value]);
    };

    return (
        <>
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">Select your Tab</label>
                <select
                    id="tabs"
                    className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    onChange={(e) => handleTabChange(e.target.value)}
                    value={selectedTab}
                >
                    <option>About Startup</option>
                    <option>About Founders</option>
                    <option>Sourcing and Evaluation</option>
                    <option>Checklist</option>
                </select>
            </div>
            <ul className="hidden text-sm font-medium text-center text-gray-300 rounded-lg shadow sm:flex">
                {["About Startup", "About Founders", "Sourcing and Evaluation", "Checklist"].map((tab) => (
                    <li key={tab} className="w-full focus-within:z-10">
                        <Link href={`/startups/${id}/${tab.toLowerCase().replace(/ /g, "-")}`}>
                            <div
                                className={`inline-block w-full p-4 ${selectedTab === tab ? "text-white bg-gray-900" : "bg-black"} h-full flex justify-center items-center border border-gray-800 hover:text-gray-200 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 focus:outline-none ${tab === "About Startup" ? "rounded-l-xl" : ""} ${tab === "Checklist" ? "rounded-r-xl" : ""}`}
                                onClick={() => handleTabChange(tab)}
                            >
                                {tab}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="mt-4 flex flex-row justify-end">
                <Link href={`/startups/edit/${id}/summary`}>
                    <Button className="dark opacity-85">Edit</Button>
                </Link>

                <Button className="bg-red-600 hover:bg-red-800 opacity-85 ml-2">Delete</Button>
            </div>
        </>
    );
}

export default Tabs;
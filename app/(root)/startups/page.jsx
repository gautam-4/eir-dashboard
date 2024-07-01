"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const startups = [
  {
    id: 1,
    name: 'Company A',
    thesis: 'Technology',
    eirAssigned: 'Shivani',
    prioritylevel: 'P1',
    stage: 'L1',
  },
  {
    id: 2,
    name: 'Company B',
    thesis: 'NonTechnology',
    eirAssigned: 'Dhruv',
    prioritylevel: 'P3',
    stage: 'L2',
  },
  // More startups...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function StartupList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedThesis, setSelectedThesis] = useState([]);
  const [selectedEirAssigned, setSelectedEirAssigned] = useState([]);
  const [selectedStage, setSelectedStage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to first page when search query changes
  };

  const toggleFilter = (filter, setFilter, value) => {
    setFilter((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleThesisFilterChange = (value) => {
    setSelectedThesis(value === 'all' ? [] : [value]);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleEIRFilterChange = (value) => {
    setSelectedEirAssigned(value === 'all' ? [] : [value]);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleStageFilterChange = (value) => {
    setSelectedStage(value === 'all' ? [] : [value]);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const filteredStartups = startups.filter((startup) => {
    return (
      startup.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedThesis.length === 0 || selectedThesis.includes(startup.thesis)) &&
      (selectedEirAssigned.length === 0 || selectedEirAssigned.includes(startup.eirAssigned)) &&
      (selectedStage.length === 0 || selectedStage.includes(startup.stage))
    );
  });

  const totalPages = Math.ceil(filteredStartups.length / itemsPerPage);

  const paginatedStartups = filteredStartups.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="w-full text-gray-100">
      <div className="sm:flex sm:items-center">
        <div className="px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-100">Startups</h1>
        </div>
      </div>

      <div className="flex items-center justify-between mt-8 flex-wrap">
        <div className="w-[345px] md:w-[435px] pb-2">
          <Input
            type="text"
            placeholder="Search startups..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full shadow-sm bg-transparent text-gray-300"
          />
        </div>

        <div className="flex gap-2 pb-2 flex-wrap">
          <Select onValueChange={handleThesisFilterChange} >
            <SelectTrigger className="w-[109px] bg-transparent text-gray-400">
              <SelectValue placeholder="All Thesis" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Thesis</SelectItem>
              <SelectItem value="Technology">Technology</SelectItem>
              <SelectItem value="NonTechnology">NonTechnology</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={handleEIRFilterChange}>
            <SelectTrigger className="w-[109px] bg-transparent text-gray-400">
              <SelectValue placeholder="All EIRs" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All EIRs</SelectItem>
              <SelectItem value="Shivani">Shivani</SelectItem>
              <SelectItem value="Dhruv">Dhruv</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={handleStageFilterChange}>
            <SelectTrigger className="w-[109px] bg-transparent text-gray-400">
              <SelectValue placeholder="All Stages" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Stages</SelectItem>
              <SelectItem value="L1">L1</SelectItem>
              <SelectItem value="L2">L2</SelectItem>
              <SelectItem value="L2.5">L2.5</SelectItem>
              <SelectItem value="L3">L3</SelectItem>
              <SelectItem value="L4">L4</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="-mx-4 mt-10 ring-1 ring-gray-300 sm:-mx-6 md:mx-0 md:rounded-lg bg-black">
        <table className="min-w-full divide-y divide-gray-400">
          <thead>
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-100 sm:pl-6">
                Startup Name
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-100 lg:table-cell"
              >
                Thesis
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-100 lg:table-cell"
              >
                EIR Assigned
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-100 lg:table-cell"
              >
                Priority Level
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-100">
                Stage
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Select</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedStartups.map((startup, startupIdx) => (
              <tr key={startup.id}>
                <td
                  className={classNames(
                    startupIdx === 0 ? '' : 'border-t border-transparent',
                    'relative py-4 pl-4 sm:pl-6 pr-3 text-sm text-gray-100'
                  )}
                >
                  <div className="font-medium text-gray-100">
                    {startup.name}
                  </div>
                  <div className="mt-1 flex flex-col text-gray-400 sm:block lg:hidden">
                    <span>
                      {startup.thesis} / {startup.eirAssigned}
                    </span>
                    <span className="hidden sm:inline">·</span>
                    <span>{startup.prioritylevel}</span>
                  </div>
                  {startupIdx !== 0 ? <div className="absolute right-0 left-6 -top-px h-px bg-gray-800" /> : null}
                </td>
                <td
                  className={classNames(
                    startupIdx === 0 ? '' : 'border-t border-gray-800',
                    'hidden px-3 py-3.5 text-sm text-gray-300 lg:table-cell'
                  )}
                >
                  {startup.thesis}
                </td>
                <td
                  className={classNames(
                    startupIdx === 0 ? '' : 'border-t border-gray-800',
                    'hidden px-3 py-3.5 text-sm text-gray-300 lg:table-cell'
                  )}
                >
                  {startup.eirAssigned}
                </td>
                <td
                  className={classNames(
                    startupIdx === 0 ? '' : 'border-t border-gray-800',
                    'hidden px-3 py-3.5 text-sm text-gray-300 lg:table-cell'
                  )}
                >
                  {startup.prioritylevel}
                </td>
                <td
                  className={classNames(
                    startupIdx === 0 ? '' : 'border-t border-gray-800',
                    'px-3 py-3.5 text-sm text-gray-300'
                  )}
                >
                  {startup.stage}
                </td>
                <td
                  className={classNames(
                    startupIdx === 0 ? '' : 'border-t border-transparent',
                    'relative py-3.5 pl-3 pr-4 sm:pr-6 text-right text-sm font-medium'
                  )}
                >
                  <Link href={`/startups/${startup.id}/about-startup`}>
                    <Button
                      type="button"
                      className="inline-flex items-center rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-gray-300 shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      Select<span className="sr-only">, {startup.name}</span>
                    </Button>
                  </Link>
                  {startupIdx !== 0 ? <div className="absolute right-6 left-0 -top-px h-px bg-gray-800" /> : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-300">
          Showing {Math.min((currentPage - 1) * itemsPerPage + 1, filteredStartups.length)}-
          {Math.min(currentPage * itemsPerPage, filteredStartups.length)} of {filteredStartups.length} startups
        </div>
        <div className="flex gap-2">
          <Button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="border border-gray-600 bg-black px-3 py-1 text-sm font-medium leading-4 text-gray-300 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
          >
            Previous
          </Button>
          <Button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="border border-gray-600 bg-black px-3 py-1 text-sm font-medium leading-4 text-gray-300 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

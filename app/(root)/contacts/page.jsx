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
import {
  PlusIcon
} from '@heroicons/react/24/outline'

const contacts = [
    {
      id: 1,
      name: 'Contact A',
      designation: 'CEO',
      organization: 'Company X',
      roles: ['Founder', 'Mentor', 'Investor'],
      stage: 'L1',
    },
    {
      id: 2,
      name: 'Contact B',
      designation: 'CTO',
      organization: 'Startup Y',
      roles: ['Founder', 'Investor'],
      stage: 'L2',
    },
  ];
  

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ContactList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to first page when search query changes
  };

  const handleRoleFilterChange = (value) => {
    setSelectedRoles(value === 'all' ? [] : [value]);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const filteredContacts = contacts.filter((contact) => {
    return (
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedRoles.length === 0 || selectedRoles.includes(contact.roles))
    );
  });

  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);

  const paginatedContacts = filteredContacts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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
          <h1 className="text-2xl font-semibold text-gray-100">Contacts</h1>
        </div>
      </div>

      <div className="flex items-center justify-between mt-8 flex-wrap">
        <div className="w-[345px] md:w-[435px] pb-2">
          <Input
            type="text"
            placeholder="Search contacts..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full shadow-sm bg-transparent text-gray-300"
          />
        </div>

        <div className="flex gap-2 pb-2 flex-wrap">

          <Select onValueChange={handleRoleFilterChange}>
            <SelectTrigger className="w-[82px] bg-transparent text-gray-400">
              <SelectValue placeholder="Roles" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="L1">Founder</SelectItem>
              <SelectItem value="L2">Mentor</SelectItem>
              <SelectItem value="L2.5">Investor</SelectItem>
            </SelectContent>
          </Select>

          <Link href={'/add/contact'}>
            <Button className="bg-green-800 hover:bg-green-950 bg-opacity-85 py-4 pr-3 pl-2">
              <PlusIcon className="h-4 w-4" aria-hidden="true" />
              <span className="pl-2">Add</span>
            </Button>
          </Link>

        </div>
      </div>

      <div className="-mx-4 mt-10 ring-1 ring-gray-300 sm:-mx-6 md:mx-0 md:rounded-lg bg-black">
        <table className="min-w-full divide-y divide-gray-400">
          <thead>
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-100 sm:pl-6">
                Name
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-100 lg:table-cell"
              >
                Designation
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-100 lg:table-cell"
              >
                Organization
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-100"
              >
                Roles
              </th>

              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Select</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedContacts.map((contact, contactIdx) => (
              <tr key={contact.id}>
                <td
                  className={classNames(
                    contactIdx === 0 ? '' : 'border-t border-transparent',
                    'relative py-4 pl-4 sm:pl-6 pr-3 text-sm text-gray-100'
                  )}
                >
                  <div className="font-medium text-gray-100">
                    {contact.name}
                  </div>
                  <div className="mt-1 flex flex-col text-gray-400 sm:block lg:hidden">
                    <span>
                      {contact.designation} / {contact.organization}
                    </span>
                    <span className="hidden sm:inline">·</span>
                    <span>{contact.roles}</span>
                  </div>
                  {contactIdx !== 0 ? <div className="absolute right-0 left-6 -top-px h-px bg-gray-800" /> : null}
                </td>
                <td
                  className={classNames(
                    contactIdx === 0 ? '' : 'border-t border-gray-800',
                    'hidden px-3 py-3.5 text-sm text-gray-300 lg:table-cell'
                  )}
                >
                  {contact.designation}
                </td>
                <td
                  className={classNames(
                    contactIdx === 0 ? '' : 'border-t border-gray-800',
                    'hidden px-3 py-3.5 text-sm text-gray-300 lg:table-cell'
                  )}
                >
                  {contact.organization}
                </td>
                
                <td
                  className={classNames(
                    contactIdx === 0 ? '' : 'border-t border-gray-800',
                    'px-3 py-3.5 text-sm text-gray-300'
                  )}
                >
                  {contact.roles.join(', ')}
                </td>
                <td
                  className={classNames(
                    contactIdx === 0 ? '' : 'border-t border-transparent',
                    'relative py-3.5 pl-3 pr-4 sm:pr-6 text-right text-sm font-medium'
                  )}
                >
                  <Link href={`/contacts/${contact.id}`}>
                    <Button
                      type="button"
                      className="inline-flex items-center rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-gray-300 shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      Select<span className="sr-only">, {contact.name}</span>
                    </Button>
                  </Link>
                  {contactIdx !== 0 ? <div className="absolute right-6 left-0 -top-px h-px bg-gray-800" /> : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-300">
          Showing {Math.min((currentPage - 1) * itemsPerPage + 1, filteredContacts.length)}-
          {Math.min(currentPage * itemsPerPage, filteredContacts.length)} of {filteredContacts.length} contacts
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

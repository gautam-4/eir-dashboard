"use client"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import Dropdown from "@/components/dropdown";
import { PlusIcon, XCircleIcon } from '@heroicons/react/24/outline';

const designations = [
  {
    value: "founder",
    label: "Founder",
  },
  {
    value: "mentor",
    label: "Mentor",
  },
  {
    value: "investor",
    label: "Investor",
  },
  {
    value: "other",
    label: "Other",
  },
];

function AddContact() {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    organization: '',
    phone: '',
    whatsappNo: '',
    linkedin: '',
    associations: []
  });

  const [association, setAssociation] = useState({
    type: '',
    company: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleDropdownChange = (name, value) => {
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleAssociationChange = (e) => {
    const { name, value } = e.target;
    setAssociation(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const addAssociation = () => {
    if (association.type.trim() && association.company.trim()) {
      setFormData(prevState => ({
        ...prevState,
        associations: [...prevState.associations, association]
      }));
      setAssociation(prevState => ({
        type: prevState.type,
        company: ''
      }));
    }
  };

  const removeAssociation = (index) => {
    setFormData(prevState => ({
      ...prevState,
      associations: prevState.associations.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
    setFormData({
      name: '',
      designation: '',
      organization: '',
      phone: '',
      whatsappNo: '',
      linkedin: '',
      associations: []
    });
  };

  return (
    <div className="w-full text-gray-100">
      <div className="sm:flex sm:items-center">
        <div className="px-4 sm:px-6 md:px-8">
          <h1 className="text-3xl font-semibold text-gray-100">New Contact</h1>
        </div>
      </div>
      <div className="">
        <div className="pb-2">
          <form className="px-8 pt-6 pb-8 lg:rounded-r-lg lg:rounded-l-none rounded-3xl" onSubmit={handleSubmit}>
            <div className="grid w-full max-w-sm items-center gap-1.5 py-5">
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" placeholder="Name" name="name" onChange={handleChange} value={formData.name} required className="bg-transparent" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 py-5">
              <Label htmlFor="designation">Designation</Label>
              <Dropdown params={designations} label="Select Designation" name="designation" handleDropdownChange={handleDropdownChange} required />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 py-5">
              <Label htmlFor="organization">Organization</Label>
              <Input type="text" id="organization" placeholder="Organization" name="organization" onChange={handleChange} value={formData.organization} required className="bg-transparent" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 py-5">
              <Label htmlFor="phone">Phone No.</Label>
              <Input type="text" id="phone" placeholder="Phone" name="phone" onChange={handleChange} value={formData.phone} required className="bg-transparent" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 py-5">
              <Label htmlFor="whatsappNo">WhatsApp No.</Label>
              <Input type="text" id="whatsappNo" placeholder="WhatsApp No." name="whatsappNo" onChange={handleChange} value={formData.whatsappNo} className="bg-transparent" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 py-5">
              <Label htmlFor="linkedin">LinkedIn</Label>
              <Input type="text" id="linkedin" placeholder="LinkedIn URL" name="linkedin" onChange={handleChange} value={formData.linkedin} className="bg-transparent" />
            </div>

            <div>
              <p className="mt-5 font-bold text-xl">Associations</p>

              <div>
                {formData.associations.map((assoc, index) => (
                  <div key={index} className="flex gap-2 mb-2 items-center">
                    <span>{assoc.type}</span> - 
                    <span>{assoc.company}</span>
                    <button onClick={() => removeAssociation(index)} type="button" className="ml-2 text-red-600 hover:text-red-800">
                      <XCircleIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex w-full max-w-sm items-center gap-1.5 py-5">
                <div>
                  <Label htmlFor="type">Association Type</Label>
                  <Dropdown params={designations} label="Association Type" name="type" handleDropdownChange={(name, value) => handleAssociationChange({ target: { name, value } })} />
                </div>
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input type="text" id="company" placeholder="Association Company" name="company" onChange={handleAssociationChange} value={association.company} className="bg-transparent" />
                </div>
                <Button onClick={addAssociation} className="bg-transparent border border-white bg-opacity-85 rounded-full mt-6" type="button">
                  <PlusIcon className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>

            <div className="text-left mt-3">
              <Button type="submit"
                className="button-primary hover:bg-blue-600 justify-center rounded-md py-2 px-4 text-sm font-medium shadow-sm"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddContact;

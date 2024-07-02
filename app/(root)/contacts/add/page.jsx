"use client"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import Dropdown from "@/components/dropdown";
import { PlusIcon } from '@heroicons/react/24/outline';

const designations = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "other",
    label: "Other",
  },
]

function AddContact() {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    organization: '',
    phone: '',
    whatsappNo: '',
    linkedin: '',
    associations: {
      type: '',
      company: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => {
      // Handle nested associations separately
      if (name.startsWith('associations.')) {
        const associationKey = name.split('.')[1];
        return {
          ...prevState,
          associations: {
            ...prevState.associations,
            [associationKey]: value
          }
        };
      }
      return {
        ...prevState,
        [name]: value
      };
    });
  }

  const handleDropdownChange = (name, value) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
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
      associations: [
        {
          type: '',
          company: ''
        }
      ]
    });
  }

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

              </div>

              <div className="flex w-full max-w-sm items-center gap-1.5 py-5">
                <div>
                  <Label htmlFor="associations.type">Association Type</Label>
                  <Dropdown params={designations} label="Select Association Type" name="associations.type" handleDropdownChange={handleDropdownChange} />
                </div>
                <div>
                  <Label htmlFor="associations.company">Company</Label>
                  <Input type="text" id="associations.company" placeholder="Association Company" name="associations.company" onChange={handleChange} value={formData.associations.company} required className="bg-transparent" />
                </div>
                <Button className="bg-green-800 hover:bg-green-950 bg-opacity-85 rounded-full mt-6">
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
  )
}

export default AddContact;

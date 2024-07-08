"use client"

import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';


const handleSubmit = () => {
  console.log('submitted');
}

function AboutFounder({ params }) {
  const id = params.id;

  const [founders, setFounders] = useState([]);
  const [founderName, setFounderName] = useState('');
  const [founderCredentials, setFounderCredentials] = useState('');

  const addFounder = () => {
    if (founderName && founderCredentials) {
      setFounders([...founders, { name: founderName, credentials: founderCredentials }]);
      setFounderName('');
      setFounderCredentials('');
    }
  };

  const removeFounder = (index) => {
    setFounders(founders.filter((_, i) => i !== index));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-12 mt-12">
        <div className="space-y-8 border-b">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4">
              <div className="flex-1">
                <Label htmlFor="founderName">Founder Name</Label>
                <Input
                  type="text"
                  id="founderName"
                  className="bg-black mt-2"
                  value={founderName}
                  onChange={(e) => setFounderName(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <Label htmlFor="founderCredentials">Founder Credentials</Label>
                <Input
                  type="text"
                  id="founderCredentials"
                  className="bg-black mt-2"
                  value={founderCredentials}
                  onChange={(e) => setFounderCredentials(e.target.value)}
                />
              </div>
              <Button type="button" onClick={addFounder} className="mt-8 dark">
                <PlusIcon className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
            <div className="mt-4">
              {founders.map((founder, index) => (
                <div key={index} className="bg-transparent flex gap-2 items-center">
                  <span>{founder.name} - {founder.credentials}</span>
                  <Button type="button" onClick={() => removeFounder(index)} className="text-red-600 hover:text-red-800 bg-transparent hover:bg-transparent">
                    <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                  </Button>
                </div>
              ))}
            </div>
            <div>
              <Label htmlFor="equityStructure">Equity Structure</Label>
              <Textarea id="equityStructure" rows="4" className="bg-black mt-2 resize-none"></Textarea>
            </div>
            <div>
              <Label htmlFor="noteOnFounders">Note on founders</Label>
              <Textarea id="noteOnFounders" rows="4" className="bg-black mt-2 resize-none"></Textarea>
            </div>
          </div>
        </div>
        <Button type="submit" className="mt-8 button-primary hover:bg-blue-600">Submit</Button>
      </form>
    </>
  )
}

export default AboutFounder
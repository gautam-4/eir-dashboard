"use client"

import FormTabs from '@/components/formTabs';

import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function Page() {
    const [startupInfo, setStartupInfo] = useState({ startupName: '', brief: '', domain: '', leadMentor: '', usp: '', businessModel: '' });
    const [companyInfo, setCompanyInfo] = useState({ founded: '', registeredName: '', city: '', website: '', email: '', contactNo: '', gtmStrategy: '' });
    const [financialDetails, setFinancialDetails] = useState({ currentTraction: '', revenues: '', lastFYRevenue: '', margin: '', burnRate: '', teamSize: '', pastInvestments: '', runway: '', competitors: '', challenges: '' });
    const [investmentAsk, setInvestmentAsk] = useState({ ask: '', equityDilution: '', preMoneyValuation: '' });
    const [additionalInfo, setAdditionalInfo] = useState({ additionalInfo: '', note: '' });

    const handleChange = (e, setState) => {
        const { id, value } = e.target;
        setState(prevState => ({ ...prevState, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-12 mt-3">
                <div className="space-y-8 border-b">
                    <h3 className="text-lg font-semibold mb-4">Startup Information</h3>
                    <div className="space-y-6">
                        <div>
                            <Label htmlFor="startupName">Startup Name</Label>
                            <Input type="text" id="startupName" className="bg-black mt-2" value={startupInfo.startupName} onChange={(e) => handleChange(e, setStartupInfo)} />
                        </div>
                        <div>
                            <Label htmlFor="brief">Brief</Label>
                            <Textarea id="brief" rows="4" className="bg-black mt-2 resize-none" value={startupInfo.brief} onChange={(e) => handleChange(e, setStartupInfo)}></Textarea>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex-1">
                                <Label htmlFor="domain">Thesis</Label>
                                <Input type="text" id="domain" className="bg-black mt-2" value={startupInfo.domain} onChange={(e) => handleChange(e, setStartupInfo)} />
                            </div>
                            <div className="flex-1">
                                <Label htmlFor="leadMentor">Lead Mentor</Label>
                                <Input type="text" id="leadMentor" className="bg-black mt-2" value={startupInfo.leadMentor} onChange={(e) => handleChange(e, setStartupInfo)} />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="usp">USP / Core Competence</Label>
                            <Textarea id="usp" rows="4" className="bg-black mt-2 resize-none" value={startupInfo.usp} onChange={(e) => handleChange(e, setStartupInfo)}></Textarea>
                        </div>
                        <div>
                            <Label htmlFor="businessModel">Business Model</Label>
                            <Textarea id="businessModel" rows="4" className="bg-black mt-2 resize-none" value={startupInfo.businessModel} onChange={(e) => handleChange(e, setStartupInfo)}></Textarea>
                        </div>
                    </div>
                </div>

                <hr className="my-8 border-gray-700" />

                <div className="space-y-8 border-b">
                    <h3 className="text-lg font-semibold mb-4">About the Company</h3>
                    <div className="space-y-6">
                        <div className="flex flex-wrap gap-4 flex-col sm:flex-row">
                            <div className="flex-1">
                                <Label htmlFor="founded">Founded in</Label>
                                <Input type="text" id="founded" className="bg-black mt-2" value={companyInfo.founded} onChange={(e) => handleChange(e, setCompanyInfo)} />
                            </div>
                            <div className="flex-1">
                                <Label htmlFor="registeredName">Registered Name</Label>
                                <Input type="text" id="registeredName" className="bg-black mt-2" value={companyInfo.registeredName} onChange={(e) => handleChange(e, setCompanyInfo)} />
                            </div>
                            <div className="flex-1">
                                <Label htmlFor="city">City / HQ</Label>
                                <Input type="text" id="city" className="bg-black mt-2" value={companyInfo.city} onChange={(e) => handleChange(e, setCompanyInfo)} />
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4 flex-col sm:flex-row">
                            <div className="flex-1">
                                <Label htmlFor="website">Website:</Label>
                                <Input type="text" id="website" className="bg-black mt-2" value={companyInfo.website} onChange={(e) => handleChange(e, setCompanyInfo)} />
                            </div>
                            <div className="flex-1">
                                <Label htmlFor="email">Email of Company</Label>
                                <Input type="email" id="email" className="bg-black mt-2" value={companyInfo.email} onChange={(e) => handleChange(e, setCompanyInfo)} />
                            </div>
                            <div className="flex-1">
                                <Label htmlFor="contactNo">Contact No</Label>
                                <Input type="tel" id="contactNo" className="bg-black mt-2" value={companyInfo.contactNo} onChange={(e) => handleChange(e, setCompanyInfo)} />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="gtmStrategy">GTM Strategy Employed</Label>
                            <Textarea id="gtmStrategy" rows="4" className="bg-black mt-2 resize-none" value={companyInfo.gtmStrategy} onChange={(e) => handleChange(e, setCompanyInfo)}></Textarea>
                        </div>
                    </div>
                </div>

                <hr className="my-8 border-gray-700" />

                <div className="space-y-8">
                    <h3 className="text-lg font-semibold mb-4">Financial Details</h3>
                    <div className="space-y-6">
                        <div className="flex flex-wrap gap-4 flex-col sm:flex-row">
                            <div className="flex-1">
                                <Label htmlFor="currentTraction">Current Traction</Label>
                                <Input type="text" id="currentTraction" className="bg-black mt-2" value={financialDetails.currentTraction} onChange={(e) => handleChange(e, setFinancialDetails)} />
                            </div>
                            <div className="flex-1">
                                <Label htmlFor="revenues">Revenues (MRR, ARR)</Label>
                                <Input type="text" id="revenues" className="bg-black mt-2" value={financialDetails.revenues} onChange={(e) => handleChange(e, setFinancialDetails)} />
                            </div>
                            <div className="flex-1">
                                <Label htmlFor="lastFYRevenue">Last FY Gross Revenue</Label>
                                <Input type="text" id="lastFYRevenue" className="bg-black mt-2" value={financialDetails.lastFYRevenue} onChange={(e) => handleChange(e, setFinancialDetails)} />
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4 flex-col sm:flex-row">
                            <div className="flex-1">
                                <Label htmlFor="margin">Gross/Net Margin</Label>
                                <Input type="text" id="margin" className="bg-black mt-2" value={financialDetails.margin} onChange={(e) => handleChange(e, setFinancialDetails)} />
                            </div>
                            <div className="flex-1">
                                <Label htmlFor="burnRate">Monthly Burn Rate</Label>
                                <Input type="text" id="burnRate" className="bg-black mt-2" value={financialDetails.burnRate} onChange={(e) => handleChange(e, setFinancialDetails)} />
                            </div>
                            <div className="flex-1">
                                <Label htmlFor="teamSize">Team Size</Label>
                                <Input type="text" id="teamSize" className="bg-black mt-2" value={financialDetails.teamSize} onChange={(e) => handleChange(e, setFinancialDetails)} />
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4 flex-col sm:flex-row">
                            <div className="flex-1">
                                <Label htmlFor="pastInvestments">Past Investment Rounds</Label>
                                <Textarea id="pastInvestments" rows="4" className="bg-black mt-2 resize-none" value={financialDetails.pastInvestments} onChange={(e) => handleChange(e, setFinancialDetails)}></Textarea>
                            </div>
                            <div className="flex-1">
                                <Label htmlFor="runway">Runway Before the Next Fundraise</Label>
                                <Input type="text" id="runway" className="bg-black mt-2" value={financialDetails.runway} onChange={(e) => handleChange(e, setFinancialDetails)} />
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4 flex-col sm:flex-row">
                            <div className="flex-1">
                                <Label htmlFor="competitors">Key Competitors</Label>
                                <Textarea id="competitors" rows="4" className="bg-black mt-2 resize-none" value={financialDetails.competitors} onChange={(e) => handleChange(e, setFinancialDetails)}></Textarea>
                            </div>
                            <div className="flex-1">
                                <Label htmlFor="challenges">Challenges or Risks</Label>
                                <Textarea id="challenges" rows="4" className="bg-black mt-2 resize-none" value={financialDetails.challenges} onChange={(e) => handleChange(e, setFinancialDetails)}></Textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-8 border-gray-700" />

                <div className="space-y-8">
                    <h3 className="text-lg font-semibold mb-4">Investment Ask</h3>
                    <div className="space-y-6">
                        <div className="flex flex-wrap gap-4 flex-col sm:flex-row">
                            <div className="flex-1">
                                <Label htmlFor="ask">Ask</Label>
                                <Input type="text" id="ask" className="bg-black mt-2" value={investmentAsk.ask} onChange={(e) => handleChange(e, setInvestmentAsk)} />
                            </div>
                            <div className="flex-1">
                                <Label htmlFor="equityDilution">Equity Dilution</Label>
                                <Input type="text" id="equityDilution" className="bg-black mt-2" value={investmentAsk.equityDilution} onChange={(e) => handleChange(e, setInvestmentAsk)} />
                            </div>
                            <div className="flex-1">
                                <Label htmlFor="preMoneyValuation">Premoney Valuation</Label>
                                <Input type="text" id="preMoneyValuation" className="bg-black mt-2" value={investmentAsk.preMoneyValuation} onChange={(e) => handleChange(e, setInvestmentAsk)} />
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-8 border-gray-700" />

                <div className="space-y-8">
                    <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
                    <div className="space-y-6">
                        <div>
                            <Label htmlFor="additionalInfo">Additional Info:</Label>
                            <Textarea id="additionalInfo" rows="4" className="bg-black mt-2 resize-none" value={additionalInfo.additionalInfo} onChange={(e) => handleChange(e, setAdditionalInfo)}></Textarea>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <h3 className="text-lg font-semibold mb-4">Note on Startup</h3>
                    <div className="space-y-6">
                        <div>
                            <Label htmlFor="note">Note / Comments:</Label>
                            <Textarea id="note" rows="4" className="bg-black mt-2 resize-none" value={additionalInfo.note} onChange={(e) => handleChange(e, setAdditionalInfo)}></Textarea>
                        </div>
                    </div>
                </div>

                <Button type="submit" className="mt-8">Submit</Button>
            </form>
        </>
    )
}

export default Page;

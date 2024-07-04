import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

function Page() {
    return (
        <>
            <h2 className="text-2xl font-semibold mb-4">New Startup</h2>
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Startup Information</h3>
                <div className="mb-4">
                    <Label htmlFor="startupName">Startup Name</Label>
                    <Input type="text" id="startupName" className="bg-black"/>
                </div>
                <div className="mb-4">
                    <Label htmlFor="brief">Brief</Label>
                    <Textarea id="brief" rows="4" className="bg-black resize-none"></Textarea>
                </div>
                <div className="mb-4">
                    <Label htmlFor="domain">Thesis</Label>
                    <Input type="text" id="domain" className="bg-black" />
                </div>
                <div className="mb-4">
                    <Label htmlFor="leadMentor">Lead Mentor</Label>
                    <Input type="text" id="leadMentor" className="bg-black" />
                </div>
                <div className="mb-4">
                    <Label htmlFor="usp">USP / Core Competence</Label>
                    <Textarea id="usp" rows="4" className="bg-black resize-none"></Textarea>
                </div>
                <div className="mb-4">
                    <Label htmlFor="businessModel">Business Model</Label>
                    <Textarea id="businessModel" rows="4" className="bg-black resize-none"></Textarea>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">About the Company</h3>
                <div className="mb-4">
                    <Label htmlFor="founded">Founded in</Label>
                    <Input type="text" id="founded" className="bg-black" />
                </div>
                <div className="mb-4">
                    <Label htmlFor="registeredName">Registered Name</Label>
                    <Input type="text" id="registeredName" className="bg-black" />
                </div>
                <div className="mb-4">
                    <Label htmlFor="city">City / HQ</Label>
                    <Input type="text" id="city" className="bg-black" />
                </div>
                <div className="mb-4">
                    <Label htmlFor="website">Website:</Label>
                    <Input type="text" id="website" className="bg-black" />
                </div>
                <div className="mb-4">
                    <Label htmlFor="email">Email of Company</Label>
                    <Input type="email" id="email" className="bg-black" />
                </div>
                <div className="mb-4">
                    <Label htmlFor="contactNo">Contact No</Label>
                    <Input type="tel" id="contactNo" className="bg-black" />
                </div>
                <div className="mb-4">
                    <Label htmlFor="gtmStrategy">GTM Strategy Employed</Label>
                    <Textarea id="gtmStrategy" rows="4" className="bg-black resize-none"></Textarea>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Financial Details</h3>
                <div className="mb-4">
                    <Label>Current Traction</Label>
                    <Input type="text" className="bg-black" />
                </div>
                <div className="mb-4">
                    <Label>Revenues (MRR, ARR)</Label>
                    <Input type="text" className="bg-black" />
                </div>
                <div className="mb-4">
                    <Label>Last FY Gross Revenue</Label>
                    <Input type="text" className="bg-black" />
                </div>
                <div className="mb-4">
                    <Label>Gross/Net Margin</Label>
                    <Input type="text" className="bg-black" />
                </div>
                <div className="mb-4">
                    <Label>Monthly Burn Rate</Label>
                    <Input type="text" className="bg-black" />
                </div>
                <div className="mb-4">
                    <Label>Team Size</Label>
                    <Input type="text" className="bg-black" />
                </div>
                <div className="mb-4">
                    <Label>Past Investment Rounds</Label>
                    <Textarea rows="4" className="bg-black resize-none"></Textarea>
                </div>
                <div className="mb-4">
                    <Label>Runway Before the Next Fundraise</Label>
                    <Input type="text" className="bg-black" />
                </div>
                <div className="mb-4">
                    <Label>Key Competitors</Label>
                    <Textarea rows="4" className="bg-black resize-none"></Textarea>
                </div>
                <div className="mb-4">
                    <Label>Challenges or Risks</Label>
                    <Textarea rows="4" className="bg-black resize-none"></Textarea>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Investment Ask</h3>
                <div className="mb-4">
                    <Label>Ask</Label>
                    <Input type="text" className="bg-black" />
                </div>
                <div className="mb-4">
                    <Label>Equity Dilution</Label>
                    <Input type="text" className="bg-black" />
                </div>
                <div className="mb-4">
                    <Label>Equity Dilution</Label>
                    <Input type="text" className="bg-black" />
                </div>
                <div className="mb-4">
                    <Label>Premoney Valuation</Label>
                    <Input type="text" className="bg-black" />
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Additional Information</h3>
                <div className="mb-4">
                    <Label>Additional Info:</Label>
                    <Textarea rows="4" className="bg-black resize-none"></Textarea>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Note on Startup</h3>
                <div className="mb-4">
                    <Label>Note / Comments:</Label>
                    <Textarea rows="4" className="bg-black resize-none"></Textarea>
                </div>
            </div>
        </>
    )
}

export default Page;

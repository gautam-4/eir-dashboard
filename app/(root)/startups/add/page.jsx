function Page() {
    return (
        <>
            <h2 className="text-2xl font-semibold mb-4">New Startup</h2>
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Startup Information</h3>
                <div className="mb-4">
                    <label htmlFor="startupName" className="block text-sm font-medium mb-1">Startup Name:</label>
                    <input type="text" id="startupName" className="w-full px-3 py-2 border border-gray-800 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="brief" className="block text-sm font-medium mb-1">Brief of Startup:</label>
                    <textarea id="brief" rows="4" className="w-full px-3 py-2 border border-gray-800 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="domain" className="block text-sm font-medium mb-1">Domain of Startup:</label>
                    <input type="text" id="domain" className="w-full px-3 py-2 border border-gray-800 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="leadMentor" className="block text-sm font-medium mb-1">Lead Mentor:</label>
                    <input type="text" id="leadMentor" className="w-full px-3 py-2 border border-gray-800 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="usp" className="block text-sm font-medium mb-1">USP / Core Competence:</label>
                    <textarea id="usp" rows="4" className="w-full px-3 py-2 border border-gray-800 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"></textarea>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">About the Company</h3>
                <div className="mb-4">
                    <label htmlFor="founded" className="block text-sm font-medium mb-1">Founded in:</label>
                    <input type="text" id="founded" className="w-full px-3 py-2 border border-gray-800 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="registeredName" className="block text-sm font-medium mb-1">Registered Name:</label>
                    <input type="text" id="registeredName" className="w-full px-3 py-2 border border-gray-800 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="city" className="block text-sm font-medium mb-1">City / HQ:</label>
                    <input type="text" id="city" className="w-full px-3 py-2 border border-gray-800 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="website" className="block text-sm font-medium mb-1">Website:</label>
                    <input type="text" id="website" className="w-full px-3 py-2 border border-gray-800 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email of Company:</label>
                    <input type="email" id="email" className="w-full px-3 py-2 border border-gray-800 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="contactNo" className="block text-sm font-medium mb-1">Contact No:</label>
                    <input type="tel" id="contactNo" className="w-full px-3 py-2 border border-gray-800 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="gtmStrategy" className="block text-sm font-medium mb-1">GTM Strategy Employed:</label>
                    <textarea id="gtmStrategy" rows="4" className="w-full px-3 py-2 border border-gray-800 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"></textarea>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Financial Details</h3>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Current Traction:</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-800 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Revenues (MRR, ARR):</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-800 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Last FY Gross Revenue:</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-800 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Gross/Net Margin:</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-800 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Monthly Burn Rate:</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-800 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Team Size:</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-800 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Past Investment Rounds:</label>
                    <textarea rows="4" className="w-full px-3 py-2 border border-gray-800 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Runway Before the Next Fundraise:</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-800 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Key Competitors:</label>
                    <textarea rows="4" className="w-full px-3 py-2 border border-gray-800 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Challenges or Risks:</label>
                    <textarea rows="4" className="w-full px-3 py-2 border border-gray-800 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"></textarea>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Investment Ask</h3>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Equity Dilution:</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-800 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Premoney Valuation:</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-800 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Additional Information</h3>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Additional Info:</label>
                    <textarea rows="4" className="w-full px-3 py-2 border border-gray-800 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"></textarea>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Note on Startup</h3>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Note / Comments:</label>
                    <textarea rows="4" className="w-full px-3 py-2 border border-gray-800 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"></textarea>
                </div>
            </div>
        </>
    )
}

export default Page
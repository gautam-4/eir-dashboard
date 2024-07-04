import FormTabs from "@/components/formTabs"

export default function Layout({ children }) {
    return (
        <>
            <h2 className="text-2xl font-semibold mb-8">New Startup</h2>
            <FormTabs />            
            {children}
        </>
    )
}

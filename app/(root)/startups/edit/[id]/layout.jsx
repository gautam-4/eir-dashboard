import EditTabs from "@/components/editTabs"

export default function Layout({ children, params }) {
    const id = params.id;
    return (
        <>
            <h2 className="text-2xl font-semibold mb-8">Edit Startup</h2>
            <EditTabs id={id}/>            
            {children}
        </>
    )
}

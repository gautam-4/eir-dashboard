import Tabs from "@/components/tabs"

export default function layout({ children, params }) {
    const id = params.id;
    return (
        <>
            <div className="flex justify-between">
                <h2 className="text-2xl font-semibold mb-8">Startup Profile</h2>
                <button className="bg-red-600 hover:bg-red-800 opacity-85 ml-2 h-10 px-3 rounded-md">Delete</button>
            </div>
            <Tabs id={id} />
            {children}
        </>
    )
}
import Sidebar from "@/components/sidebar"

export default function layout({ children }) {
    return (
        <>
            <Sidebar/>
            {children}  
        </>
    )
}
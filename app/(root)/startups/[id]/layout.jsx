import Tabs from "@/components/tabs"
export default function layout({ children }) {
    return (
        <>
            <Tabs />
            {children}
        </>
    )
}
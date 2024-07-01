import Tabs from "@/components/tabs"

export default function layout({ children, params }) {
    const id = params.id;
    return (
        <>
            <Tabs id={id}/>
            {children}
        </>
    )
}
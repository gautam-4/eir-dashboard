import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function ContactView({ params }) {
    const id = params.id;
    return (
        <>
            <div className="w-full">
                <div className="flex flex-col-reverse gap-4 sm:justify-between sm:flex-row">
                    <div className="flex gap-9">
                        <div className="border border-white w-fit rounded-md">
                            <Image src="/assets/IAlogo.png" width={160} height={160} alt="" className="rounded-md" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-3xl font-normal">Contact Name</span>
                            <span className="text-gray-200">+916432100111</span>
                            <span className="mt-5 text-md">Mentor, Investor</span>
                        </div>
                    </div>

                    <div>
                        <Link href={`/contacts/${id}/edit`}>
                            <Button className="dark opacity-85">Edit</Button>
                        </Link>

                        <Button className="bg-red-600 hover:bg-red-800 opacity-85 ml-2">Delete</Button>
                    </div>
                </div>

                <div className="mt-8 mb-2 text-gray-200">
                <div>
                    <p>Designation: CTO</p>
                    <p>Organization: Company A</p>
                </div>

                <div className="mt-2">
                    <p>Whatsapp No.: 9879879878</p>
                    <p>LinkedIn URL: @hello_world</p>
                </div>

                </div>

                <div className="mt-10 flex justify-center items-center flex-col sm:block">
                    <p className="font-bold text-xl">Associations</p>
                    <table className="w-56 mt-4 bg-black">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Type</th>
                                <th className="py-2 px-4 border-b">Company</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4">Mentor</td>
                                <td className="py-2 px-4">Company X</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4">Investor</td>
                                <td className="py-2 px-4">Company Y</td>
                            </tr>
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ContactView;

import "@/styles/globals.css";
import Sidebar from "@/components/sidebar"

export const metadata = {
  title: "Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Sidebar/>
        {children}
        </body>
      
    </html>
  );
}

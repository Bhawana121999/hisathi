

import Header from "@/layout/Header";
import Footer from "@/layout/Footer";


export default function RootLayout({
    children,

}: {
    children: React.ReactNode,

}) {
    return (
        <>
            <Header />
            {children}
            <Footer />

        </>
    )
}
"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();

    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Service",
            path: "/service"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blogs",
            path: "/blogs"
        },
        {
            title: "Dashboard",
            path: "/dashboard"
        },
    ]

    const handler = () => {
        router.push("/about")
    }

    if (pathName.includes("dashboard"))
        return (
            <div className=" bg-blue-300 p-5 text-2xl font-bold text-center items-center">
                welcome to Dashboard
            </div>
        )

    return (
        <div className=" container mx-auto">
            <nav className=" bg-red-400 flex justify-between items-center px-10 py-5">
                <a className=" text-3xl font-bold text-white">Next<span className=" pl-3 text-purple-500">Hero</span></a>
                <ul className=" flex justify-center items-center gap-4">

                    {links?.map(link => <Link
                        key={link.path}
                        href={link.path}
                        className={`${pathName === link.path && " text-blue-600 underline"}`}
                    >{link.title}</Link>)}


                    {/* <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={"/about"}>About</Link></li>
                    <li><Link href={"/contact"}>Contact</Link></li>
                    <li><Link href={"/service"}>Service</Link></li> */}

                    <button onClick={handler} className=" text-3xl font-bold text-white p-2 border-2">LogIn</button>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
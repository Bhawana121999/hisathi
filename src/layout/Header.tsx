
// "use client"

// import Link from 'next/link';
// import React, { useEffect, useState } from 'react'
// import { Container, Nav, NavLink, Navbar, Offcanvas } from 'react-bootstrap';
// import logo from '@/assets/Images/logo.webp'
// import Image from 'next/image';
// import { usePathname } from "next/navigation";
// import style from '@/layout/layout.module.scss'
// import { CiSearch } from 'react-icons/ci';
// import { MdOutlineLocationOn } from 'react-icons/md';
// import { VscCallOutgoing } from 'react-icons/vsc';
// import { IoCall, IoSearchOutline } from 'react-icons/io5';
// import { FaCaretDown, FaEnvelope } from 'react-icons/fa';
// import { GoChevronDown } from 'react-icons/go';

// export default function Header() {


//     const [navbartollge, setNavbartollge] = useState(false);
//     const toggleOffCanvas = () => {
//         setNavbartollge((navbartollge) => !navbartollge);
//     };
//     const [scrollClass, setScrollClass] = useState("");
//     useEffect(() => {
//         const handleScroll = () => {
//             let scrolltop: any = document.getElementById("fixedmenu");
//             if (window.scrollY > 100) {
//                 scrolltop.classList.add("fixedmenu");
//                 setScrollClass("fixedmenu");

//             } else {
//                 scrolltop.classList.remove("fixedmenu");

//             }
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     const currentRoute = usePathname();


//     const [isShown, setIsShown] = useState(false);

//     useEffect(() => {
//         console.log(isShown, "asdfasdf");
//     }, [isShown]);



//     return (

//         <div >
//             <div className="container">
//                 <div id="fixedmenu" className={`${`${currentRoute}` === "/" ? "headertop customcontainer" : `${style.fontfamile} ${style.mainmenuchange}`}`}>

//                     <div className="header sticky-top">
//                         <Navbar
//                             onToggle={() => toggleOffCanvas()}
//                             expanded={navbartollge}
//                             expand="lg"
//                             className="navbar_top">
//                             <div className="topleftlogo d-lg-none" >
//                                 <Image src={logo} alt='' className='img-fluid' style={{ width: '30px' }} />
//                             </div>
//                             <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
//                             <Navbar.Offcanvas
//                                 id={`offcanvasNavbar-expand-lg`}
//                                 aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
//                                 placement="end"
//                                 className="navbar_top_offcanvas"
//                             >
//                                 <Offcanvas.Header closeButton>
//                                     <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
//                                         <Link href="/" className="main_logo">
//                                             <Image src={logo} className='main-logo' alt='' />
//                                         </Link>
//                                     </Offcanvas.Title>
//                                 </Offcanvas.Header>
//                                 <Offcanvas.Body>
//                                     <Nav className={style.custom_flex}>
//                                         <div className={style.list}>
//                                             <Link href='/'>
//                                                 <Image src={logo} alt='' className='img-fluid' />
//                                             </Link>
//                                         </div>
//                                         <div className={style.list}>
//                                             <ul>
//                                                 <li className='nav-item dropdown'>
//                                                     <Link href='#'>Wedding Venues</Link>
//                                                 </li>
//                                                 <li className='nav-item dropdown'>
//                                                     <Link href='/about'>About Us</Link>
//                                                 </li>
//                                                 <li className='nav-item dropdown'>
//                                                     <Link href='#' className={style.scalemenu}>Wedding services </Link>
//                                                 </li>
//                                                 <li className="nav-item dropdown">
//                                                     <Link href='#' className={style.scalemenu}>Other Services <FaCaretDown /></Link>
//                                                     <ul className="dropdown-menu">
//                                                         <li><a className="dropdown-item" href="#">Wedding Ideas</a></li>
//                                                         <li><a className="dropdown-item" href="#">Wedding Decorators</a></li>
//                                                         <li><a className="dropdown-item" href="#">Wedding Photographers</a></li>
//                                                         <li><a className="dropdown-item" href="/downloadApp">Matchmaking</a></li>
//                                                     </ul>
//                                                 </li>
//                                             </ul>
//                                         </div>

//                                     </Nav>
//                                 </Offcanvas.Body>
//                             </Navbar.Offcanvas>


//                         </Navbar>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     )
// }



"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Container, Nav, NavLink, Navbar, Offcanvas } from 'react-bootstrap';
import logo from '@/assets/Images/logo.webp'
import Image from 'next/image';
import { usePathname } from "next/navigation";
import style from '@/layout/layout.module.scss'
import { CiSearch } from 'react-icons/ci';
import { MdKeyboardArrowDown, MdOutlineLocationOn } from 'react-icons/md';
import { VscCallOutgoing } from 'react-icons/vsc';
import { IoCall, IoSearchOutline } from 'react-icons/io5';
import { FaCaretDown, FaEnvelope } from 'react-icons/fa';
import { GoChevronDown } from 'react-icons/go';

export default function Header() {

    const [listshow, setListshow] = useState(false)
    const [productshow, setProductshow] = useState(false)

    const currentRoute = usePathname();
    console.log(currentRoute)

    const handleScroll = () => {
        let header: any = document.getElementById("myheader");
        // Get the offset position of the navbar
        var sticky = header.offsetTop;

        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    };



    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <>

            <div className={style.main_menu} id='myheader'>

                <Navbar expand="md" className={style.navbar} >
                    <div className="container">
                        <Navbar.Brand href="/home" className={style.brand}><Image src={logo} alt="logo" className='img-fluid' /></Navbar.Brand>

                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />

                        <Navbar.Offcanvas id={`offcanvasNavbar-expand-md`} aria-labelledby={`offcanvasNavbarLabel-expand-md`} placement="end" >

                            <Offcanvas.Header closeButton>

                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>

                                    <Link href="/home" ><Image src={logo} alt="logo" className='img-fluid' /></Link>
                                </Offcanvas.Title>

                            </Offcanvas.Header>

                            <Offcanvas.Body>

                                <Nav className={style.custom_flex}>
                                    <div className={style.list}>
                                        <Link href='/'>
                                            <Image src={logo} alt='' className='img-fluid' />
                                        </Link>
                                    </div>
                                    <div className={style.list}>
                                        <ul>
                                            <li className='nav-item dropdown'>
                                                <Link href='#'>Wedding Venues</Link>
                                            </li>
                                            <li className='nav-item dropdown'>
                                                <Link href='/about'>About Us</Link>
                                            </li>
                                            <li className='nav-item dropdown'>
                                                <Link href='#' className={style.scalemenu}>Wedding services </Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link href='#' className={style.scalemenu}>Other Services <FaCaretDown /></Link>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Wedding Ideas</a></li>
                                                    <li><a className="dropdown-item" href="#">Wedding Decorators</a></li>
                                                    <li><a className="dropdown-item" href="#">Wedding Photographers</a></li>
                                                    <li><a className="dropdown-item" href="/downloadApp">Matchmaking</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>

                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>

                    </div>
                </Navbar>
            </div>

        </>
    )
}
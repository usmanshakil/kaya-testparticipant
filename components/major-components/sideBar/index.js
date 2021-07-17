import MenuInActive from "../../unique-components/menu-item-inactive";
import MenuActive from "../../unique-components/menu-item-active";
import ButtonWithIcon from "../../unique-components/button-with-icon";
import {useRouter} from 'next/router';
import Link from "next/link";
import {useState} from "react";
import {useSpring, animated} from 'react-spring';
import { Auth } from "aws-amplify";
import Router from "next/router";

const Sidebar = () => {
    const router = useRouter()
    const [toggle, setToggle] = useState(false);
    const menuOpen = useSpring({
        height: toggle ? "100vh" : "0vh",


    });

    const menuList = useSpring({
        fontSize: toggle ? "39px" : "0px",

    });
    const signOut = () => {
        Auth.signOut();
        Router.push("/login");
    };
    return (
        <div>
            <div className="width sm:relative bg-white  md:h-full  justify-between  fixed h-full top-0  h-full flex-col  xl:flex hidden">
                <div className="flex-col items-center fixed justify-between">
                    <div>
                        <div className=" w-40 h-12 pt-8 pl-12 bg-no-repeat ">
                            <Link href="/explore"><a><img src="/static\images\logo.svg"/></a></Link>
                            
                        </div>
                        <div className="mt-16 mr-6">
                            <div className="pb-6">
                                {
                                    router && router.asPath.indexOf("explore") !== -1 ?
                                        <Link href="/explore"><a ><MenuActive btnText="Explore"
                                                                              ImgUrl="/static\images\explore.svg"/></a></Link> :
                                        <Link href="/explore"><a ><MenuInActive btnText="Explore"/></a></Link>
                                }
                            </div>
                            <div className="pb-6">
                                {
                                    router && router.asPath.indexOf("session") !== -1 || router && router.asPath.indexOf("group") !== -1 ?
                                        <Link href="/my-groups"><a ><MenuActive btnText="My Groups"
                                                                                ImgUrl="/static\images\my-groups.svg"/></a></Link> :
                                        <Link href="/my-groups"><a ><MenuInActive btnText="My Groups"/></a></Link>
                                }

                            </div>
                            <div className="pb-6">
                                {
                                    router && router.asPath.indexOf("account") !== -1 ?
                                        <Link href="/account-profile"><a ><MenuActive btnText="Profile"/></a></Link> :
                                        <Link href="/account-profile"><a ><MenuInActive btnText="Profile"/></a></Link>
                                }
                            </div>

                        </div>
                    </div>
                </div>
                <div className="pl-8 pb-6 fixed bottom-0">
                    <ButtonWithIcon signOut={signOut}/>
                </div>
            </div>
            <div className="flex absolute top-0 right-0 left-0 w-full justify-between p-5 xl:hidden bg-mobile-menu-bg items-center">
                <img src="/static\images\logo.svg" className="w-1/3"/>
                <div onClick={()=>setToggle(!toggle)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="40"
                         height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="#000" fill="none"
                         strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <line x1="4" y1="6" x2="20" y2="6"></line>
                        <line x1="4" y1="12" x2="20" y2="12"></line>
                        <line x1="4" y1="18" x2="20" y2="18"></line>
                    </svg>
                </div>
                <animated.div className="absolute inset-0 bg-custom-black z-40 overflow-y-scroll" id="mobile-list"  style={menuOpen}>
                    <div className="flex justify-end p-5">
                        <div onClick={()=>setToggle(!toggle)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="40"
                             height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none"
                             strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                        </div>
                    </div>
                    <animated.ul className="p-5" style={menuList}>
                        <Link href="/explore"><a><li className=" text-white font-bold mb-4">Explore</li></a></Link>
                        <Link href="/my-groups"><a><li className=" text-white font-bold mb-4">My Groups</li></a></Link>
                        <Link href="/account-profile"><a><li className=" text-white font-bold mb-4">Profile</li></a></Link>
                        <li  onClick={() => signOut()} className=" text-white font-bold mb-4">Logout</li>
                    </animated.ul>
                </animated.div>
            </div>
        </div>

    )
}
export default Sidebar
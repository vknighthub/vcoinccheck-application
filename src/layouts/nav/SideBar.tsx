
import React, { useEffect } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Metismenu from './Metismenu'
import Link from 'next/link'

const SideBar = (t: any) => {
    
    useEffect(() => {
        return () => {
            var wrapper: Element | null;
            if (typeof window !== 'undefined') {
                var wrapper = document.querySelector("#main-wrapper");
            }
            function toggleFunc() {
                return wrapper?.classList.toggle("menu-toggle");
            }
            if (typeof window !== 'undefined') {
                var btn = document.querySelector(".nav-control");
                btn?.addEventListener("click", toggleFunc);
            }
        }
    }, [])

    return (
        <div className="deznav">
            <PerfectScrollbar className="deznav-scroll">
                <Metismenu className="metismenu" id="menu">
                    <li className="mm-active">
                        <Link href={"/"}>
                            <i></i>
                            <span className="nav-text"></span>
                        </Link>
                        <ul>
                            <li >
                                <Link href={"/"}></Link>
                            </li>
                        </ul>
                    </li>
                </Metismenu>

                <div className="add-menu-sidebar">
                    <Link href="/submit-project">
                        <svg
                            width={24}
                            height={12}
                            viewBox="0 0 24 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M23.725 5.14889C23.7248 5.14861 23.7245 5.14828 23.7242 5.148L18.8256 0.272997C18.4586 -0.0922062 17.865 -0.0908471 17.4997 0.276184C17.1345 0.643169 17.1359 1.23675 17.5028 1.602L20.7918 4.875H0.9375C0.419719 4.875 0 5.29472 0 5.8125C0 6.33028 0.419719 6.75 0.9375 6.75H20.7917L17.5029 10.023C17.1359 10.3882 17.1345 10.9818 17.4998 11.3488C17.865 11.7159 18.4587 11.7172 18.8256 11.352L23.7242 6.477C23.7245 6.47672 23.7248 6.47639 23.7251 6.47611C24.0923 6.10964 24.0911 5.51414 23.725 5.14889Z"
                                fill="white"
                            />
                        </svg>
                        <span>{t("submitproject")}</span>
                    </Link>
                </div>

                <div className="copyright">
                    <p>© 2022 All Rights Reserved </p>
                </div>
            </PerfectScrollbar>
        </div>
    )
}

export default SideBar

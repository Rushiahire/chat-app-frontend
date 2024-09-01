import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import chatSidebarStyles from '../../../styles/chatSidebar.module.css'
import { deleteCookie } from 'cookies-next';

const ChatSidebarHeader = () => {

    const router = useRouter()
    const handleLogout: any = () => {
        localStorage.removeItem("token")
        deleteCookie("AuthToken");
        router.push('/')
    }
    return (
        <div className={chatSidebarStyles.sidebar_header}>
            <h6 className='my-0'>Welcome</h6>

            <div className={chatSidebarStyles.sidebar_img}>
                <Image
                    src={`https://avatar.iran.liara.run/public/girl`}
                    width={30}
                    height={30}
                    alt='sender avatar'
                    className='rounded-circle nav-link dropdown-toggle'
                    id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                />

                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" onClick={handleLogout}>Logout</a>
                </div>
            </div>
        </div>
    )
}

export default ChatSidebarHeader
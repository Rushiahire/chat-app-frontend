import React from 'react';
import chatSectionHeader from '../../../styles/chatSection.module.css'
import Image from 'next/image';

const ChatSectionHeader = () => {
    return (
        <>
            <div className={`${chatSectionHeader.chat_section_header} d-flex align-items-center ps-3`}>
                <Image
                    src={`https://avatar.iran.liara.run/public/boy`}
                    width={30}
                    height={30}
                    alt='sender avatar'
                    className='rounded-circle'
                />
                <h5 className='ps-3 my-0'>Rushii</h5>
            </div>
        </>
    )
}

export default ChatSectionHeader
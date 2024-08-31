import React from 'react';
import chatSectionStyles from '../../../styles/chatSection.module.css'
import Image from 'next/image';
import ChatSectionHeader from './ChatSectionHeader';

const ChatSection = ({ selectedUser }: any) => {

    const messages: any = [
        {
            sender_msg: "hin",
            receiver_msg: "",
        },
        {
            sender_msg: "",
            receiver_msg: "hello",
        },
        {
            sender_msg: "",
            receiver_msg: "hello",
        },
        {
            sender_msg: "hi",
            receiver_msg: "hello",
        },
        {
            sender_msg: "hi",
            receiver_msg: "hello",
        },
        {
            sender_msg: "hi",
            receiver_msg: "hello",
        },
        {
            sender_msg: "hi",
            receiver_msg: "hello",
        },
        {
            sender_msg: "hi",
            receiver_msg: "hello",
        },
        {
            sender_msg: "hi",
            receiver_msg: "hello",
        },

    ]
    return (
        <div className={`col-lg-8 p-0 border`}>
            <div className="d-flex flex-column vh-100">
                <ChatSectionHeader />
                <div className="flex-grow-1 overflow-auto p-3">
                    {selectedUser ? (
                        <>
                            {
                                messages.map((message: any, index: any) => {
                                    return (
                                        <>
                                            {message.sender_msg !== '' && (
                                                <div className='d-flex justify-content-end'>
                                                    <Image
                                                        src={`https://avatar.iran.liara.run/public/boy`}
                                                        width={30}
                                                        height={30}
                                                        alt='sender avatar'
                                                        className='rounded-circle'
                                                    />
                                                    <div className={` ${chatSectionStyles.chat_msg_receiver} alert alert-primary ms-2`}>{message.sender_msg}</div>
                                                </div>

                                            )}
                                            {message.receiver_msg !== '' && (
                                                <div className='d-flex justify-content-start'>
                                                    <Image
                                                        src={`https://avatar.iran.liara.run/public/girl`}
                                                        width={30}
                                                        height={30}
                                                        alt='sender avatar'
                                                        className='rounded-circle'
                                                    />
                                                    <div className={`${chatSectionStyles.chat_msg_sender} alert alert-dark ms-2`}>{message.receiver_msg}</div>
                                                </div>
                                            )}

                                        </>
                                    )
                                })
                            }
                        </>
                    ) : (
                        <div>Select a user to start chatting</div>
                    )}
                </div>

                {/* {selectedUser && ( */}
                <div className="p-3 border-top">
                    <div className="input-group">
                        <Image
                            src={`https://avatar.iran.liara.run/public/girl`}
                            width={30}
                            height={30}
                            alt='sender avatar'
                            className='rounded-circle'
                        />
                        <input
                            type="text"
                            className="form-control ms-3 rounded-3"
                            placeholder="Type a message..."
                        />
                        <button className="btn btn-primary" type="button">
                            Send
                        </button>
                    </div>
                </div>
                {/* )} */}
            </div>
        </div>
    )
}

export default ChatSection
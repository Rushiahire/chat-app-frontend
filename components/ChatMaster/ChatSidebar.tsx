import React from 'react';
import styles from '../../styles/chat.module.css'

const ChatSidebar = ({ users, selectUser, selectedUser }: any) => {
    return (
        <div className={`col-md-4 p-0 ${styles.sidebar}`}>
            <div className="list-group overflow-auto h-100">
                {users.map((user: any) => (
                    <button
                        key={user.id}
                        type="button"
                        className={`list-group-item list-group-item-action ${selectedUser?.id === user.id ? 'active' : ''}`}
                        onClick={() => selectUser(user)}
                    >
                        {user.name}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ChatSidebar
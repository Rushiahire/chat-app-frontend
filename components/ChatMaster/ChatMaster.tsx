import { useEffect, useState } from 'react';
import ChatSection from './ChatSection/ChatSection';
import ChatSidebar from './ChatSidebar/ChatSidebar';
import useChatMasterHook from '@/hooks/useChatMasterHook';
import getSidebarAPI from '@/services/api/sidebar-api';

const ChatMaster: any = () => {
    // const { sidebarData } = useChatMasterHook()
    // console.log("sidebar", sidebarData)

    const getDataFromApi: any = async () => {
        try {
            const getSidebarData: any = await getSidebarAPI();
            console.log("sidebar data", getSidebarData);

        } catch (error) {
            console.error('Failed to fetch sidebar data:', error);
        }
    }

    // const getDataFromApi: any = async () => {
    //     const getSidebarDataFromApi: any = await getSidebarAPI()
    // }
    useEffect(() => {
        getDataFromApi();
    }, [])
    const users: any = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alice Johnson' },
        { id: 4, name: 'Bob Brown' },
        { id: 5, name: 'Bob Brown' },
        { id: 6, name: 'Bob Brown' },
        { id: 7, name: 'Bob Brown' },
        { id: 8, name: 'Bob Brown' },
        { id: 9, name: 'Bob Brown' },
        { id: 10, name: 'Bob Brown' },
        { id: 11, name: 'Bob Brown' },
        { id: 12, name: 'Bob Brown' },
        { id: 13, name: 'Bob Brown' },
        { id: 14, name: 'Bob Brown' },
        { id: 15, name: 'Bob Brown' },
        { id: 16, name: 'Bob Brown' },
        { id: 17, name: 'Bob Brown' },
        { id: 18, name: 'Bob Brown' },
        { id: 19, name: 'Bob Brown' },
        { id: 20, name: 'Bob Brown' },
        { id: 21, name: 'Bob Brown' },
        { id: 22, name: 'Bob Brown' },
        { id: 23, name: 'Bob Brown' },
        { id: 24, name: 'Bob Brown' },
        // Add more users as needed
    ];
    const [selectedUser, setSelectedUser] = useState<any>(null);

    const selectUser = (user: any) => {
        setSelectedUser(user);
    };
    return (
        <>

            <div className="container ">
                <div className="row vh-100 justify-content-center">
                    <ChatSidebar users={users} selectUser={selectUser} selectedUser={selectedUser} />

                    {/* Chat Section */}
                    <ChatSection selectedUser={selectedUser} />
                </div>
            </div>
        </>
    )
}

export default ChatMaster
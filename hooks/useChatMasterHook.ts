
import React, { useEffect, useState } from 'react';
import getSidebarAPI from '@/services/api/sidebar-api';

const useChatMasterHook: any = () => {

    const [sidebarData, setSidebarData] = useState<any>([])

    const getDataFromApi: any = async () => {
        try {
            const getSidebarData: any = await getSidebarAPI();
            console.log("sidebar data", getSidebarData);
            setSidebarData(getSidebarData)

        } catch (error) {
            console.error('Failed to fetch sidebar data:', error);
        }
    }

    useEffect(() => {
        getDataFromApi();
    }, [])

    return {
        sidebarData
    }
}

export default useChatMasterHook;
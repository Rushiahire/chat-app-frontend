import { useRouter } from 'next/router';
import Login from './auth/Login';


const Layout = ({ children }: any) => {
    const router = useRouter();
    //   useTokenCheck();

    return (
        <>
            {/* {router.pathname === '' ? <Login /> : ''} */}
            {children}
        </>
    );
};

export default Layout;

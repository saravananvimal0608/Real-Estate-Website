import { Outlet } from 'react-router-dom'
import Nav from '../Component/nav';
import Footer from '../Component/footer'



const layout = () => {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer/>
        </>
    )
}

export default layout
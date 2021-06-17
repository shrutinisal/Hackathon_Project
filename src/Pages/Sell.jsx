import React,{useState} from 'react'
import Footer from '../Components/Footer/footer'
import InfoSection from '../Components/InfoSection/info'
import Navbar from '../Components/Navbar/navbar'
import RequestOrder from '../Components/Request/requestorder'


const Sell = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    }
    return (
        <>
        <Navbar toggle={toggle}/>
        {/* <RequestOrder /> */}
        <InfoSection 
            lightBg= "true"
        />
        <Footer />
        </>

    )
}

export default Sell

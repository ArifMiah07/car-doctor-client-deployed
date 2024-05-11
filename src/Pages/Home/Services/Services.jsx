// import { useEffect, useState } from "react";
import useServices from "../../../Hooks/useServices";
import ServicesCard from "./ServicesCard";

const Services = () => {

    //dry => don not repite urself
    const services = useServices();
    // const [services, setServices] = useState([]);

    // useEffect(()=>{
    //     fetch('https://car-doctor-sever-main.vercel.app/services')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setServices(data);
    //     })
    // }, [])
    /**https://cars-doctor-a5cb1.web.app/ 
     * https://cars-doctor-a5cb1.firebaseapp.com/
     * firebase login
     * firebase init
     * firebase deploy
    */

    return (
        <div>
            <div className="text-center">
                <h4 className="text-[#FF3811] text-[20px] font-semibold  ">Service</h4>
                <h1 className="text-[#151515] text-[45px] font-bold  ">Our Service Area</h1>
                <p className="tet-[#737373]  ">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid  md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-8">
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;
import { useEffect, useState } from "react";


const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('https://car-doctor-sever-main.vercel.app/services')
        .then(res => res.json())
        .then(data => {
            // //console.log(data);
            setServices(data);
        })
    }, [])
    return services;
};

export default useServices;
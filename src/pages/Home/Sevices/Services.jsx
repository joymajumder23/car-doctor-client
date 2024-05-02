import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    console.log(services);
    return (
        <div className="mt-24">
            <div className="text-center space-y-5">
                <h1 className="text-xl font-bold text-orange-600">Our Services</h1>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="text-slate-500">The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;
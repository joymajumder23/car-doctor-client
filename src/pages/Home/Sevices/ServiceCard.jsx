import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({service}) => {
    const {img, title, price} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl border">
            <figure className="px-10 pt-10">
                <img src={img} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <div className="flex justify-between items-center">
                <p className="text-xl font-semibold text-orange-600">Price: ${price}</p>
                <button className="btn bg-transparent border-none shadow-none text-orange-600 text-xl"><FaArrowRight></FaArrowRight></button>
                </div>
                
            </div>
        </div>
    );
};

export default ServiceCard;
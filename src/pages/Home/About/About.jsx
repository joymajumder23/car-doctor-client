import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-24">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 relative">
                <img src={person} className="w-3/4 rounded-lg shadow-2xl lg:h-[400px]" />
                <img src={parts} className="absolute w-1/2 rounded-lg shadow-2xl -bottom-14 right-32 border-8 border-white lg:h-[300px]" />
                </div>
                <div className="w-1/2 space-y-5">
                    <h1 className="text-xl font-bold text-orange-600">About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6 text-slate-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="py-6 text-slate-500">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  </p>
                    <button className="btn btn-warning">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
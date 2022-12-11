import React from 'react';
import banner from '../../../assests/banner.png';
import { FaDownload } from "react-icons/fa";
import Resume from '../../../assests/Hriday Haldar Resume (update2).pdf';
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-slate-900">
                <div className="hero-content flex-col lg:flex-row lg:gap-12">
                    <img src={banner} alt='' className="max-w-sm  rounded-lg shadow-2xl" />
                    <div>
                        <h4 className="text-xl font-bold text-white">Hello Everyone!</h4>
                        <h1 className="py-6 text-white text-4xl font-bold">I'm <span className=' text-cyan-400'>Hriday Haldar</span>  </h1>
                        <p className=' text-white'>My name is Hriday Haldar. I am a front-end web developer, React Developer and MERN stack developer</p>
                        <button className="btn btn-primary px-8 mt-3">Resume<a className='pl-2' href={Resume} download><FaDownload></FaDownload></a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
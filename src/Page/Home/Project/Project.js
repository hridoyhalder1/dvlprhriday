import React from 'react';
import { Link } from 'react-router-dom';
import project1 from '../../../assests/project1.png';
import project2 from '../../../assests/Screenshot_2.png';
import project3 from '../../../assests/Screenshot_1.png';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Project = () => {
    return (
        <div id='projects' className='mt-14'>
            <h2 className=' text-4xl font-bold text-cyan-400 text-center mb-11'>Projects</h2>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto justify-items-center gap-7 lg:justify-items-center'>
                {/* card-1 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <PhotoProvider>
                        <PhotoView src={project1}>
                            <figure><img src={project1} alt="project1" /></figure>
                        </PhotoView>
                    </PhotoProvider>

                    <div className="card-body">
                        <h2 className="card-title">
                            Used Goods
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <div>
                            {/* <Link to=''></Link> */}

                            <div className="card-actions ">
                                <div className="badge badge-outline  text-white bg-cyan-500"><a href='https://final-assignment-7d552.web.app/' target='_blank'>View Demo</a></div>
                                <div className="badge badge-outline bg-amber-600 text-white"><a href='https://github.com/hridoyhalder1/compelete-project-12' target='_blank'>GitHub Client</a></div>
                                <div className="badge badge-outline bg-cyan-500 text-white"><a href='https://github.com/hridoyhalder1/complete-projects-sever-side-12' target='_blank'>GitHub Server</a></div>
                            </div>
                        </div>
                        <p>Used Goods is a buying and selling shop where buyers can buy old phones and seller sells products. It's a compelte MERN Stack Projects</p>
                        <div className="card-actions ">
                            <div className="badge badge-outline bg-gradient-to-r from-cyan-500 to-blue-500 text-white">React</div>
                            <div className="badge badge-outline bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">Reat Router </div>
                            <div className="badge badge-outline bg-orange-500 text-white">JavaScript</div>
                            <div className="badge badge-outline bg-red-600 text-white">TailWind CSS</div>
                            <div className="badge badge-outline bg-pink-600 text-white">MongoDB</div>
                            <div className="badge badge-outline bg-yellow-500 text-white">Node.js</div>
                            <div className="badge badge-outline bg-green-500 text-white">Express.js</div>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <PhotoProvider>
                        <PhotoView src={project2}>
                            <figure><img src={project2} alt="project2" /></figure>
                        </PhotoView>
                    </PhotoProvider>
                    <div className="card-body">
                        <h2 className="card-title">
                            News Portal Website
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <div>
                            <div className="card-actions ">
                                <div className="badge badge-outline  text-white bg-cyan-500"><a href='https://friendly-donut-0118f5.netlify.app/index.html' target='_blank'>View Demo</a></div>
                                <div className="badge badge-outline bg-amber-600 text-white"><a href='https://github.com/hridoyhalder1/news-portal-site-6' target='_blank'>GitHub Repo</a></div>

                            </div>
                        </div>
                        <p>It's a new portal website. it's just a practise project. where people can read newspaper </p>
                        <div className="card-actions ">
                            <div className="badge badge-outline bg-gradient-to-r from-cyan-500 to-blue-500 text-white">HTML5</div>
                            <div className="badge badge-outline bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">CSS </div>
                            <div className="badge badge-outline bg-orange-500 text-white">JavaScript</div>
                            <div className="badge badge-outline bg-red-600 text-white">Bootstrap</div>
                            <div className="badge badge-outline bg-pink-600 text-white">Context API</div>

                        </div>
                    </div>
                </div>
                {/* card-3 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <PhotoProvider>
                        <PhotoView src={project3}>
                            <figure><img src={project3} alt="project3" /></figure>
                        </PhotoView>
                    </PhotoProvider>
                    <div className="card-body">
                        <h2 className="card-title">
                            Coding Academy
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <div>

                            <div className="card-actions ">
                                <div className="badge badge-outline  text-white bg-cyan-500"><a href='https://services-site-11.web.app/' target='_blank'>View Demo</a></div>
                                <div className="badge badge-outline bg-amber-600 text-white"><a href='https://github.com/hridoyhalder1/service-review-client-site-11' target='_blank'>GitHub Client</a></div>
                                <div className="badge badge-outline bg-cyan-500 text-white"><a href='https://github.com/hridoyhalder1/service-review-server-side-11' target='_blank'>GitHub Server</a></div>
                            </div>
                        </div>
                        <p>A service  review related website where user can reviews our courses. And also users can learn web development.</p>
                        <div className="card-actions ">
                            <div className="badge badge-outline bg-gradient-to-r from-cyan-500 to-blue-500 text-white">React</div>
                            <div className="badge badge-outline bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">Reat Router </div>
                            <div className="badge badge-outline bg-orange-500 text-white">JavaScript</div>
                            <div className="badge badge-outline bg-red-600 text-white">TailWind CSS</div>
                            <div className="badge badge-outline bg-pink-600 text-white">MongoDB</div>
                            <div className="badge badge-outline bg-yellow-500 text-white">Node.js</div>
                            <div className="badge badge-outline bg-green-500 text-white">Express.js</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
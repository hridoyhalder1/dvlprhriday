import React, { useRef } from 'react';
import emailjs, { sendForm } from '@emailjs/browser';
import './contact.css';
import { toast } from 'react-hot-toast';
// import contact from '../../../assests/contact1.png';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2vc66je', 'template_bm31jsg', form.current, 'ZvQBs8qiux-H5AM1K')
            .then((result) => {
                console.log(result.text);
                console.log('message send');
                toast.success('Submitted Successfully!');
                sendForm.reset();
            }, (error) => {
                console.log(error.text);
            });
    };




    return (
        <div className=' align-center'>
            <div id='contact' className='mt-12 '>
                <h2 className=' text-4xl text-cyan-400 text-center mb-3'>
                    Contact Me</h2>
                <div className="hero min-h-screen bg-slate-900">
                    <div className="hero-content flex-col lg:flex-row-reverse gap-6">
                        <div className="text-center lg:text-left text-white">
                            <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58690.19310623814!2d89.15852982214678!3d23.1651968916381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff108d87ea6d65%3A0x627d034ef93261cf!2z4Kav4Ka24KeL4Kaw!5e0!3m2!1sbn!2sbd!4v1670767317284!5m2!1sbn!2sbd" width="350" height="400" allowFullScreen="" loading="lazy" referrerPolicy='no-referrer-when-downgrade' className=' rounded-xl'></iframe>

                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <form action="" ref={form} onSubmit={sendEmail}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="user_name" placeholder="name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="user_email" placeholder="email" className="input input-bordered" />

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Message</span>
                                        </label>
                                        <textarea name="message" className='input input-bordered' placeholder='your message...' />

                                    </div>
                                    <div className="form-control mt-6">
                                        <input type="submit" value="Send" className='input mt-3 cursor-pointer bg-cyan-400 text-white  ' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Contact;
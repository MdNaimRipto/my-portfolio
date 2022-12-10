import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

const Contacts = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICEID,
            process.env.REACT_APP_TEMPLATEID,
            form.current,
            process.env.REACT_APP_PUBLICKEY
        )
            .then((result) => {
                console.log(result.text);
                swal("Great!", "Your mail has been sent!", "success");
                e.target.reset()
            }, (error) => {
                console.log(error.text);
                swal("Sorry!", "Your mail has not been sent. Please try again!", "error");
            });
    };
    return (
        <section
            data-aos="fade-up"
            id="contact"
            className='my-12 py-12 bg-[#00000042]'>

            <div className='container w-[96%] lg:w-2/6 md:w-3/5 mx-auto text-center text-white'>
                <div>
                    <h2 className=" mb-1 font-sans text-base font-bold tracking-tight text-primary">
                        For any Query Contact me
                    </h2>
                    <h2 className=" mb-6 font-sans text-2xl font-bold tracking-tight">
                        Contact With Me
                    </h2>
                </div>
                <form className="card-body" ref={form} onSubmit={sendEmail}>
                    <div className="form-control mb-4">
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Enter Name"
                            className="input input-bordered" />
                    </div>
                    <div className="form-control mb-4">
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Enter Email"
                            className="input input-bordered" />
                    </div>
                    <textarea
                        name="message"
                        className="textarea textarea-bordered" placeholder="Your Message" />
                    <input
                        type="submit"
                        value="Send"
                        className="btn btn-primary text-white mt-6"
                    />
                </form>
            </div>
        </section>
    );
};

export default Contacts;
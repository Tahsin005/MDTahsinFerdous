import React from 'react';
import Swal from 'sweetalert2'
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "4e7c7bba-bebc-42f8-92dd-2f4af39ba2a5");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: "Success!",
                text: "Message Sent Successfully!",
                icon: "success"
              });
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div className='max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 my-10' id='contact'>

            <div className='grid lg:grid-cols-2 place-items-center'>
                <div>
                    <div className='text-gray-300 my-3' id='about'>
                        <h3 className='text-4xl font-semibold mb-5'>About <span>Me</span></h3>
                        <p className='text-justify leading-7 w-11/12 mx-auto'>I am a 3rd-year Computer Science and Engineering student at City University in Dhaka, Bangladesh. I am passionate about technology and problem-solving, and I enjoy <span>speedcubing</span> in my free time.</p>
                    </div>
                    <div className="flex mt-10 items-center gap-7">
                        <div className="bg-gray-800/40 p-4 rounded-lg">
                            <h3 className="md:text-4xl text-2xl font-semibold text-white">1100
                                <span>+</span>
                            </h3>
                            <p className="text-xs md:text-base"><span>Problems Solved</span></p>
                        </div>
                        <a href='https://codeforces.com/profile/tahsin_ferdous' target='_blank' className="bg-gray-800/40 p-4 rounded-lg">
                            <h3 className="md:text-4xl text-2xl font-semibold text-white">Pupil
                                <span>@</span>
                            </h3>
                            <p className="text-xs md:text-base"><span>CodeForces</span></p>
                        </a>
                        <a href='https://www.codechef.com/users/tahsinferdous3' className="bg-gray-800/40 p-4 rounded-lg">
                            <h3 className="md:text-4xl text-2xl font-semibold text-white">3
                                <span>★</span>
                            </h3>
                            <p className="text-xs md:text-base"><span>Codechef</span></p>
                        </a>
                        <a className="bg-gray-800/40 p-4 rounded-lg">
                            <h3 className="md:text-4xl text-2xl font-semibold text-white">6
                                <span>+</span>
                            </h3>
                            <p className="text-xs md:text-base"><span>Projects</span></p>
                        </a>
                    </div>
                </div>

                <form onSubmit={onSubmit} className='max-w-screen-xl p-5 md:p-12' id='form'>
                    <p className="text-gray-100 font-bold text-xl mb-2">
                        Let´s connect!
                    </p>
                    <input
                        type="text"
                        id="name"
                        placeholder="Your Name ..."
                        name="name"
                        className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
                    />
                    <input
                        type="email"
                        id="email"
                        placeholder="Your Email ..."
                        name="email"
                        className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
                    />npm
                    <textarea
                        name="message"
                        id="textarea"
                        cols="30"
                        rows="4"
                        placeholder="Your Message ..."
                        className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
                    />
                    <button
                        type="submit"
                        className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
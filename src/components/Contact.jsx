import React from 'react';

const Contact = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 my-10' id='contact'>
            
            <div className='grid lg:grid-cols-2 place-items-center'>
                <div>
                    <div className='text-gray-300 my-3'>
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

                <form action="https://getform.io/f/wbrkkvea" method='POST' className='max-w-screen-xl p-5 md:p-12' id='form'>
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
                    />
                    <textarea
                    name="textarea"
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
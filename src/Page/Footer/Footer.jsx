import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
    return (
        <div className='py-[83px]'>
            <div className='container mx-auto'>
                <div className='text-center'>
                    <h3 className='font-pop font-bold text-[40px] text-secondary leading-[54px] '>Admission Is Going on</h3>
                    <p className='font-pop font-normal text-[19px] text-secondary leading-[26px] '>Admission Is Going on</p>
                </div>
                <div className='flex md:justify-between gap-10  flex-wrap text-secondary ml-5 md:mt-[50px]'>
                    <div>
                        <h4 className='font-pop font-bold text-[21px] text-secondary leading-[33px] '>Contact</h4>
                        <div className='flex gap-4 mt-[20px]'>
                            <div>
                                <FaLocationDot />
                            </div>
                            <div>
                                <p>Dhaka, Bangladesh</p>
                            </div>
                        </div>
                        <div className='flex gap-4 mt-[20px]'>
                            <div><IoCallSharp /></div>
                            <div>
                                <p>01324205057</p>
                                <p>01777592658</p>
                            </div>
                        </div>
                        <div className='flex gap-4 mt-[20px] items-center'>
                            <div><IoMdMail /></div>
                            <div>
                                <p>sheikhibrahimsi57@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className='font-pop font-bold text-[21px] text-secondary leading-[33px]'>Quick Links</h4>
                    <ul className='font-pop font-normal text-[16px] mt-[20px] text-secondary leading-[24px]'>
                        <li className='mb-[16px]'><a href="#">Mentors</a></li>
                        <li className='mb-[16px]'><a href="#">Success</a></li>
                        <li className='mb-[16px]'><a href="#"></a>FAQ</li>
                        <li className='mb-[16px]'><a href="#">Blog</a></li>
                        <li className='mb-[16px]'><a href="#">Privacy Policy</a></li>
                    </ul>
                    </div>
                    <div>
                        <h4 className='font-pop font-bold text-[21px] text-secondary leading-[33px] '>Popular Services</h4>
                        <div>                           
                            <ul className='font-pop font-normal text-[16px] mt-[20px] text-secondary leading-[24px]'>
                                <li className='mb-[16px]'><a href="#">Web Development</a></li>
                                <li className='mb-[16px]'><a href="#">Digital Marketing</a></li>
                                <li className='mb-[16px]'><a href="#">Professional Graphic Design</a></li>
                                <li className='mb-[16px]'><a href="#">Cyber Security</a></li>
                                <li className='mb-[16px]'><a href="#">Mern Stack Development</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h4 className='font-pop font-bold text-[21px] text-secondary leading-[33px] '>Others</h4>
                        <div>                           
                            <ul className='font-pop font-normal text-[16px] mt-[20px] text-secondary leading-[24px]'>
                                <li className='mb-[16px]'><a href="#">Web Development</a></li>
                                <li className='mb-[16px]'><a href="#">Digital Marketing</a></li>
                                <li className='mb-[16px]'><a href="#">Professional Graphic Design</a></li>
                                <li className='mb-[16px]'><a href="#">Cyber Security</a></li>
                                <li className='mb-[16px]'><a href="#">Mern Stack Development</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
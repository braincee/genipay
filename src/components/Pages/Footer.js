import React from 'react';
import facebook from '../../assets/facebook.png'
import Linkedin from '../../assets/Linkedin.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import instagram from '../../assets/instagram.png'
import english from '../../assets/english.png'
import google from '../../assets/google.png'
import apple from '../../assets/apple.png'
import arrowdown from '../../assets/arrowdown.png'


const Footer = () => {
  return (
    <div>
        <div className='absolute w-full flex flex-col h-[100px] bg-black gap-[16px] footer-1'>
        <div className='m-[25px] footer'>
            <div className="flex flew-row gap-4 justify-center text-[10px] h-[30px] top-footer">
                <div className='text-white'><p>2022 GenioPay</p></div>
                <div className='text-white'><p>Terms & Conditions</p></div>
                <div className='text-white'><p>Privacy Policy</p></div>
                <div className='text-white'><p>Help</p></div>
            </div>
            <div className='flex flex-row gap-4 items-center justify-center h-[19px] down-footer'>
                <div className="flex items-center justify-center gap-2">
                 <img src={facebook} alt="facebook" />
                 <img src={Linkedin} alt="linkedin" />
                 <img src={twitter} alt="twitter" />
                 <img src={youtube} alt="youtube" />
                 <img src={instagram} alt="instagram" />
                </div>
               <div className="flex gap-2 justify-center items-center">
                 <div><img src={english} alt="uk-logo"/></div>
                 <div className='text-white'>English</div>
                 <div><img src={arrowdown} alt="/arrowdown"/></div>
                </div>
                <div className='flex items-center justify-end'>
                    <div className='w-[50px]'><img src={apple} alt="/apple"/></div>
                    <div className='w-[50px]'><img src={google} alt="/google"/></div>
                </div>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Footer
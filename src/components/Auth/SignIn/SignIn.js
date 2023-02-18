import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import geniopay from '../../../assets/geniopay.png';
import { RiErrorWarningLine } from 'react-icons/ri'
import cards from '../../../assets/cards.png';
import link from '../../../assets/link.png';
import carbon from '../../../assets/carbon.png';
import transfer from '../../../assets/data-transfer.png';
import world from '../../../assets/world.png';
import wallet from '../../../assets/wallet.png';
import clipboard from '../../../assets/clipboard.png';
import close from '../../../assets/close.png';
import signin from '../../../assets/signin.png';
import facebookButton from '../../../assets/facebook-button.png';
import linkedinButton from '../../../assets/linkedin-button.png';
import googleButton from '../../../assets/google-button.png';

const SignIn = () => {
    const [ nav, setNav ] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div>
        <div className='flex flex-row justify-between'>
         <div>
            <div className='m-[24px] sign_in'>
            <div className='flex justify-between items-center mb-[40px]'>
                <img src={geniopay} alt='logo' className='logo'/>
                <div className='text-[#008AA7] top-ring'><RiErrorWarningLine size={20} onClick={handleNav}/></div>
            </div>
            <div className='text-[#0188A5] text-[30px] tracking-tighter mb-[20px] let_get md:text-[20px]'><p>Sign In</p></div>
            <div className='my-2 md:my-1 md:text-[10px]'><p>Access the GenioPay panel using your email and password</p></div>
                <form>
                    <div className='flex flex-col gap-[10px]'>
                     <div className='flex flex-col'>
                      <input
                       type="text"
                       name="email"
                       placeholder="Email address"
                       className='border border-[#0188a5] text-[#2c2c2e] w-[327px] h-[56px] rounded-[8px] p-[24px] md:w-[424px]'
                       />
                       <div className='text-[#0188a5] text-end mt-1'><p>Need Help?</p></div>
                      </div>
                     <div className='flex flex-col'>
                     <input
                       type="text"
                       name="email"
                       placeholder="Passcode"
                      className='border border-[#0188a5] text-[#2c2c2e] w-[327px] h-[56px] rounded-[8px] p-[24px] md:w-[424px]'
                     />
                     <div className='text-[#0188a5] text-end mt-1'><p>Forgot Password?</p></div>
                     </div>
                    </div>
                    <button type="submit" className='h-[40px] w-[327px] bg-[#E0F7FE] rounded-lg mt-[20px] md:w-[424px]'>LOG IN</button>
                </form>
                <div className='flex flex-row text-[10px] tracking-tighter mt-3'><p>Dont have an account?</p><Link to='/signUpEmail'><span className='text-[#0188A5]'>Sign up instaed</span></Link></div>
                <div className="flex flex-col justify-center items-center mt-3">
                    <div className='mt-3'><img  src={signin} alt="signin"/></div>
                    <div className='flex gap-2 mt-3'>
                        <div><button className='hover:scale-110 cursor-pointer'><img src={googleButton} alt="google-button"/></button></div>
                        <div><button className='hover:scale-110 cursor-pointer'><img src={linkedinButton} alt="linkedin-button"/></button></div>
                        <div><button className='hover:scale-110 cursor-pointer'><img src={facebookButton} alt="facebook-button"/></button></div>
                    </div>
                </div>
             </div>
            </div>
            <div>
            <div>
            <div className='text-[#008AA7] m-[100px] down-ring'><RiErrorWarningLine size={20} onClick={handleNav}/></div>
            <div className= {nav ? "fixed top-0 left-0 z-10 gap-[16px] bg-[#E0F7FE] w-full h-full duration-300 ease in md:left-[50%] md:w-[50%] md:h-[90%]" : 
                                "fixed top-0 left-[100%] z-10 gap-[16px] bg-[#E0F7FE] w-full h-full duration-300 ease in"
             }>
            <div className='flex justify-end m-3'><img src={close} alt="close" onClick={handleNav}/></div>
              <div>
                <div className='flex justify-center items-center mt-10'>
                    <img src={cards} alt="cards"/>
                </div>
                <div className='m-[28px] flex flex-col gap-3 justify-center items-center'>
                    <div><p className='text-[20px]'>GenioPay account includes</p></div>
                    <div className='flex flex-row'><img src={wallet} alt="wallet"/><p className='text-[15px] pl-[15px]'>Fiat currency Balance (USD, EUR, GBP)</p></div>
                    <div className='flex flex-row'><img src={carbon} alt="carbon"/><p className='text-[15px] pl-[15px]'>Virtual Accounts in over 70 currencies</p></div>
                    <div className='flex flex-row'><img src={world} alt="world" className="w-5 h-5"/><p className='text-[15px] pl-[15px]'>Send and Recieve payments Worldwide using GenioPay</p></div>
                    <div className='flex flex-row'><img src={link} alt="link"/><p className='text-[15px] pl-[15px]'>Request payments using Paylink</p></div>
                    <div className='flex flex-row'><img src={transfer} alt="data"/><p className='text-[15px] pl-[15px]'>Over 50 Paying/Payout channels</p></div>
                    <div className='flex flex-row'><img src={clipboard} alt="clipboard"/><p className='text-[15px] pl-[15px]'>... and many more</p></div>
                </div>
                </div>
            </div>
        </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn
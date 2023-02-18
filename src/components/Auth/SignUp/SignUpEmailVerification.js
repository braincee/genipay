import React, { useState } from 'react';
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

const SignUpEmailVerification = () => {
    const [ nav, setNav ] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div>
        <div className='flex flex-row justify-between'>
         <div>
            <div className='m-[24px] sign_up_email_verification'>
            <div className='flex justify-between items-center mb-[40px]'>
                <img src={geniopay} alt='logo' className='logo'/>
                <div className='text-[#008AA7] top-ring'><RiErrorWarningLine size={20} onClick={handleNav}/></div>
            </div>
            <div><p>We sent to <span className='text-[#008aa7]'>aaa@gmail.com</span></p></div>
            <div className='text-[#0188A5] text-[30px] tracking-tighter mb-[24px] let_get'><p>Enter the 6-digit code</p></div>
                <form>
                    <div className='flex gap-2'>
                      <input
                       type="number"
                       name="number"
                      className='border text-[#2c2c2e] w-[10px] h-[56px] rounded-[8px] p-[24px]'
                     />
                     <input
                       type="number"
                       name="number"
                      className='border text-[#2c2c2e] w-[10px] h-[56px] rounded-[8px] p-[24px]'
                     />
                     <input
                       type="number"
                       name="number"
                      className='border text-[#2c2c2e] w-[10px] h-[56px] rounded-[8px] p-[24px]'
                     />
                     <input
                       type="number"
                       name="number"
                      className='border text-[#2c2c2e] w-[10px] h-[56px] rounded-[8px] p-[24px]'
                     />
                     <input
                       type="number"
                       name="number"
                      className='border text-[#2c2c2e] w-[10px] h-[56px] rounded-[8px] p-[24px]'
                     />
                     <input
                       type="number"
                       name="number"
                      className='border w-[10px] h-[56px] rounded-[8px] p-[24px]'
                     />
                    </div>
                     <button type="submit" className='h-[40px] w-[327px] bg-[#E0F7FE] rounded-lg mt-[38px]'>VERIFY</button>
                </form>
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

export default SignUpEmailVerification
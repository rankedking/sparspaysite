"use client"
import Image from 'next/image';

interface workdata {
    imgSrc: string;
    heading: string;
    subheading: string;
    hiddenpara: string;
}

const workdata: workdata[] = [
    {
        imgSrc: '/images/Work/icon-one.svg',
        heading: 'User Friendly',
        subheading: 'Embrace simplicity with SparsPay. The simplest way to get paid in your local currency from any international, Fiat or digital currency with SparsPay',
        hiddenpara: '',
    },
    {
        imgSrc: '/images/Work/icon-two.svg',
        heading: 'Reliability',
        subheading: 'Guaranteed 100% transaction success, for any transaction made from fiat to fiat, Crypto to Fiat or Fiat to Crypto currencies in realtime automated scheduled payroll disbursement.',
        hiddenpara: '',
    },
    {
        imgSrc: '/images/Work/icon-three.svg',
        heading: 'Secured Payment',
        subheading: 'Accessibility of funds by everyone from anywhere at anytime is our priority. Securely pay for anything online to any currency with SparsPay in your local currency.',
        hiddenpara: '',
    },

]

const Work = () => {
    return (
        <div>
            <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative'>
                <div className="radial-bgone hidden lg:block"></div>
                <div className='text-center mb-14'>
                    <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>Move Money NOW Faster and Cheaper</h3>
                    <p className='text-bluish md:text-lg font-normal leading-8'>Where is your next Fund movement heading to or coming from? SparsPay got you covered across 100+ countries.</p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32'>

                    {workdata.map((items, i) => (
                        <div className='card-b p-8' key={i}>
                            <div className='work-img-bg rounded-full flex justify-center absolute p-6'>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={44} height={44} />
                            </div>
                            <div>
                                <Image src={'/images/Work/bg-arrow.svg'} alt="arrow-bg" width={85} height={35} />
                            </div>
                            <h3 className='text-2xl text-offwhite font-semibold text-center mt-8'>{items.heading}</h3>
                            <p className='text-base font-normal text-bluish text-center mt-2'>{items.subheading}</p>
                            <span className="text-base font-normal m-0 text-bluish text-center hides">{items.hiddenpara}</span>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Work;

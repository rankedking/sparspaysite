import Image from "next/image";


interface featuresdata {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const featuresdata: featuresdata[] = [
    {
        imgSrc: '/images/Features/featureOne.svg',
        heading: 'Send and receive Money',
        subheading: 'Transfer any volume of payment using SparsPay with CHEAPER fees',
    },
    {
        imgSrc: '/images/Features/featureTwo.svg',
        heading: 'Mass Payment',
        subheading: 'The easiest method pay to multiple currencies from your local currency',
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: 'Integrated Payments',
        subheading: 'SparsPay supports integration to major HR software that manages employees work schedules',
    },
]

const Features = () => {
    return (
        <div className="mx-auto max-w-7xl my-0 md:my-40 pt-36 px-6 relative" id="features-section">
            <div className="radial-bg hidden lg:block"></div>
            <div className="grid lg:grid-cols-2 gap-x-4 gap-y-4">
                {/* Column-1 */}
                <div>
                    <h3 className="feature-font text-lg font-semibold mb-4 text-center md:text-start">FEATURES</h3>
                    <h2 className="text-offwhite text-3xl lg:text-5xl font-semibold leading-snug mb-6 text-center md:text-start">Our Product Solutions</h2>
                    <p className="lg:text-lg font-normal text-bluish text-center md:text-start">Pay and accept international and other digital currencies in your local currency and have it automatically deposited straight into your local bank account</p>
                </div>
                {/* Column-2 */}
                <div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 lg:-mr-56">
                        {featuresdata.map((items, i) => (
                            <div className="bg-blue py-10 pr-12 pl-6 rounded-lg" key={i}>
                                <div className="rounded-full gg h-16 w-16 flex items-center justify-center mb-10">
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={24} height={30} />
                                </div>
                                <h5 className="text-offwhite text-lg font-medium mb-4">{items.heading}</h5>
                                <p className="text-lightblue text-sm font-normal">{items.subheading}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;

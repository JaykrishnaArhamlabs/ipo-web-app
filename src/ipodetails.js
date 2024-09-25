import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HomeNavigator from './components/homenavigator';
import { ChevronLeftIcon, ArrowDownIcon } from '@heroicons/react/24/solid';
import IPOTimeline from './components/timeline';
import JSONData from './IPOdata.json'
import IPODetailsCard from './components/ipodetailscard';


export default function IpoDetails() {
    const params = useParams();
    const [isReadmore, setIsReadmore] = useState(false);

    const IPOData = JSONData.IPOLits.find(el => el.id == params.id);

    if (!IPOData) {
        return <div className='text-center h-screen flex justify-center items-center text-dark text-2xl font-semibold'>404 | this page could not be found</div>;
    }


    const toggleReadMore = () => {
        setIsReadmore(!isReadmore);
    };

    let aboutCompany = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    `;

    return (
        <div className="py-10">
            <div className="mx-4 lg:mx-auto max-w-[800px]">
                <HomeNavigator />
                <div className='flex justify-between items-center mt-5 lg:mt-10 mb-10 lg:mb-5'>
                    <div className='flex items-center gap-2 lg:gap-5'>
                        <Link to="/" className='hidden lg:block py-2 px-2 shadow border rounded-lg font-semibold'>
                            <ChevronLeftIcon className='text-dark size-4' />
                        </Link>
                        <div className="flex gap-2 lg:gap-4 font-semibold">
                            <img className="w-10 h-10 lg:w-12 lg:h-12 mix-blend-darken rounded-full border object-contain" src={IPOData.companylogo} />
                            <div className="flex flex-col justify-center">
                                <span className="text-dark text-left text-base lg:text-xl uppercase">{IPOData.companyName}</span>
                                <span className="text-[10px] lg:text-xs text-borderColor font-normal">{IPOData.companyFullName}</span>
                            </div>
                        </div>
                    </div>
                    <div className='hidden lg:flex items-center gap-2 lg:gap-5'>
                        <a className='relative cursor-pointer'>
                            <img className='w-7 h-7' src="https://static-00.iconduck.com/assets.00/paper-folded-icon-442x512-62catqnw.png" />
                            <ArrowDownIcon className="text-amber-600 absolute top-[10px] left-1 size-3" />
                        </a>
                        <a className='bg-dark py-3 px-10 text-sm rounded-xl text-white'>Apply now</a>
                    </div>
                </div>
                <IPODetailsCard data={IPOData} />
                <IPOTimeline data={IPOData.timelineData} />

                <div className='lg:border lg:px-5 lg:py-4 lg:rounded-xl'>
                    <span className='text-dark text-sm mb-4 block font-semibold'>About Company</span>
                    <p className='hidden lg:block text-xs text-borderColor'>{aboutCompany}</p>
                    <p className="text-xs lg:hidden text-borderColor">
                        {isReadmore ? aboutCompany : `${aboutCompany.slice(0, 200)}`}
                        <a
                            className='text-red-700 text-xs underline lg:text-sm cursor-pointer ml-1'
                            onClick={toggleReadMore}
                        >
                            {isReadmore ? 'Show Less' : 'Read More'}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

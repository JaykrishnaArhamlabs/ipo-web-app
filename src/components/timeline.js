import React from 'react'
import { CheckIcon } from '@heroicons/react/24/solid';


export default function IPOTimeline({ data }) {

    return (
        <div className='mt-8 lg:border mb-5 lg:mb-7 lg:p-4 lg:rounded-xl'>
            <span className='text-dark text-sm mb-4 block font-semibold'>IPO timeline</span>
            < div className="flex flex-col lg:flex-row items-start justify-between">
                {data.map((step, index) => (
                    <div key={index} className="flex items-start lg:items-center lg:text-center lg:justify-center lg:flex-col relative pb-4 lg:pb-0 lg:w-1/6">
                        {/* Line for desktop version */}
                        {index > 0 && (
                            <div
                                className={`hidden lg:block absolute top-4 -left-[45%] w-1/2 h-[2px] ${data[index - 1].completed ? 'bg-green-500' : 'bg-gray-300'}`}
                            ></div>
                        )}

                        {/* Vertical line for mobile version */}
                        {index < data.length - 1 && (
                            <div className="block lg:hidden absolute left-[11px] top-6 h-full w-[2px] bg-gray-300"></div>
                        )}

                        <div className={`w-6 h-6  lg:w-8 lg:h-8 flex items-center justify-center rounded-full ${step.completed ? 'bg-green-500' : 'bg-gray-300'}`}>
                            {step.completed ? (
                                <CheckIcon className="text-white w-3 h-3 lg:w-5 lg:h-5" />
                            ) : (
                                <span className="text-white font-semibold text-sm lg:text-base"></span>
                            )}
                        </div>

                        {/* Line for the next step */}
                        {index < data.length - 1 && (
                            <div
                                className={`hidden lg:block absolute top-4 left-full w-1/2 h-[2px] ${step.completed ? 'bg-green-500' : 'bg-gray-300'}`}
                            ></div>
                        )}

                        {/* Step title and date */}
                        <div className="ml-4 lg:ml-0 lg:mt-2">
                            <p className="text-dark text-xs font-semibold text-wrap">{step.title}</p>
                            <p className="text-xs text-gray-500">{step.date}</p>
                        </div>
                    </div>
                ))
                }
            </div >
        </div>

    )
}

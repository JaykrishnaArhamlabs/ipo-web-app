import React from 'react'

export default function IPODetailsCard({ data }) {

    const getContent = (name, desc) => {
        return (
            <div className='flex flex-col gap-1'>
                <span className='text-[10px] lg:text-xs text-borderColor'>{name}</span>
                <span className='text-dark text-xs font-semibold'>{desc}</span>
            </div>
        );
    };

    return (
        <div className='lg:border lg:px-5 lg:py-4 lg:rounded-xl mb-7'>
            <span className='text-dark text-sm mb-4 block font-semibold'>IPO Details</span>
            <div className='border py-3 px-4 rounded-lg flex flex-col gap-5'>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-2'>
                    {getContent("Issue size", `₹${data.issueSize}`)}
                    {getContent("Price range", `₹${data.priceRange}`)}
                    {getContent("Minimum amount", `₹${data.minInvest}`)}
                    {getContent("Lots size", `${data.shares} shares/${data.lots} lots`)}
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-2'>
                    {getContent("Issue dates", data.companyIssueDate)}
                    {getContent("Listed on", data.listedOn)}
                    {getContent("Listed price", `₹${data.listedPrice}`)}
                    {getContent("Listed gains", `₹${data.listingGains}`)}
                </div>
            </div>
        </div>

    )
}

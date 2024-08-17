
import React, { useEffect, useState } from 'react'
import BookIcon from '../assets/svg/BookIcon'
import GoogleMap from './GoogleMap'

const dummyImgList = [
    {
        img: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "property1",
    },
    {
        img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "property2",
    },
    {
        img: "https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "property3",
    },
    {
        img: "https://images.pexels.com/photos/6758773/pexels-photo-6758773.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "property4",
    },
]

const PropertyDetails = () => {

    const [propertyData, setPropertyData] = useState({})
    const [previewImage, setPreviewImage] = useState({})
    function handlePreviewImage(item) {
        console.log('item', item)
        setPreviewImage(item)
    }
    useEffect(() => {
        setPropertyData({
            propertyName: "Tangled Up In Green",
            description: "Tangled up in Green, a vision of Total Environment, is a luxury plotted development nestled amidst the lush landscapes of Devanahalli. This peaceful hideaway in North Bangalore sits on 115 acres and has exclusive residential plots with a modern design and green living blend. The plots range from 1800 sq. ft. to 7200 sq. ft. You could be fascinated by the botanical wonders found at the Tree Museum or...",
            price: "1.4 Cr",
            pricePerSqFt: "(₹ 6,990 / Sq Ft)",
            plotSize: "1800 to 7,200 Sq ft",
            area: "115 Acres",
            totalUnits: "966",
            projectType: "Plotted Developement",
            status: "Newly Launched",
            ameneties: {
                amenetiesHeading: "30+ Amenities",
                topAmeneties: [
                    {
                        title: "Children's Liberory",
                        icon: "book",
                    },
                    {
                        title: "Pel Park",
                        icon: "book",
                    },
                    {
                        title: "Heated Pool",
                        icon: "book",
                    },
                    {
                        title: "Tree Museum",
                        icon: "book",
                    },
                    {
                        title: "Cycling track",
                        icon: "book",
                    },
                    {
                        title: "Ampitheare",
                        icon: "book",
                    },
                    {
                        title: "Jogging track",
                        icon: "book",
                    },
                    {
                        title: "Basketballvolley",
                        icon: "book",
                    },
                ]
            },
            images: dummyImgList
        })
        setPreviewImage(dummyImgList[0])
    }, [])
    return (
        <div className='property-detail-container'>
            <div className="image-container">
                <div className="preview-image">
                    {
                        previewImage?.img && <img src={previewImage?.img} alt={previewImage.name} />
                    }
                </div>
                <div className="img-list">
                    {
                        propertyData?.images?.map(item => {

                            return (
                                <div className={"img-wrapper " + (item.name === previewImage?.name ? "activeImg" : "")} onClick={() => handlePreviewImage(item)} key={item.name} >
                                    <img className='slide-img' src={item.img} alt={item.name} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="detail-container">
                <div className="detail-header">
                    <div className="title">
                        {propertyData.propertyName}
                    </div>
                    <div className="description">
                        {propertyData.description}
                    </div>
                </div>
                <div className="detail-body">
                    <div className="property-info-container">
                        <div className="property-info">
                            <div className='bold-details'>
                                <div className='detail-box'>
                                    <div className='box-header text-gold'>
                                        {propertyData.price}
                                    </div>
                                    <div className="box-subheader">
                                        {propertyData.pricePerSqFt}
                                    </div>
                                </div>
                                <div className='detail-box'>
                                    <div className='box-header text-gold'>
                                        Plot Size
                                    </div>
                                    <div className="box-subheader">
                                        {propertyData.plotSize}
                                    </div>
                                </div>
                                <div className='detail-box'>
                                    <div className='box-header text-gold'>
                                        Area
                                    </div>
                                    <div className="box-subheader">
                                        {propertyData.area}
                                    </div>
                                </div>
                            </div>
                            <div className='small-details'>
                                <div className='detail-box'>
                                    <div className='box-header'>
                                        Total Units
                                    </div>
                                    <div className="box-subheader">
                                        {propertyData.totalUnits}
                                    </div>
                                </div>
                                <div className='detail-box'>
                                    <div className='box-header'>
                                        Project type
                                    </div>
                                    <div className="box-subheader">
                                        {propertyData.projectType}
                                    </div>
                                </div>
                                <div className='detail-box'>
                                    <div className='box-header'>
                                        Status
                                    </div>
                                    <div className="box-subheader">
                                        {propertyData.status}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ameneties">
                            <div className="title">
                                {propertyData?.ameneties?.amenetiesHeading}
                            </div>
                            <div className="ameneties-list">
                                {
                                    propertyData?.ameneties?.topAmeneties?.map(item => {
                                        return (
                                            <div className='ameneties-item'>
                                                <div className='icon'>
                                                    <BookIcon />
                                                </div>
                                                <div className='ameneties-header'>
                                                    {item.title}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="map-container">
                        <GoogleMap />
                    </div>
                </div>
                <div className="action-container">
                    <div>
                        <button className='btn-alternate'>Chat Now</button>
                        <button className='btn-alternate'>Call Now</button>
                    </div>
                    <div>
                        <button className='btn-normal'>Schedule Site Visit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyDetails
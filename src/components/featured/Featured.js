import React from 'react'

import './Featured.css'

import House1 from '../../assets/house1.jpeg'
import Bed1 from '../../assets/bed1.jpg'
import Bed2 from '../../assets/bed2.jpg'
import Kitchen from '../../assets/kitchen.jpg'
import Bathroom from '../../assets/bath1.jpg'

import House2 from '../../assets/house2.jpg'
import Bed3 from '../../assets/bed3.jpg'
import Bed4 from '../../assets/bed4.jpg'
import Bathroom2 from '../../assets/bath2.jpg'
import LivingRoom from '../../assets/living-room.jpg'

const Featured = () => {
    return (
        <div className='featured'>
            <h1 className='featured-text'>Daftar villa dan rumah</h1>
            <p className='featured-text'>Selected listings by City, State, & Zip based on views.</p>
            <div className='container'>
                <img className='span-3 image-grid-row-2' src={House1} alt='' />
                <img src={Bed1} alt='' />
                <img src={Bed2} alt='' />
                <img src={Kitchen} alt='' />
                <img src={Bathroom} alt='' />
                <div className='span-3 img-details'>
                    <div className='top'>
                        <h2>Teluk Bayur Utama Residence</h2>
                        <p>House for Sale</p>
                        <p className='price'>Rp 352.000.000</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Bedrooms:</p><p>2</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Bathrooms:</p><p>1</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>m2:</p><p>60</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>:</p><p></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='span-2 right-img-details'>
                    <p>Jl.Simpang Teluk Bayur gang 10 ,Malang City- East Java,Indonesia ,65124. Hunian super stategis di kota malang. A beautiful modern day home in the city. Spacious and luxurious home located in Malang.</p>
                    <button className='btn'>View Listing</button>
                </div>
            </div>

        {/* Section section */}
        <div className='container'>
                <img className='order-2' src={Bed3} alt='' />
                <img className='order-3' src={Bed4} alt='' />

                <img className='span-3 image-grid-row-2 order-1' src={House2} alt='' />


                <img className='order-4' src={Bathroom2} alt='' />
                <img className='order-5' src={LivingRoom} alt='' />

                <div className='span-2 right-img-details order-7'>
                    <p>A beautiful modern day home in the city. Spacious and luxurious villa located in Malang. Including and built-in sauna. </p>
                    <button className='btn'>View Listing</button>
                </div>


                <div className='span-3 img-details order-6'>
                    <div className='top'>
                        <h2>Alibaba Village </h2>
                        <p>Villa for Sale</p>
                        <p className='price'>Rp 749.000.000</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Bedrooms:</p><p>4</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Bathrooms:</p><p>2</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>m2</p><p>70 m2</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>:</p><p></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Featured

import React from 'react'

import './Featured.css'

import House1 from '../../assets/house1.jpeg'


import Kitchen from '../../assets/kitchen.jpg'


import House2 from '../../assets/house2.jpg'
import Bed3 from '../../assets/bed3.jpg'
import Bed4 from '../../assets/bed4.jpg'

import LivingRoom from '../../assets/living-room.jpg'

const Featured = () => {
    return (
        <div className='featured'>
            <h1 className='featured-text'>Daftar villa dan rumah</h1>
            <p className='featured-text'>Selected listings by City, State, & Zip based on views.</p>
            <div className='container'>
                <img className='span-3 image-grid-row-2' src={House1} alt='' />
                
                
                <img src={Kitchen} alt='' />
               
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
                    <p>Jl.Simpang Teluk Bayur gang 10 ,Malang City- East Java,Indonesia ,65124. Hunian super stategis di kota malang. home located in Malang.</p>
                    <button className='btn'>View Listing</button>
                </div>
            </div>

        {/* Section section */}
        <div className='container'>
                <img className='order-2' src={Bed3} alt='' />
                <img className='order-3' src={Bed4} alt='' />

                <img className='span-3 image-grid-row-2 order-1' src={House2} alt='' />


                
                <img className='order-5' src={LivingRoom} alt='' />

                <div className='span-2 right-img-details order-7'>
                    <p>fasilitas kolam renang. Kota Batu merupakan tujuan wisata di jawa timur dan lingkungan dan udara yang sejuk di Jawa Timur. Strategis untuk tempat tinggal maupun investasi properti seperti villa. </p>
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
                                <p className='bold'>m2</p><p>53 m2</p>
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

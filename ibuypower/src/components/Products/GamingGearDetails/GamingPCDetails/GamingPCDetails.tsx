import '../productDetails.css'

import React, { useState } from "react";

import img1 from '../../../../assets/gamingGearImages/gaming_laptops_image_details/img1.avif'
import img2 from '../../../../assets/gamingGearImages/gaming_laptops_image_details/img2.avif'
import img3 from '../../../../assets/gamingGearImages/gaming_laptops_image_details/img3.avif'
import img4 from '../../../../assets/gamingGearImages/gaming_laptops_image_details/img4.avif'
import img5 from '../../../../assets/gamingGearImages/gaming_laptops_image_details/img5.avif'
import img6 from '../../../../assets/gamingGearImages/gaming_laptops_image_details/img6.avif'
import windows11Img from '../../../../assets/gamingGearImages/Window_11_img.avif';

export const GamingPCDetails: React.FC = () => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantityByOne = () => {
        if (quantity < 10) {
            setQuantity(state => state + 1);
        }
    }

    const decreaseQuantityByOne = () => {
        if (quantity >= 2) {
            setQuantity(state => state - 1);
        }
    }

    return (
        <div className="gaming-gear-details">
            <div className="gaming-gear-details-images-and-briefInfo-section">
                <div className="gaming-gear-details-images-list">
                    <img src={img1} alt="Chimera NP9373V Gaming Laptop" className='gaming-gear-details-image-item' />
                    <img src={img2} alt="Chimera NP9373V Gaming Laptop" className='gaming-gear-details-image-item' />
                    <img src={img3} alt="Chimera NP9373V Gaming Laptop" className='gaming-gear-details-image-item' />
                    <img src={img4} alt="Chimera NP9373V Gaming Laptop" className='gaming-gear-details-image-item' />
                    <img src={img5} alt="Chimera NP9373V Gaming Laptop" className='gaming-gear-details-image-item' />
                    <img src={img6} alt="Chimera NP9373V Gaming Laptop" className='gaming-gear-details-image-item' />
                </div>

                <div className="gaming-gear-details-briefInfo">
                    <img src={windows11Img} alt="windows11" />

                    <span className='playtime-anytime-span'>Playtime. Anytime.</span>

                    <h2 className="gaming-gear-details-briefInfo-title">Chimera NP9373V Gaming Laptop</h2>

                    <div className="gaming-gear-details-briefInfo-price-section">
                        <span className="gaming-gear-details-briefInfo-price-section-save">Save $200</span>

                        <div className="gaming-gear-details-briefInfo-payments">
                            <div className="gaming-gear-details-briefInfo-price-old-new">
                                <span className="gaming-gear-details-briefInfo-price-new">$2,399</span>
                                <span className="gaming-gear-details-briefInfo-price-old">$2,599</span>
                            </div>

                            <span className="gaming-gear-details-briefInfo-monthly-payment">Starting at <span className='monthly-payment-amount'>$116/mo</span> with Affirm</span>
                        </div>

                        <div className="gaming-gear-details-briefInfo-status-shipment">
                            <span className="gaming-gear-details-briefInfo-status">In Stock</span>
                            <span className="gaming-gear-details-briefInfo-shipment">The estimated ship date is July 2024.</span>
                        </div>

                        <div className="gaming-gear-details-briefInfo-specifications">
                            <h4 className="gaming-gear-details-briefInfo-specifications-title">Specification</h4>

                            <div className="gaming-gear-details-briefInfo-specifications-table">
                                <div className="gaming-gear-details-briefInfo-specifications-table-entry">
                                    <p className="gaming-gear-details-briefInfo-specifications-table-entry-key">Case</p>
                                    <p className="gaming-gear-details-briefInfo-specifications-table-entry-value">iBUYPOWER Trace 7 Mesh Pro</p>
                                </div>
                                <div className="gaming-gear-details-briefInfo-specifications-table-entry">
                                    <p className="gaming-gear-details-briefInfo-specifications-table-entry-key">Processor</p>
                                    <p className="gaming-gear-details-briefInfo-specifications-table-entry-value">Intel® Core™ i9-14900HX Processor (8X P-core + 16X E-core, up to 5.8GHz/36MB L3 Cache)</p>
                                </div>
                                <div className="gaming-gear-details-briefInfo-specifications-table-entry">
                                    <p className="gaming-gear-details-briefInfo-specifications-table-entry-key">Video Card</p>
                                    <p className="gaming-gear-details-briefInfo-specifications-table-entry-value">NVIDIA GeForce RTX 4080 - 12 GB GDDR6 (DLSS 3.5 – AI-Powered Performance) [NB] </p>
                                </div>
                                <div className="gaming-gear-details-briefInfo-specifications-table-entry">
                                    <p className="gaming-gear-details-briefInfo-specifications-table-entry-key">Memory</p>
                                    <p className="gaming-gear-details-briefInfo-specifications-table-entry-value">16GB [16GB x 1] 5600MHz DDR5 SO-DIMM Laptop Memory [Major Brand]</p>
                                </div>
                                <div className="gaming-gear-details-briefInfo-specifications-table-entry">
                                    <p className="gaming-gear-details-briefInfo-specifications-table-entry-key">Primary Storage</p>
                                    <p className="gaming-gear-details-briefInfo-specifications-table-entry-value">1TB WD M.2 NVMe SSD</p>
                                </div>
                                <div className="gaming-gear-details-briefInfo-specifications-table-entry">
                                    <p className="gaming-gear-details-briefInfo-specifications-table-entry-key">Power Supply</p>
                                    <p className="gaming-gear-details-briefInfo-specifications-table-entry-value">600 Watt - High Power 80 PLUS Gold PSU</p>
                                </div>
                                <div className="gaming-gear-details-briefInfo-specifications-table-entry">
                                    <p className="gaming-gear-details-briefInfo-specifications-table-entry-key">Warranty</p>
                                    <p className="gaming-gear-details-briefInfo-specifications-table-entry-value">Standard Warranty Service</p>
                                    <button className="gaming-gear-details-briefInfo-specifications-table-entry-btn">info</button>
                                </div>
                            </div>
                        </div>

                        <div className="gaming-gear-details-briefInfo-quantity">
                            <span className="gaming-gear-details-briefInfo-quantity-text">QTY</span>
                            <i className="fas fa-minus" onClick={decreaseQuantityByOne}></i>
                            <span className="gaming-gear-details-briefInfo-quantity-count">{quantity}</span>
                            <i className="fas fa-plus" onClick={increaseQuantityByOne}></i>
                        </div>

                        <button className="gaming-gear-details-briefInfo-add-to-cart-btn">
                            <span className="gaming-gear-details-briefInfo-add-to-cart-btn-text">Add to Cart</span>
                            <i className="fas fa-long-arrow-alt-right"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="gaming-gear-details-detailed-specification">
                <h3 className="gaming-gear-details-detailed-specification-title">Detailed Specification</h3>

                <div className="gaming-gear-details-briefInfo">
                    <div className="gaming-gear-details-detailed-specifications">
                        <div className="gaming-gear-details-detailed-specifications-table">
                            <div className="gaming-gear-details-detailed-specifications-table-entry">
                                <p className="gaming-gear-details-detailed-specifications-table-entry-key">Operating System</p>
                                <p className="gaming-gear-details-detailed-specifications-table-entry-value">Windows 11 Home <span className='gaming-gear-details-briefInfo-specifications-table-entry-value-special-text'>[(64-bit)]</span></p>
                            </div>
                            <div className="gaming-gear-details-detailed-specifications-table-entry">
                                <p className="gaming-gear-details-detailed-specifications-table-entry-key">Display</p>
                                <p className="gaming-gear-details-detailed-specifications-table-entry-value">Chimera NP9373V, 17.3'' QHD 2560x1440, 240Hz, Wide View Angle, Matte Finish</p>
                            </div>
                            <div className="gaming-gear-details-detailed-specifications-table-entry">
                                <p className="gaming-gear-details-detailed-specifications-table-entry-key">Processor</p>
                                <p className="gaming-gear-details-detailed-specifications-table-entry-value">Intel® Core™ i9-14900HX Processor (8X P-core + 16X E-core, up to 5.8GHz/36MB L3 Cache)</p>
                            </div>
                            <div className="gaming-gear-details-detailed-specifications-table-entry">
                                <p className="gaming-gear-details-detailed-specifications-table-entry-key">Video Card</p>
                                <p className="gaming-gear-details-detailed-specifications-table-entry-value">NVIDIA GeForce RTX 4080 - 12 GB GDDR6 (DLSS 3.5 – AI-Powered Performance) [NB]</p>
                            </div>
                            <div className="gaming-gear-details-detailed-specifications-table-entry">
                                <p className="gaming-gear-details-detailed-specifications-table-entry-key">Memory</p>
                                <p className="gaming-gear-details-detailed-specifications-table-entry-value">32GB [16GB x 2] 5600MHz DDR5 SO-DIMM Laptop Memory</p>
                            </div>
                            <div className="gaming-gear-details-detailed-specifications-table-entry">
                                <p className="gaming-gear-details-detailed-specifications-table-entry-key">Primary Storage</p>
                                <p className="gaming-gear-details-detailed-specifications-table-entry-value">1TB WD Blue SN580 M.2 PCIe Gen 4 NVMe SSD -- Gen 4 Read: 4150MB/s; Write: 4150MB/s, Gen 3 Read: 3539MB/s; Write: 3444MB/s</p>
                            </div>
                            <div className="gaming-gear-details-detailed-specifications-table-entry">
                                <p className="gaming-gear-details-detailed-specifications-table-entry-key">Secondary Storage</p>
                                <p className="gaming-gear-details-detailed-specifications-table-entry-value">None</p>
                            </div>
                            <div className="gaming-gear-details-detailed-specifications-table-entry">
                                <p className="gaming-gear-details-detailed-specifications-table-entry-key">Sound Card</p>
                                <p className="gaming-gear-details-detailed-specifications-table-entry-value">High Definition Onboard Audio Interface</p>
                            </div>
                            <div className="gaming-gear-details-detailed-specifications-table-entry">
                                <p className="gaming-gear-details-detailed-specifications-table-entry-key">Webcam</p>
                                <p className="gaming-gear-details-detailed-specifications-table-entry-value">Built-in 2.0M FHD Digital Web Video Camera</p>
                            </div>
                            <div className="gaming-gear-details-detailed-specifications-table-entry">
                                <p className="gaming-gear-details-detailed-specifications-table-entry-key">Warranty</p>
                                <p className="gaming-gear-details-detailed-specifications-table-entry-value">Standard Warranty Service</p>
                            </div>
                            <div className="gaming-gear-details-detailed-specifications-table-entry">
                                <p className="gaming-gear-details-detailed-specifications-table-entry-key">Rush Service</p>
                                <p className="gaming-gear-details-detailed-specifications-table-entry-value">No Rush - Standard Service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
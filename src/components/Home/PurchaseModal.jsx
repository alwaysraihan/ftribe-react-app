import React, { useState } from "react";
import {
    AiOutlineClose,
    AiFillMinusCircle,
    AiFillPlusCircle,
} from "react-icons/ai";
const PurchaseModal = ({ productData, setProductData }) => {
    const { title } = productData;
    const [quantity, setQuantity] = useState(1);
    const decraseQuantity = () => {
        setQuantity(quantity - 1);
    };
    const increaseQuantiry = () => {
        setQuantity(quantity + 1);
    };
    return (
        <>
            <input type="checkbox" id="purchase-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box w-full m-0 max-w-[808px] h-[540px]">
                    {/* modal body start */}
                    <div class="pt-[24px] pl-[24px] relative  w-full h-full flex gap-[24px]">
                        <div>
                            <div className="w-[368px] h-[368px] bg-[#F5F5F5] rounded-lg"></div>
                            <div className="grid w-full mt-[12px] grid-cols-4 justify-between gap-[12px]">
                                <div className="w-full h-[83px] bg-[#F5F5F5] rounded-lg "></div>
                                <div className="w-full h-[83px] bg-[#F5F5F5] rounded-lg "></div>
                                <div className="w-full h-[83px] bg-[#F5F5F5] rounded-lg "></div>
                                <div className="w-full h-[83px] bg-[#F5F5F5] rounded-lg "></div>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-[20px] leading-[28px] font-[500]">
                                {title.slice(0, 55)}
                            </h1>
                            {/* Rating container  */}
                            <div className=" flex mt-[10px] items-center gap-[15px]">
                                <div class="rating rating-lg rating-half">
                                    <input
                                        type="radio"
                                        name="rating-10"
                                        class="rating-hidden"
                                    />
                                    <input
                                        type="radio"
                                        name="rating-10"
                                        class="bg-[#FFE923] w-[20px] h-[20px] mask mask-star-2 mask-half-1"
                                    />
                                    <input
                                        type="radio"
                                        name="rating-10"
                                        class="bg-[#FFE923] w-[20px] h-[20px] mask mask-star-2 mask-half-2"
                                    />
                                    <input
                                        type="radio"
                                        name="rating-10"
                                        class="bg-[#FFE923] w-[20px] h-[20px] mask mask-star-2 mask-half-1"
                                    />
                                    <input
                                        type="radio"
                                        name="rating-10"
                                        class="bg-[#FFE923] w-[20px] h-[20px] mask mask-star-2 mask-half-2"
                                    />
                                    <input
                                        type="radio"
                                        name="rating-10"
                                        class="bg-[#FFE923] w-[20px] h-[20px] mask mask-star-2 mask-half-1"
                                    />
                                    <input
                                        type="radio"
                                        name="rating-10"
                                        class="bg-[#FFE923] w-[20px] h-[20px] mask mask-star-2 mask-half-2"
                                    />
                                    <input
                                        type="radio"
                                        name="rating-10"
                                        class="bg-[#FFE923] w-[20px] h-[20px] mask mask-star-2 mask-half-1"
                                        checked
                                    />
                                    <input
                                        type="radio"
                                        name="rating-10"
                                        class="bg-[#FFE923] w-[20px] h-[20px] mask mask-star-2 mask-half-2"
                                    />
                                    <input
                                        type="radio"
                                        name="rating-10"
                                        class="bg-[#FFE923] w-[20px] h-[20px] mask mask-star-2 mask-half-1"
                                    />
                                    <input
                                        type="radio"
                                        name="rating-10"
                                        class="bg-[#FFE923] w-[20px] h-[20px] mask mask-star-2 mask-half-2"
                                    />
                                </div>
                                <div>
                                    <p className="text-[#858585] text-[12px] leading-[28px]">
                                        ({productData.rating.count} rates)
                                    </p>
                                </div>
                            </div>
                            <h1 className="text-[20px]  mt-[25px] mb-[15px] font-[500] leading-[28px] ">
                                ${productData.price}
                            </h1>
                            <h1 className="text-[14px]  mb-[6px] font-[400] leading-[24px] ">
                                Code: Apple incehsdajfjsdfsd
                            </h1>
                            <h1 className="text-[14px]  mb-[6px] font-[400] leading-[24px] ">
                                Categopry:{" "}
                                <span className="capitalize text-[#479622]">
                                    {productData.category}
                                </span>
                            </h1>
                            <h1 className="text-[14px]  mb-[16px] font-[400] leading-[24px] ">
                                Keyword:{" "}
                                <span className=" capitalize text-[#479622]">
                                    Apple, Technology, Ipad
                                </span>
                            </h1>
                            <ul>
                                <li className="text-[14px] font-normal leading-[24px] mb-[6px]">
                                    <span className="font-extrabold">•</span>{" "}
                                    Screen: LED-Backlit, 11Inch
                                </li>
                                <li className="text-[14px] font-normal leading-[24px] mb-[6px]">
                                    <span className="font-extrabold">•</span>{" "}
                                    Chipset/ CPU: Apple A12Z Bionic 2.3Ghz
                                </li>
                                <li className="text-[14px] font-normal leading-[24px] mb-[6px]">
                                    <span className="font-extrabold">•</span>{" "}
                                    RAM: 128Gb
                                </li>
                                <li className="text-[14px] font-normal leading-[24px] mb-[10px]">
                                    <span className="font-extrabold">•</span>{" "}
                                    Operating system: iOS 13
                                </li>
                            </ul>
                            {/* qty section  */}

                            <h1 className="text-[14px] font-bold leading-[24px] mb-[6px]">
                                QTY
                            </h1>
                            <div className=" flex  gap-[25px] items-center">
                                <div className="flex gap-[16px]">
                                    <button onClick={decraseQuantity}>
                                        <AiFillMinusCircle className=" text-[ #858585] text-xl cursor-pointer " />
                                    </button>
                                    <div className="py-[8px] px-[16px] rounded-[6px] border-[1px] border-[#D6D6D6]">
                                        <div className="min-w-[28px]">
                                            <span
                                                className="text-2xl text-center  text-[#555555] font-bold"
                                                id="quantity"
                                            >
                                                {quantity}
                                            </span>
                                        </div>
                                    </div>
                                    <button onClick={increaseQuantiry}>
                                        <AiFillPlusCircle className=" text-[ #858585] text-xl cursor-pointer " />
                                    </button>
                                </div>
                                <div>
                                    <span class="btn text-center  rounded-lg btn-primary text-white text-[14px] px-[16px] py-[8px]">
                                        Buy Now
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p
                        onClick={() => setProductData(null)}
                        className="cursor-pointer absolute top-[23px] right-[23px] "
                    >
                        <AiOutlineClose className="text-[15px]" />
                    </p>
                </div>
            </div>
        </>
    );
};

export default PurchaseModal;

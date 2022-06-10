import React from "react";

const Banner = () => {
    return (
        <>
            <div className="lg:px-[20px] xl:px-[80px] flex h-[564px] justify-between gap-10 mt-[80px]">
                {/* banner left 1st conatiner  */}
                <div className="bg-[#F5F5F5] rounded-lg relative w-[270px] h-full text-center py-[48px]">
                    <div className="mb-auto">
                        <p className="text-sm font-semibold">Asus</p>
                        <h3 className="text-xl my-[8px] font-semibold">
                            Supper Sale
                        </h3>
                        <h3 className="text-xl font-semibold">Laptop Gaming</h3>
                    </div>
                    <div className="absolute left-0 right-0  bottom-[48px]">
                        <span class="btn text-center  rounded-lg btn-primary text-white text-[14px] px-[16px] py-[8px]">
                            Order Now
                        </span>
                    </div>
                </div>
                {/* banner left 2nd conatiner  */}
                <div className="  w-full h-[100%] ">
                    {/* 1st container  */}
                    <div className="pt-[107px] pl-[48px] pb-[48px] bg-[#F5F5F5] rounded-lg">
                        <p className="text-sm font-semibold">New Product</p>
                        <h1 className="text-[34px]  leading-[42px] my-[16px]">
                            HAND WATCH
                        </h1>
                        <h1 className="text-[34px]  leading-[42px]">ROSSINI</h1>
                        <div className="mt-[32px]">
                            <span class="btn text-center  rounded-lg btn-primary text-white text-[14px] px-[16px] py-[8px]">
                                Buy Now
                            </span>
                        </div>
                    </div>
                    {/* 2nd container  */}
                    <div className="grid mt-[24px] grid-cols-3 gap-[24px]">
                        <div className="h-[172px] bg-[#F5F5F5] rounded-lg py-[47px] pl-[24px]">
                            <p className="text-[12px] leading-[18px] font-normal">
                                Wine
                            </p>
                            <h1 className="text-[16px]  mt-[8px] mb-[4px] leading-[24px] font-medium">
                                Drunkenness
                            </h1>
                            <h1 className="text-[16px] leading-[24px] font-medium">
                                Deep Flavor
                            </h1>
                        </div>
                        <div className="h-[172px] bg-[#F5F5F5] rounded-lg py-[47px] pl-[24px]">
                            <p className="text-[12px] leading-[18px] font-normal">
                                Cosmetic
                            </p>
                            <h1 className="text-[16px]  mt-[8px] mb-[4px] leading-[24px] font-medium">
                                MAXIMI
                            </h1>
                            <h1 className="text-[16px] leading-[24px] font-medium">
                                Sale 50%
                            </h1>
                        </div>
                        <div className="h-[172px] bg-[#F5F5F5] rounded-lg py-[47px] pl-[24px]">
                            <p className="text-[12px] leading-[18px] font-normal">
                                Sunglasses
                            </p>
                            <h1 className="text-[16px] mt-[8px] mb-[4px] leading-[24px] font-medium">
                                Authentic
                            </h1>
                            <h1 className="text-[16px] leading-[24px] font-medium">
                                Sale off 50%
                            </h1>
                        </div>
                    </div>
                </div>
                {/* banner left 3rd conatiner  */}
                <div className=" w-[368px] h-[100%]">
                    {/* first part  */}
                    <div className="h-[172px] w-[368px] bg-[#F5F5F5] rounded-lg py-[47px] pl-[24px]">
                        <p className="text-[12px] leading-[18px] font-normal">
                            Big deal
                        </p>
                        <h1 className="text-[16px] mt-[8px] mb-[4px] leading-[24px] font-medium">
                            Black Friday
                        </h1>
                        <h1 className="text-[16px] leading-[24px] font-medium">
                            Buy 1 Get 1
                        </h1>
                    </div>
                    {/* second part  */}
                    <div className="h-[172px] w-[368px] mt-[24px] bg-[#F5F5F5] rounded-lg py-[47px] pl-[24px]">
                        <p className="text-[12px] leading-[18px] font-normal">
                            Fujiwa
                        </p>
                        <h1 className="text-[16px] mt-[8px] mb-[4px] leading-[24px] font-medium">
                            ION Alkaline
                        </h1>
                        <h1 className="text-[16px] leading-[24px] font-medium">
                            Micronutrient <br />
                            Supplements
                        </h1>
                    </div>
                    {/* 3rd part  */}
                    <div className="grid mt-[24px] w-[368px] grid-cols-2 gap-[24px]">
                        <div className="h-[172px] bg-[#F5F5F5] rounded-lg py-[47px] pl-[24px]">
                            <p className="text-[12px] leading-[18px] font-normal">
                                Hand Wash
                            </p>
                            <h1 className="text-[16px]  mt-[8px] mb-[4px] leading-[24px] font-medium">
                                Clean hands
                            </h1>
                            <h1 className="text-[16px] leading-[24px] font-medium">
                                Clean bacteria
                            </h1>
                        </div>
                        <div className="h-[172px] bg-[#F5F5F5] rounded-lg py-[47px] pl-[24px]">
                            <p className="text-[12px] leading-[18px] font-normal">
                                Fashion
                            </p>
                            <h1 className="text-[16px] mt-[8px] mb-[4px] leading-[24px] font-medium">
                                Nice bag
                            </h1>
                            <h1 className="text-[16px] leading-[24px] font-medium">
                                Nice style
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;

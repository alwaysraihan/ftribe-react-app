import React from "react";

import {
    BottleImg,
    Cosmatics,
    GlassImg,
    RealEstaeImg,
    TechnologyImg,
    WatchImg,
} from "../../assets/icons";
import CategoriesProducts from "./CategoriesProducts";

const ShopCategories = () => {
    return (
        <>
            <div className="px-[12%]  mt-[82px] ">
                <h1 className=" text-[20px] mb-[34px] left-[28px] font-semibold">
                    Shop By Categories
                </h1>
                <div className="grid grid-cols-3 lg:grid-cols-6 justify-between items-center">
                    <div className="w-[172px] h-[172px]  border-[1px] border-[#F5F5F5] rounded-lg">
                        <div className="flex justify-center">
                            <div>
                                <img
                                    src={RealEstaeImg}
                                    alt=""
                                    className="mt-[26px] mx-auto mb-[16px]"
                                />
                                <h1 className="text-[18px] leading-[28px] font-[600]">
                                    Real Estate
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="w-[172px] h-[172px] border-[1px] border-[#F5F5F5] rounded-lg">
                        <div className="flex justify-center">
                            <div>
                                <img
                                    src={TechnologyImg}
                                    alt=""
                                    className="mt-[26px] mx-auto mb-[16px]"
                                />
                                <h1 className="text-[18px] leading-[28px] font-[600]">
                                    Real Estate
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="w-[172px] h-[172px] border-[1px] border-[#F5F5F5] rounded-lg">
                        <div className="flex justify-center">
                            <div>
                                <img
                                    src={WatchImg}
                                    alt=""
                                    className="mt-[26px] mx-auto mb-[16px]"
                                />
                                <h1 className="text-[18px] leading-[28px] font-[600]">
                                    Real Estate
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="w-[172px] h-[172px] border-[1px] border-[#F5F5F5] rounded-lg">
                        <div className="flex justify-center">
                            <div>
                                <img
                                    src={GlassImg}
                                    alt=""
                                    className="mt-[26px] mx-auto mb-[16px]"
                                />
                                <h1 className="text-[18px] leading-[28px] font-[600]">
                                    Real Estate
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="w-[172px] h-[172px] border-[1px] border-[#F5F5F5] rounded-lg">
                        <div className="flex justify-center">
                            <div>
                                <img
                                    src={Cosmatics}
                                    alt=""
                                    className="mt-[26px] mx-auto mb-[16px]"
                                />
                                <h1 className="text-[18px] leading-[28px] font-[600]">
                                    Real Estate
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="w-[172px] h-[172px] border-[1px] border-[#F5F5F5] rounded-lg">
                        <div className="flex justify-center">
                            <div>
                                <img
                                    src={BottleImg}
                                    alt=""
                                    className="mt-[26px] mx-auto mb-[16px]"
                                />
                                <h1 className="text-[18px] leading-[28px] font-[600]">
                                    Real Estate
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <CategoriesProducts />
            </div>
        </>
    );
};

export default ShopCategories;

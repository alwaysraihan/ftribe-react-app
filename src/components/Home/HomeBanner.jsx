import React from "react";

const Banner = () => {
    return (
        <>
            <div className="px-[80px] flex h-[564px] justify-between gap-10">
                {/* banner left 1st conatiner  */}
                <div className="bg-[#F5F5F5] rounded-lg relative w-[270px] h-full text-center py-[48px]">
                    <div className="mb-auto">
                        <h1 className="text-sm font-semibold">Asus</h1>
                        <h1 className="text-xl my-[8px] font-semibold">
                            Supper Sale
                        </h1>
                        <h1 className="text-xl font-semibold">Laptop Gaming</h1>
                    </div>
                    <div className="absolute left-0 right-0  bottom-[48px]">
                        <span class="btn text-center  rounded-lg btn-primary text-white text-[14px] px-[16px] py-[8px]">
                            Order Now
                        </span>
                    </div>
                </div>
                {/* banner left 2nd conatiner  */}
                <div className=" bg-red-500   w-full h-[100%]">
                    <h1>Yay I am secaond</h1>
                </div>
                {/* banner left 3rd conatiner  */}
                <div className="bg-pink-600 w-[368px] h-[100%]">
                    <h1>Yay I am third</h1>
                </div>
            </div>
        </>
    );
};

export default Banner;

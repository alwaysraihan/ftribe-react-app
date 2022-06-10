const TopDealNewProduct = () => {
    return (
        <div className="grid grid-cols-2 lg:px-[5%] xl:px-[8%] 2xl:px-p[12%] my-[80px] gap-[24px] w-full ">
            <div className="w-full bg-[#F5F5F5] rounded-lg pt-[109px] pl-[48px] h-[317px]">
                <p className="text-[12px] last-[24px] text-[#555555]  font-semibold">
                    Hot Deal
                </p>
                <h1 className="text-[20px]  font-[600] leading-[28px] my-[8px]">
                    TOURS SAFE
                </h1>
                <h1 className="text-[20px]  font-[600] leading-[28px]">
                    RELAX HIGHTLY
                </h1>
                <div className="mt-[24px]">
                    <span class="btn text-center  rounded-lg btn-primary text-white text-[14px] px-[16px] py-[8px]">
                        Order Now
                    </span>
                </div>
            </div>
            <div className="w-full bg-[#F5F5F5] rounded-lg pt-[109px] pl-[48px] h-[317px]">
                <p className="text-[12px] last-[24px] text-[#555555]  font-semibold">
                    New Product
                </p>
                <h1 className="text-[20px]  font-[600] leading-[28px] my-[8px]">
                    EXPERIENCE TECHNOLOGY
                </h1>
                <h1 className="text-[20px]  font-[600] leading-[28px]">
                    RELAX HIGHTLY
                </h1>
                <div className="mt-[24px]">
                    <span class="btn text-center  rounded-lg btn-primary text-white text-[14px] px-[16px] py-[8px]">
                        Order Now
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TopDealNewProduct;

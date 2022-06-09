import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import bgImg from "../../assets/Images/Image.png";
const CategoriesProducts = () => {
    const { isLoading, isError, data, error, refetch } = useQuery(
        "productData",
        async () => {
            const { data } = await axios("https://fakestoreapi.com/products");
            return data;
        }
    );

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (isError) {
        return <h1>{error}</h1>;
    }
    const techProducts = data.filter(
        (product) => product.category === "electronics"
    );
    console.log(techProducts);
    return (
        <div>
            <div className="grid grid-cols-3 lg:grid-cols-6 mt-[24px] justify-between">
                {techProducts.reverse().map((product) => (
                    <div key={product.id}>
                        <div className="w-[172px] h-[172px]">
                            <img
                                src={bgImg}
                                alt="product"
                                className="w-[172px] h-[172px]"
                            />
                        </div>
                        <div className="w-[172px] mt-[8px]">
                            <h1 className="text-[14px] leading-[24px] font-normal">
                                {product.title.slice(0, 45)}....
                            </h1>
                            <h1 className="text-[18px] mt-[4px] font-[600] leading-[28px] ">
                                ${product.price}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoriesProducts;

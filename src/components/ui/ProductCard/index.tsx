import React, {ReactNode} from "react"
import { PrimaryButton } from "../Buttons";
type ProductCardProps = {
    Image: ReactNode;
    newProduct: boolean;
    title: string;
    description: string;
    onClick: () => void;
    reverse?: boolean;
    productType: string;
  }

export const ProductCard = ({Image, newProduct, title, description, onClick, reverse, productType} : ProductCardProps) => {

    return(
      <div className={`my-28 max-w-5xl max-lg:px-10 flex max-lg:flex-col max-lg:gap-10 text-center justify-center items-center relative lg:grid lg:grid-cols-2 mx-auto`}>
        <div className={`w-full lg:max-w-[540px] ${reverse ? "col-start-2 row-start-1" : "col-start-1 row-start-1"}`}>
          {Image}
        </div>
        <div className={`flex flex-col gap-8 text-center justify-center items-center lg:text-left lg:items-start ${reverse ? "col-start-1 row-start-1" : "lg:ml-16 col-start-2 row-start-1"}`}>
          {newProduct ?  <span className='text-over-line tracking-[10px] uppercase text-peru font-thin'>new product</span> : null}
          <h1>
            {title} <br />
            {productType}
          </h1>
          <p className='opacity-50 max-w-[80%]'>{description}</p>
          <PrimaryButton text='see product' onClick={onClick}/>
        </div>
      </div>
    )
}
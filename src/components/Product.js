import React from "react";
import './product.css'
import '../assets/image-product-1.jpg'
const Product = ()=>{

    const [mainImage, setMainImage] = React.useState("./assets/image-product-1.jpg")

    const handleImgClick = (id)=>{
        setMainImage(()=>{
            return `./assets/image-product-${id}.jpg`
        })
    }

    const [count , setCount] = React.useState(0)

    const handleCountSub = ()=>{
        setCount((prevState)=>{
          return prevState <=0? 0 : prevState-1;
        })
    }
    const handleCountAdd = ()=>{
        setCount((prevState)=>{
            return prevState+1;
        })
    }

    return(
        <div className="Product">
            <div className="img-container" >
                <img src={mainImage}alt="productimg" id="product-img"></img>

                <div className="small-img-row">
                    <div className="small-img-col" onMouseOver={()=> handleImgClick(2)}>
                        <img src="./assets/image-product-2.jpg" alt="product-smallimg"></img>
                        <div className="after"></div>
                    </div>
                    <div className="small-img-col" onMouseOver={()=> handleImgClick(3)}>
                        <img src="./assets/image-product-3.jpg" alt="product-smallimg"></img>
                        <div className="after"></div>
                    </div>
                    <div className="small-img-col" onMouseOver={()=> handleImgClick(4)}>
                        <img src="./assets/image-product-4.jpg" alt="product-smallimg"></img>
                        <div className="after"></div>
                    </div>
                    <div className="small-img-col" onMouseOver={()=> handleImgClick(1)}>
                        <img src="./assets/image-product-1.jpg" alt="product-smallimg"></img>
                        <div className="after"></div>
                    </div>
                </div>


            </div>

            <div className="product-details">
                <p className="brand-header">Sneaker Company</p>
                <h1 className="product-title">Fall Limited Edition Sneakers</h1>
                <p className="product-description">These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they'll withstand everything the weather can offer.
                </p>
                <p className="product-price"> 
                    $125.00
                    <span className="discount">50%</span>
                </p>
                <p className="retail-price">$250.00</p>

                <div className="btn-container">
                    <div className="btn-group">
                        <button className="btn " onClick={handleCountSub}><img src="./assets/icon-minus.svg" alt="minus-icon"/></button>
                        <input type="text" value={count}></input>
                        <button className="btn"  onClick={handleCountAdd}><img src="./assets/icon-plus.svg" alt="plus-icon"/></button>
                    </div>
                    
                    <button className="cart-btn">
                        <img src="./assets/icon-cart.svg" alt="cart-img"/> 
                        <p>Add to cart</p>
                    </button>
                </div>
            </div>

        </div>

    )
}

export default Product
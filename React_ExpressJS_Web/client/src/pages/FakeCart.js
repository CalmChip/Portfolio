import React from "react";

const fakeCart = () => {
    return(
        <div class="container mt-5">
                      <a class="btn btn-default bg-dark text-white" href="/" style={{marginBottom: "30px"}}>Home</a>
          <div class="col-sm-4">
            <h5>Name of the product</h5>
            <div class="fakeimg"></div>
            <div>
              <h6>Price of the Product</h6>
              <p>Description of the product</p>
              <button class="btn btn-default bg-dark text-white" style={{marginBottom: "20px"}}>Add to Cart</button>
            </div>
            <h5>Name of the product</h5>
            <div class="fakeimg"></div>
            <div>
              <h6>Price of the Product</h6>
              <p>Description of the product</p>
              <button class="btn btn-default bg-dark text-white" style={{marginBottom: "20px"}}>Add to Cart</button>
            </div>
            <h5>Name of the product</h5>
            <div class="fakeimg"></div>
            <div>
              <h6>Price of the Product</h6>
              <p>Description of the product</p>
            <button class="btn btn-default bg-dark text-white" style={{marginBottom: "20px"}}>Add to Cart</button>
            </div>
          </div>
    </div>
    )
}

export default fakeCart;
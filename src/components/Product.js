import React, { Component } from 'react';
import './Product.css'
import imgURL from '../assets/product_image_placeholder.png'

class Product extends Component {
    state = {
        products1: [],
        products2: [],
        count: 0,
    }
   
   async componentDidMount() {
    const pResponse = await fetch('http://localhost:3000/products');
    const products= await pResponse.json();
    
    const Iphone = [];
    const Huawei = [];

    products.forEach(phone => {
        if(phone.category === 'iPhone') {
            Iphone.push(phone);
            
        }else {
            Huawei.push(phone);
        }
    });

    this.setState({
        products1: Iphone,
        products2: Huawei,
    })

   }

    handleaddToCart = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };

    render() {
        return (
            <section>
                <section>
                    <p>购物车数量：<input id="cart" type="text" value={this.state.count} /></p>
                </section>
                <section >
                    <h3>{this.state.products1.map(pr => pr.category)}</h3>
                    <p> {this.state.products1.map(pr => pr.name)}</p>
                    <img  src={imgURL} alt="products" />
                    <img  src={imgURL} alt="products" />
                    <img  src={imgURL} alt="products" />
                    <p>{this.state.products1.map(pr => pr.price)}</p>
                    <p>{this.state.products1.name}</p>
                    <p>{this.state.products1.price}</p>
                    <button onClick={this.handleaddToCart}>add to cart</button>
                </section>
                <section>
                    <h3>{this.state.products2.map(pr => pr.category)}</h3>
                    <p> {this.state.products2.map(pr => pr.name)}</p>
                    <img  src={imgURL} alt="products" />
                    <img  src={imgURL} alt="products" />
                    <img  src={imgURL} alt="products" />
                    <p>{this.state.products2.map(pr => pr.price)}</p>
                    <p>{this.state.products2.name}</p>
                    <p>{this.state.products2.price}</p>
                    <button onClick={this.handleaddToCart}>add to cart</button>
                </section>
            </section>
        );
    }
}

export default Product;
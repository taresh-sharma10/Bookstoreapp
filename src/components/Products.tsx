import React from 'react';

interface ProductsProps {

}

interface Product {
    id: number;
    name: string;
    price: number;
    year: number;

}

interface ProductsState {

    products: Product[];

}
export class Products extends React.Component<ProductsProps, ProductsState> {

    constructor(props: ProductsProps) {
        super(props);
            this.state = {
                products: []
            }
    }

    // keyword
    // called by react
    // called after render method
    // view loaded

    componentDidMount() {

        console.log('products component did mount');

        console.log('before fetch');
        fetch('http://localhost:7777/products')
        .then (response => {   //callback,called after getting result
            console.log('response is', response);
            return response.json(); // convert the response to java
        })
        .then ( products => {
            console.log('products' , products);
            this.setState({
                products: products
            })

        })
            console.log('after fetch');
    }

    render() {
        console.log('products render');
        return (
            <div>
                <h2>Product List {this.state.products.length}</h2>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Year</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map (product => (
                                <tr key={product.id}>
                                <td>
                                    <img src="/assets/bookslogo.jpg" 
                                    width="64"  
                                    height="64" 
                                    />
                                    
                                   
                                    
                                </td>
                                <td>{product.name}</td>
                                                 <td>{product.price}</td>
                                                 <td>{product.year}</td>
                                                 <td>
                                                     <button>edit</button>
                                                 </td>
                                              </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }

}
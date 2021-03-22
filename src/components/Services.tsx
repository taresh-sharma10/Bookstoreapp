import React from 'react';

export class Services extends React.Component {

    render() {
        return (

            <div>

                <h2>Our Services</h2>
                <div className="flex two">
                
                <ul>
                <h3>BookStore Registeration</h3>
                <h3>Loyalty Cards</h3>
                <h3>Purchase Books Online</h3>
                <h3>Login and Subscribe</h3>
                <h3>Notification about New Arrivals</h3>
                <h3>Rentals</h3>
                <h3>Gift Cards</h3>
                <h3>EBooks</h3>
                <h3>Computers and Softwares</h3>
                </ul>
                
                <div>
                    
                
                <img src="/assets/bookstoreloyalty.png" width="600" height="300"></img>
                <img src="/assets/rent.png" width="600" height="300"></img>
            </div>
            </div>
            </div>
        );
    }
}
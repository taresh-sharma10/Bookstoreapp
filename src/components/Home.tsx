
import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export class Home extends React.Component {

    render() {
        return (
            <div className="flex two">
                <div>
                    <h2>Welcome to BookStore</h2>
                    <p>Our stories
                    Bookstore gives you an online shopping cart and point-of-sale system for your school's bookstore. Online shoppers can browse and purchase items via the shopping interface or via Buy Now links for individual items embedded on other sites. In-person sales can be handled using Point of Sale, which works with USB barcode scanners and credit card readers. Students who want to pay later can charge their Bookstore orders to their accounts. On the back end, you can manage inventory, process online orders, and run sales reports. Additionally, all Bookstore transactions are automatically fed into your General Ledger.
                </p>

                </div>
                <div>
                    <img src="/assets/large.jpg" width="600" height="350"></img>
                </div>
                <Carousel>
                    <div>
                        <img src="/assets/book1.jpg" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="/assets/book2.jpg" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="/assets/book3.jpg" />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src="/assets/book4.jpg" />
                        <p className="legend">Legend 4</p>
                    </div>

                </Carousel>
                <div>
                    <h2>BookStore Offerings</h2>
                    <h3>Fiction</h3>
                    Action and adventure,
                    Alternate history,
                    Anthology,
                    Chick lit,
                    Children's literature,
                    Comic book,
                    Coming-of-age,
                    Crime,
                    Drama,
                    Fairytale,
                    Fantasy,
                    Graphic novel,
                    Historical fiction,
                    Horror,
                    Mystery,
                    Paranormal romance,
                    Picture book,
                    Poetry,
                    Political thriller,
                    Romance,
                    Satire,
                    Science fiction,
                    Short story,
                    Suspense,
                    Thriller,
                    Young adult
<h3>Non Fiction</h3>
                    Art
                    Autobiography,
                    Biography,
                    Book review,
                    Cookbook,
                    Diary,
                    Dictionary,
                    Encyclopedia,
                    Guide,
                    Health,
                    History,
                    Journal,
                    Math,
                    Memoir,
                    Prayer,
                    Religion, spirituality, and new age,
                    Textbook,
                    Review,
                    Science,
                    Self help,
                    Travel,
                    True crime
</div>

            </div>



        );


    }
}
// components/Contact.tsx

import React from 'react';
import {Address} from './Address';

interface ContactProps {

}
interface City {
    id: string;
    name: string;
    // emailid: string;
    // phoneno: number;
    // subject: string;
}

interface ContactState {
    showAddress: boolean;
    showTime: boolean;
}
interface ContactState {
    fullName: string;  //controlled component i.e anything is controlled by virtual dom.
    selectedCity: string;
    cities: City[];
    emailid: string;
    phoneno: string;
    subject: string;

}

// state is owned by the component
// state is created when a component created
// state is destroyed when the component is destroyed
// state can be changed, Immutable

export class Contact extends React.Component<ContactProps, ContactState> {

    constructor(props: ContactProps) {
        super(props); // pass the props to parent class
    
        //state is react keyword
        this.state = {
            showAddress: true,
            showTime: true,
                fullName: '',
                selectedCity: '',
                emailid: '',
                phoneno: '',
                subject: '',
                cities: [
                    {
                        id: 'DL',
                        name : 'Delhi'
                    },
                    {
                        id: 'BLR',
                        name : 'Bangalore'
                    },
                    {
                        id: 'HYD',
                        name : 'Hyderabad'
                    }
                ]
                
            }
        }

    //e is event
    showAlert (e: any) {
        console.log('click event', e);
        alert('Button Clicked');
    }


        // Event handler using ES.next
        //recommended

        showAlert2 = (e: any) => {
            console.log('click event ', e);
            alert('Button Clicked');
        
        }
        toggleAddress = () => {
            //true to false, false to true
            const newValue = !this.state.showAddress;
            
            //to change the state, MUST call setState
            // setState is defined in React.Component class
            this.setState( {
                showAddress: newValue
            })
        }

        toggleTime = () => {
            const newValue = !this.state.showTime;
            this.setState({
                showTime: newValue
            });
        }

        //jsx doesnt allows statement like
        // for, if inside jsx
        // but expressions are allowed
        onNameChange = (e: any) => {
            //Target is input real DOM element
            console.log('Value', e.target.name,e.target.value);
    
            this.setState ({
                fullName: e.target.value
            });
        }
    
        onCityChange = (e: any) => {
            console.log('City change ', e.target.name, e.target.value);
                this.setState({
                    selectedCity: e.target.value
                });
        }
        onEmailChange = (e: any) => {
            //Target is input real DOM element
            console.log('Value', e.target.email,e.target.value);
    
            this.setState ({
                emailid: e.target.value
            });
        }
        onPhoneChange = (e: any) => {
            //Target is input real DOM element
            console.log('Value', e.target.phone,e.target.value);
    
            this.setState ({
                phoneno: e.target.value
            });
        }
        onSubjectChange = (e: any) => {
            //Target is input real DOM element
            console.log('Value', e.target.subject,e.target.value);
    
            this.setState ({
                subject: e.target.value
            });
        }
    render() {
        return (
            <div className= "flex two">
            <div>
                <h2>Contact</h2>
                <p>Contact Here</p>

                 {this.state.showAddress &&
                <Address state='UP' 
                city={'Noida'} 
                pincode={201301}
                />}
                
                <button onClick={this.toggleAddress}>
                View Address
                </button>

                {
                    this.state.showTime?
                    <p>Contact us: 10:00 AM to 5:00 PM</p>
                    :
                    <p>Holidays non working hours...</p>
                }

                <button onClick={this.toggleTime}>
                Working Hours
                </button>
                </div>
            <div>
                
                <h2> Get In Touch </h2>
                <p> Name is {this.state.fullName}</p>
                <p> City Code is {this.state.selectedCity} </p>
            <form>
                Name
                <input name='fullName' 
                type='text' 
                onChange={this.onNameChange}
                value={this.state.fullName}
                />

                City
                <select name='city' onChange = {this.onCityChange} value= {this.state.selectedCity}>
                    {
                        this.state.cities.map(city => (
                        
                        <option value={city.id} key={city.id} > {city.name} </option>
                            ))
                    }
                </select>
                Email Id
                <input name='email' 
                type='text' 
                onChange={this.onEmailChange}
                value={this.state.emailid}
                />
                Phone No
                <input name='phone' 
                type='number' 
                onChange={this.onPhoneChange}
                value={this.state.phoneno}
                />
                Subject
                <input name='subject' 
                type='text' 
                onChange={this.onSubjectChange}
                value={this.state.subject}
                />
            </form>
            
            <button onClick={this.showAlert}>
                Submit
                </button>
            
            <button onClick={this.showAlert}>
                Reset
                </button>
            </div>
            </div>
            
        )
    }
}
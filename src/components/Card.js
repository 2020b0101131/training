// import React from 'react'

// export default function Card(props) {
//     console.log(props.values)
//     //destructuring
//     const{_id,url,prodName,desc}=props.values;
//     return ( <div class = "card" >
//         <img src = {url}
//         class = "card-img-top"
//         alt = "saransh it is not displayed"/>
//         <div class = "card-body" >
//         <h5 class = "card-title" > {props.values.prodName} </h5>  
//         <p class = "card-text" >{desc}</p>  
//         <button class = "btn btn-primary" > Go somewhere </button>  
//         </div > 
//         </div>
//     )
// }
import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    console.log(this.props.values)
        //destructuring
        const{_id,url,prodName,desc}=this.props.values;

        this.state={
            btnText:"Buy"+_id,
        };
    return (
        <div class = "card" >
                <img src = {url}
                class = "card-img-top"
                alt = "saransh it is not displayed"/>
                <div class = "card-body" >
                <h5 class = "card-title" > {this.props.values.prodName} </h5>  
                <p class = "card-text" >{desc}</p>  
                <button class = "btn btn-primary" > {this.state.btnText} </button>  
                </div > 
                </div>
    )
  }
}

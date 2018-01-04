import React from "react";
import "./Cards.css";

export const Cards = props => {

	return(

		<div className="card" id={props.id}>
		  <img className="card-img-top" src={props.src} alt={props.alt} />
		  <div className="card-body">
		    {props.children}
		  </div>
		</div>
             
    );
}


import React from "react";
import "./Home.css";


function Home(){
    return(
        <div className="home">
            <div className="border">
                <h1>Welcome to Gear X!</h1>
                <img src="/images/military1.jpeg" alt="img2" />
                <h1>Best deals guranteed!</h1>
                <img src="/images/military.jpeg" alt="img1" />
                <h1>Gear up now!</h1>
            </div>    
        </div>

    );
}

export default Home;
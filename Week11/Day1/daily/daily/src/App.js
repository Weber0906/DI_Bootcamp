import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./App.css"

const App = () => {
  return (
    <div className="carousel-container">
      <Carousel 
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        className="custom-carousel">
        <div>
          <img src="https://www.topgear.com/sites/default/files/2021/12/18.%20Koenigsegg%20Jesko.jpeg"/>
          <p className="legend"> Supercar 1</p>
        </div>
        <div>
          <img src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iHTTIXsB6Co0/v0/1200x-1.jpg"/>
          <p className="legend"> Supercar 2</p>
        </div>
        <div>
          <img src="https://carwow-uk-wp-1.imgix.net/McLaren-720S-1.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=60&w=750"/>
          <p className="legend"> Supercar 3</p>
        </div>
        <div>
          <img src="https://car-images.bauersecure.com/wp-images/3695/best_supercars_2020.jpg"/>
          <p className="legend"> Supercar 4</p>
        </div>
        <div>
          <img src="https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_674,q_auto:eco,w_1200/v1/cms/uploads/pozlohyw47gnlkydbeec"/>
          <p className="legend"> SSupercar 5</p>
        </div>
        <div>
          <img src="https://hips.hearstapps.com/hmg-prod/images/dw-burnett-lamborghini-centenario-2-1510846404.jpg?crop=0.837xw:0.627xh;0.163xw,0.0817xh&resize=1200:*"/>
          <p className="legend"> Supercar 6</p>
        </div>
      </Carousel>

    </div>
  )
}

export default App;

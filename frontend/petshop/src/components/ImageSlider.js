import React from 'react'
import { Carousel, Button } from 'react-bootstrap'

export const ImageSlider = () => {

    return (
        <>
        <style type="text/css">
            {`
            .carousel-item {
                height : 600px;
            }
            `}
        </style>
         <Carousel style={{ overflowY : "hidden"}}>
             <Carousel.Item>
                 <img src="https://pbs.twimg.com/media/EvnlHzDVoAMp4lK.jpg" className="d-block w-100"></img>
                 <Carousel.Caption>
                     <Button size="lg">More</Button>
                 </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item>
                 <img src="https://www.marketing91.com/wp-content/uploads/2017/11/SWOT-analysis-of-Pedigree.jpg" className="d-block w-100"></img>
                 <Carousel.Caption>
                     <Button size="lg">More</Button>
                 </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item>
                 <img src="https://previews.123rf.com/images/mitdesign/mitdesign1809/mitdesign180900058/113933245-funny-dog-food-advertisement-with-smiling-boston-terrier-and-its-food-on-wooden-table-in-3d-illustra.jpg" className="d-block w-100"></img>
                 <Carousel.Caption>
                     <Button size="lg">More</Button>
                 </Carousel.Caption>
             </Carousel.Item>
         </Carousel>   
        </>
    )
}

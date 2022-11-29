import React from 'react';
import './index.scss';
import Image1 from '../../assets/images/crowded-house-bonanza.png';
import Image2 from '../../assets/images/icebreak-my-date.png';
import Image3 from '../../assets/images/i-want-to-feel.png';
import Image4 from '../../assets/images/always-on-time.png';

// import Card from "react-bootstrap/Card";

// const Portfolio = () => {
//     const cardInfo = [
//         {image: "https://unsplash.com/photos/cvBBO4PzWPg", title: "Project 1", text: "jfjks`dfn"},
//         {image: "https://unsplash.com/photos/cvBBO4PzWPg", title: "Project 2", text: "jfjks`dfn"},
//         {image: "https://unsplash.com/photos/cvBBO4PzWPg", title: "Project 3", text: "jfjks`dfn"},
//         {image: "https://unsplash.com/photos/cvBBO4PzWPg", title: "Project 4", text: "jfjks`dfn"},
//         {image: "https://unsplash.com/photos/cvBBO4PzWPg", title: "Project 5", text: "jfjks`dfn"},
//         {image: "https://unsplash.com/photos/cvBBO4PzWPg", title: "Project 6", text: "jfjks`dfn"},
//     ];

// return (
//   <>
//   {cardInfo.map((card, index) =>(
//     <>

//     <Card style={{ width: '18rem' }} key={index}>
//       <Card.Img variant="top" src ={card.image} />
//       <Card.Body>
//         <Card.Title>{card.title}</Card.Title>
//         <Card.Text>
//           {card.text}
//         </Card.Text>
//         {/* <Button variant="primary">Go somewhere</Button> */}
//       </Card.Body>
//     </Card>
//     </>

//   ))}
//   </>
// )

//     const renderCard = (card, index) => {
    
// <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" 
//     //   src="holder.js/100px180" 
//       src ={card.image} />
//       <Card.Body>
//         <Card.Title>{card.title}</Card.Title>
//         <Card.Text>
//           {card.text}
//         </Card.Text>
//         {/* <Button variant="primary">Go somewhere</Button> */}
//       </Card.Body>
//     </Card>
    
// };

// };

// export default Portfolio






const Portfolio = () => {

    return (
        <div className="container portfolio-page">
        <div className="text-area">
            <h1>My Portfolio</h1>
            <h2>Please click on the projects below to see my work.</h2>


        <div className='project-container-1 '>
        <a href = 'https://jonacko.github.io/crowded-house-bonanza/' target= '_blank'><button className="btn-main-project " style={{backgroundImage:`url(${Image1})`, backgroundSize: '100%'}}>  
        
         </button> </a>
         
         <a href = 'https://immense-journey-92545.herokuapp.com/' target= '_blank'><button className="btn-project-2 " style={{backgroundImage:`url(${Image2})`, backgroundSize: '100%'}}>  </button> </a>

         </div>

         <div className='project-container-2 '>

         <a href = 'https://nxtera.github.io/I-Want-To-Feel/' target= '_blank'><button className="btn-project-3 " style={{backgroundImage:`url(${Image3})`, backgroundSize: '100%'}}> </button> </a>

         <a href = 'https://jonacko.github.io/always-on-time/' target= '_blank'><button className="btn-project-4 " style={{backgroundImage:`url(${Image4})`, backgroundSize: '100%'}}> </button> </a>

         
         </div>
        </div>

        </div>

      
    )
}

export default Portfolio
import './index.scss';

import {Card} from "react-bootstrap";

const Portfolio = () => {
    const cardInfo = [
        {image: "https://unsplash.com/photos/cvBBO4PzWPg", title: "Project 1", text: "jfjks`dfn"},
        {image: "https://unsplash.com/photos/cvBBO4PzWPg", title: "Project 2", text: "jfjks`dfn"},
        {image: "https://unsplash.com/photos/cvBBO4PzWPg", title: "Project 3", text: "jfjks`dfn"},
        {image: "https://unsplash.com/photos/cvBBO4PzWPg", title: "Project 4", text: "jfjks`dfn"},
        {image: "https://unsplash.com/photos/cvBBO4PzWPg", title: "Project 5", text: "jfjks`dfn"},
        {image: "https://unsplash.com/photos/cvBBO4PzWPg", title: "Project 6", text: "jfjks`dfn"},
    ];

    const renderCard = (card, index) => {
    return (
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" 
    //   src="holder.js/100px180" 
      src ={card.image} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>
          {card.text}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    );
};

 return 
    <div className="container portfolio-page">{cardInfo.map(renderCard)}</div>

};

export default Portfolio






// const Portfolio = () => {

//     return (
//         <div className="container portfolio-page">
//         <div className="text-area">
//             <h1>My Portfolio</h1>
//             <h2>Here is my Portfolio</h2>

//         <div class='project-container-1'>
//         <button className="btn-main-project">   
        
//          </button><button className="btn-project-2"> </button>

//          </div>

//          <div class='project-container-2'>

//      <button className="btn-project-3"> </button>

//      <button className="btn-project-4"> </button>
         
//          </div>
//         </div>

//         </div>

      
//     )
// }

// export default Portfolio
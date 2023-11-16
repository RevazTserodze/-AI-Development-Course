import React, { useState } from "react";

function Cards() {
  const [cards, setCards] = useState([
    {
      info: 'AI can automate repetitive and mundane tasks, saving you time and effort. For example, it can handle email filtering, appointment scheduling, data entry, and more',
      img: 'https://cdn-icons-png.flaticon.com/128/6873/6873405.png',
      boolean: false
    },
    {
      info:' AI-powered tools can process large volumes of data quickly and provide insights or predictions based on patterns it identifies. This is particularly useful in industries',
      img:'https://cdn-icons-png.flaticon.com/128/11260/11260792.png',
      boolean: false
      
    },
  
    {
      info:'AI models can understand and process human language. This enables applications like chatbots, sentiment analysis, and language translation.',
      img:'https://cdn-icons-png.flaticon.com/128/10817/10817261.png',
      boolean: false
     
    },
  
    {
      info:'AI algorithms can find the most efficient solutions to complex problems. This is applied in areas like supply chain management, logistics, and resource allocation.',
      img:'https://cdn-icons-png.flaticon.com/128/12122/12122348.png',
      boolean: false
      
    },
  
    {
      info:'AI can detect and respond to cybersecurity threats in real-time, identifying patterns indicative of cyberattacks.',
      img:'https://cdn-icons-png.flaticon.com/128/8131/8131880.png',
      boolean: false
    },
  
    {
      info:' AI can enhance accessibility for individuals with disabilities. For example, it can convert spoken language into text or vice versa for the hearing impaired',
      img:'https://cdn-icons-png.flaticon.com/128/4616/4616809.png',
      boolean: false
    },
  ]);

  const showMoreOrLess = (index) => {
   let updatedCards=[...cards];
   updatedCards[index].boolean=!updatedCards[index].boolean
   setCards(updatedCards)
  };

  return (
    <div className="container ">
      <div className="row d-flex justify-content-center align-items-center text-center ">
        {
          cards.map((elem, index) => (
            <div  key={index} style={{ padding: '25px', borderRadius: '11px', }} className="col-lg-3 col-md-10 col-sm-12 text-bg-danger m-5 ">
              <img className="img-fluid" width='80px' src={elem.img} alt="" />
              <p>
               {elem.boolean  ? elem.info:elem.info.slice(0,30)}
                <span onClick={() => showMoreOrLess(index)} style={{ color: 'blue', cursor: 'pointer', fontFamily:'fantasy' }}>
                  {elem.boolean ? "(Show Less)" : "...Show More"}
                </span>
              </p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Cards;

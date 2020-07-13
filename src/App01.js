import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  );
}

const foodLike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://ucloud.lgcns.com/VmCube/Media/template/TPL_UCLD/images/portal/header_logo.png",
    rating: 5
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image: "https://ucloud.lgcns.com/VmCube/Media/template/TPL_UCLD/images/portal/header_logo.png",
    rating: 4.8
  },
  {
    id: 3,
    name: "Bibimbap",
    image: "https://ucloud.lgcns.com/VmCube/Media/template/TPL_UCLD/images/portal/header_logo.png",
    rating: 4.6
  },
  {
    id: 4,
    name: "Doncasu",
    image: "https://ucloud.lgcns.com/VmCube/Media/template/TPL_UCLD/images/portal/header_logo.png",
    rating: 4.8
  },
  {
    id: 5,
    name: "Kimbap",
    image: "https://ucloud.lgcns.com/VmCube/Media/template/TPL_UCLD/images/portal/header_logo.png",
    rating: 4.3
  }
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App01() {
  return (
    <div>
      {foodLike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />))}
    </div>
    
  );
}

export default App01;

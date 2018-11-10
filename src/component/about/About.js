import React from 'react'

const About = (props) => {
  return (
    <div>
      <h4>{props.match.params.id}</h4>
      <p className="lead"> This app is made to make your life easier, all you have to do is enter and new contact, yu may ask why? thats because you keep forgetting things</p>
    </div>
  )
}

export default About;
import React from 'react'

import "./AboutMe.css"

const AboutMe = () => {
  return (
    <div className = "about-me">
        <div className = "introduction">
            <h1>Hello</h1>
            <p>
                My name is Kaung Htet Myat. I am a software developer based in North Carolina. 
                I graduated in May 2022 from <a href = "https://www.uccs.edu/" target="_blank" rel="noreferrer">University Of Colorado Colorado Springs</a> with a degree in Computer  Science.
                I am organized, creative and an ambitious person who is always curious to learn new tools and innovate.
            </p>
            <p>
                I have extensive experience with building MERN(<a href = "https://www.mongodb.com/" target="_blank" rel="noreferrer">MongoDB</a>, <a href = "https://expressjs.com/" target="_blank" rel="noreferrer">Express.js</a>, <a href = "https://reactjs.org/" target="_blank" rel="noreferrer">React.js</a>, <a href = "https://nodejs.org/en/" target="_blank" rel="noreferrer">Node.js</a>) applications.
                I also have experience working with other tools such as SQL, MySQL, Python Libraries, Java etc... for various projects including machine learning algorithms 
                and agile software development. You can view my work from my <a href = "https://github.com/Programmingrelated1999" target="_blank" rel="noreferrer">GitHub</a>. 
                </p>
            <p>
                In my freetime, I like to travel. I have been to many major cities in the East Coast such as Washington DC, New York, Philadelphia, and Boston. I wish to work and settle in these cities one day.
            </p>
        </div>
        <div className = "yellow-shape"></div>
        <div>
        </div>
    </div>
  )
}

export default AboutMe

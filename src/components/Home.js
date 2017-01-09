import React, { Component } from 'react'

class Home extends Component {

  render () {
    return (
      <div className='home'>
        <section>
          <div className='cronut01-image'>
            <p>Cronut image</p>
          </div>
          <h1>The Cronut</h1>
          <p>A <a href='https://en.wikipedia.org/wiki/Cronut' target='_blank'>cronut</a> is a croissant-doughnut pastry invented by New York City pastry chef <a href='https://en.wikipedia.org/wiki/Dominique_Ansel' target='_blank'>Dominique Ansel</a> and trademarked by Dominique Ansel Bakery. The pastry resembles a doughnut and is made from croissant-like dough which is filled with flavored cream and fried in oil. The flavor of the pastry differs every month.</p>
        </section>
        <section>
          <div className='caleb-image'>
            <p>Caleb the Cronut</p>
          </div>
          <h1>Why Cronuts?</h1>
          <p>Hi, My name is Caleb and I love cronuts! I am also a Front-End Engineering student at <a href='https://www.theironyard.com/' target='_blank'>The Iron Yard</a> in St. Petersburg, FL. I'm studying web and software development with and emphasis in Javascript and React. This project was built as part of the course requirements. The purpose was to build a mock restaurant website that leverages React to display a menu and location page that are dynamic and responsive. It was a lot of fun to build and I hope you enjoy it. You can check out this and all my projects on <a href='https://github.com/cfsanderson' target='_blank'>my GitHub.</a></p>
        </section>
      </div>
    )
  }
}

export default Home

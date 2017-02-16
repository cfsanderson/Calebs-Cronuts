import React, { Component } from 'react'

class Contact extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      avatar_url: '',
      bio: '',
      location: '',
      blog: []
    }
  }

  componentDidMount () {
    const GitHubURL = 'https://api.github.com/users/cfsanderson'
    window.fetch(GitHubURL).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        name: data.name,
        avatar_url: data.avatar_url,
        bio: data.bio,
        location: data.location
      })
    })
  }

  render () {
    return (
      <div>
        <h2>Contact</h2>
        <form className='contact'>
          <p>
            <label htmlFor='fullName'>Name</label>
            <input name='fullName' type='text' />
          </p>
          <p>
            <label htmlFor='message'>Message</label>
            <textarea cols='30' rows='10' />
          </p>
          <p>
            <button type='submit'>Submit</button>
          </p>
        </form>
        <div>
          <iframe src='https://docs.google.com/forms/d/e/1FAIpQLSfiD2DoCR3KdTz_YicVY648lHQ9RccD0A_OiMS4c_dFrEYTCw/viewform?embedded=true' width='760' height='500' frameBorder='0' marginHeight='0' marginWidth='0'>Loading...</iframe>
        </div>
        <div className='bio'>
          <p>{this.state.bio}</p>
          <img className='avatar_url' src={this.state.avatar_url} />
        </div>
        <ul className='socials'>
          <li><a href='https://twitter.com/cfsanderson' target='_blank'><i className='fa fa-twitter' aria-hidden='true' /></a></li>
          <li><a href='https://www.facebook.com/caleb.f.sanderson' target='_blank'><i className='fa fa-facebook' aria-hidden='true' /></a></li>
          <li><a href='https://www.instagram.com/cfsanderson/' target='_blank'><i className='fa fa-instagram' aria-hidden='true' /></a></li>
          <li><a href='https://www.linkedin.com/in/calebsanderson' target='_blank'><i className='fa fa-linkedin' aria-hidden='true' /></a></li>
          <li><a href='https://github.com/cfsanderson' target='_blank'><i className='fa fa-github' aria-hidden='true' /></a></li>
        </ul>
      </div>
    )
  }
}

export default Contact

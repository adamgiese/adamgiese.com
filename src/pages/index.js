import React from 'react'
import PageTitle from 'components/PageTitle'
import { withSiteData } from 'react-static'

export default withSiteData(() => (
  <div>
    <PageTitle>Howdy!</PageTitle>
    <p>
      My name is Adam Giese. I am a front-end developer with experience building websites and applications of all sizes.
      In addition to development, I like to <a href='/writings'>write</a> and <a href='/speaking'>speak</a>.
    </p>
    <p>
      Follow me on <a href='https://codepen.io/AdamGiese'>CodePen</a> or <a href='https://twitter.com/AdamGieseDev'>Twitter</a>.
    </p>
  </div>
))

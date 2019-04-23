import React from 'react'
import PageTitle from 'components/PageTitle'
import writings from 'bundled/writings.json';
import './writings.css'

const LinkPost = ({title, link, snippet, publication}) => <article className='post post--link'>
  <p className='postPublication'>{publication}</p>
  <h2 className='postTitle'>{title}</h2>
  <p className='postSnippet'>{snippet}</p>
  <a className='postLink' href={link}>Read More</a>
</article>

const PostSwitch = props => {
  if (props.link) {
    return <LinkPost {...props} />
  }
  return null;
}

export default () => (
  <div>
    <PageTitle>Writings</PageTitle>
    <div className='posts'>
      { writings.map(post => <PostSwitch {...post} />) }
    </div>
  </div>
)

import React from 'react'
import PageTitle from 'components/PageTitle'
import Octicon, {Alert} from '@githubprimer/octicons-react'

export default () => (
  <div>
    <PageTitle>
      <Octicon icon={Alert} size='large' />
      404: Not found
    </PageTitle>
  </div>
)

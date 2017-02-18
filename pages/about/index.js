import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import get from 'lodash/get'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import Helmet from "react-helmet"
import { config } from 'config'


class About extends React.Component {
  render () {
    return (
      <div>
        <Helmet
            title="About - Mike Heitzke | Product Designer"
            mixpanelTitle="Pricing"
            description={`Get started with Syncano for free and scale to millions of users. Upgrade, downgrade or cancel at
              any time. 30 day money back guarantee. Read more...`}
          />
        <h1>About</h1>
        </div>
    )
  }
}

export default About

import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Container from '../components/container'
import Layout from '../components/layout'
import Bio from '../components/bio'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const [author] = get(this, 'props.data.allContentfulPerson.nodes')

    return (
      <Layout location={this.props.location}>
        <Bio
          image={author.heroImage.gatsbyImageData}
          title="Defensive Stance"
          author={author.name}
          twitter={author.twitter}
          linkedIn={author.linkedIn}
          github={author.github}
        />
        <Container>
          <div
            dangerouslySetInnerHTML={{
              __html: author.bio?.childMarkdownRemark?.html,
            }}
          />
        </Container>
        <ArticlePreview posts={posts} />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "2aa7dWXuT1KgjD8KRaeNNg" } }
    ) {
      nodes {
        name
        pronouns
        twitter
        github
        linkedIn
        heroImage : image {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: BLURRED, width: 1280)
          resize(height: 630, width: 1200) {
            src
          }
        }
        bio {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`

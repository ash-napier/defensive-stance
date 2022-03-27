import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './hero.module.css'

const Bio = ({ image, title, author, twitter, linkedIn, github }) => (
  <div className={styles.hero}>
    {image && (
      <GatsbyImage className={styles.image} alt={title} image={image} />
    )}
    <div className={styles.details}>
      <h1 className={styles.title}>{title}</h1>
      {author && <p className={styles.content}>A blog by {author}</p>}
      <p>
        [ {twitter && <a href={twitter}>Twitter</a>} ]
        [ {linkedIn && <a href={linkedIn}>LinkedIn</a>} ]
        [ {github && <a href={github}>GitHub</a>} ]
      </p>
    </div>
  </div>
)

export default Bio

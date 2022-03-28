import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Seo from '../components/seo'
import Layout from "../components/layout"
import Container from '../components/container'
import * as styles from '../components/hero.module.css'

class ErrorPage extends React.Component {
    render() {

        return (
            <Layout location={this.props.location}>
                <Seo title="Defensive Stance Error" />
                    <Container>
                        <StaticImage
                            src="../../static/assets/nat1.png"
                            width={150}
                            quality={100}
                        />
                        <p></p>
                        <h1 className={styles.title}>Oops!</h1>
                        <p className={styles.content}>We rolled a critical failure on our perception skill check to find that page for you.</p>
                            <p><a href="/">Return home and try again.</a></p>
                    </Container>
            </Layout>
        )
    }
}

export default ErrorPage
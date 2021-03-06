import React from 'react'

import { Header, Main, Footer, Layout } from '../components'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      isVisible: false,
      article: '',
      loading: 'is-loading'
    }
  }

  componentDidMount() {
    this.timeoutReference = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
    document.addEventListener('mousedown', event => {
      this.handleOutsideClick(event)
    })
  }

  componentWillUnmount() {
    if (this.timeoutReference) {
      clearTimeout(this.timeoutReference)
    }
    document.removeEventListener('mousedown', this.handleOutsideClick)
  }

  setWrapperRef(ref) {
    this.wrapperRef = ref
  }

  onOpenArticle(article) {
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isVisible: !this.state.isVisible
      })
    }, 350)
  }

  onCloseArticle() {
    this.setState({
      isVisible: !this.state.isVisible
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: ''
      })
    }, 350)
  }

  handleOutsideClick(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.onCloseArticle()
      }
    }
  }

  render() {
    const { location } = this.props
    const { loading, isArticleVisible, timeout, isVisible, article } = this.state

    return (
      <Layout location={location}>
        <article className={`body ${loading} ${isArticleVisible ? 'is-article-visible' : ''}`}>
          <section id="wrapper">
            <Header
              onOpenArticle={selectedArticle => this.onOpenArticle(selectedArticle)}
              timeout={timeout}
            />
            <Main
              isArticleVisible={isArticleVisible}
              timeout={timeout}
              isVisible={isVisible}
              article={article}
              onCloseArticle={() => this.onCloseArticle()}
              setWrapperRef={ref => this.setWrapperRef(ref)}
            />
            <Footer timeout={timeout} />
          </section>
          <section id="bg" />
        </article>
      </Layout>
    )
  }
}

export default IndexPage

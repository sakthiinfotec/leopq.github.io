import React from 'react'
import { articles } from '../../config/index'

import './Header.scss'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa fa-jedi fa-2x" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Leonardo Quevedo</h1>
        <p>
          Porto Alegre, RS <br />| Software Engineer @
          <a href="https://www.trin.ca" rel="noopener noreferrer" target="_blank">
            <b>trinca137</b> |
          </a>{' '}
          JavaScript Fullstack | <br />
          Especialista em <b>mobile</b> | Advocate de <b>Aplicativos Universais</b> | Devops | IA
          Enthusiast.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        {articles.map(
          article =>
            article && (
              <li key={article.href}>
                <a
                  href="#"
                  onClick={() => {
                    props.onOpenArticle(article.href)
                  }}>
                  {article.label}
                </a>
              </li>
            )
        )}
      </ul>
    </nav>
  </header>
)

export default Header

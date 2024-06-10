import { useState } from 'react'
import { LeftPanel } from './Components/LeftPanel'
import { Navbar } from './Components/Navbar'
import { Skills } from './Components/Skills'
import './Components/Styles/global.css'
import { Projects } from './Components/Projects'
import { About } from './Components/About'
import { Contact } from './Components/Contact'

function App() {
  const [page, setPage] = useState('About')

  const renderPage = () => {
    switch (page) {
      case 'About':
        return <About />

      case 'Skills':
        return <Skills />

      case 'Projects':
        return <Projects />

      case 'Contact':
        return <Contact />

      default:
        return <p>Acerca de mi</p>;
    }
  }

  return (
    <>
      <Navbar setPage={setPage} page={page} />
      <div className="dashboard is-full-height">
        <aside id='is-vcentered.' className="dashboard-panel has-thick-padding is-small is-hidden-mobile">
          <LeftPanel setPage={setPage} page={page} />
        </aside>

        <main className="dashboard-main is-scrollable">
          {renderPage()}
        </main>

      </div>
    </>
  )
}

export default App

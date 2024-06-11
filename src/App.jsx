import { useEffect, useState } from 'react'
import { LeftPanel } from './Components/LeftPanel'
import { Navbar } from './Components/Navbar'
import { Skills } from './Components/Skills'
import './Components/Styles/global.css'
import { Projects } from './Components/Projects'
import { About } from './Components/About'
import { Contact } from './Components/Contact'

function App() {
  const [page, setPage] = useState('About')
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = prefersDarkScheme ? 'dark' : 'light';
    if (initialTheme === 'dark') {
      setDarkTheme(true);
      document.documentElement.classList.add('theme-dark');
    } else {
      document.documentElement.classList.remove('theme-dark');
    }
  }, []);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.documentElement.classList.toggle('theme-dark');
  };

  const renderPage = () => {
    switch (page) {
      case 'About':
        return <About />

      case 'Skills':
        return <Skills />

      case 'Projects':
        return <Projects />

      case 'Contact':
        return <Contact darkTheme={darkTheme}/>

      default:
        return <p>Acerca de mi</p>;
    }
  }

  return (
    <>
      <Navbar setPage={setPage} page={page} />
      <div className="dashboard is-full-height">
        <aside id='is-vcentered.' className="dashboard-panel has-thick-padding is-small is-hidden-mobile">
          <LeftPanel setPage={setPage} page={page} toggleTheme={toggleTheme} darkTheme={darkTheme}/>
        </aside>

        <main className="dashboard-main is-scrollable">
          {renderPage()}
        </main>

      </div>
    </>
  )
}

export default App

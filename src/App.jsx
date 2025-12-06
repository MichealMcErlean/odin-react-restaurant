import { useState } from 'react'
import {Outlet, NavLink} from 'react-router';
import './App.css'

function App() {

  return (
    <main>
      <header>
        <h1>Mukguk's Eatery</h1>
        <h2>Finest Orcish Kwizeen</h2>
      </header>
      <nav>
        <NavLink 
          to="/welkum"
          className={({isActive}) => isActive ? 'active-link' : 'inactive-link'}
          end
        >
          Welkum
        </NavLink>
        <NavLink 
          to="/menoo"
          className={({isActive}) => isActive ? 'active-link' : 'inactive-link'}
          end
        >
          Menoo
          </NavLink>
        <NavLink 
          to="/about"
          className={({isActive}) => isActive ? 'active-link' : 'inactive-link'}
          end
        >
          About
        </NavLink>
      </nav>
      <article>
        <div id="content">
          <Outlet />
        </div>
      </article>
      <footer>
        Images from <a href="http://game-icons.net">game-icons.net</a>. All other content &copy; Micheal McErlean 2025.
      </footer>
    </main>
  )
}

export default App

import './styles/style.css';
import {MyButton} from './Components/MyButton.jsx'
import {Routes, Route, NavLink} from 'react-router-dom'
import {Clients} from './Pages/Clients'
import {Products} from './Pages/Products'

const clients = [{id: 1,
                name: 'Ivanov',
                imgageUrl: 'https://cdnn21.img.ria.ru/images/07e5/06/18/1738448523_0:54:864:540_768x0_80_0_0_2b22ca2080fa2ccb677f3919e7223405.jpg.webp',
                },
                {id: 2,
                name: 'Petrov',
                imgageUrl: 'https://cdnn21.img.ria.ru/images/07e5/06/18/1738448523_0:54:864:540_768x0_80_0_0_2b22ca2080fa2ccb677f3919e7223405.jpg.webp',
                },
                {id: 3,
                name: 'Sidorov',
                imgageUrl: 'https://cdnn21.img.ria.ru/images/07e5/06/18/1738448523_0:54:864:540_768x0_80_0_0_2b22ca2080fa2ccb677f3919e7223405.jpg.webp',
                }]

export const App = () => { 
  return( <>
  <header>
    <nav>
      <NavLink to = '/Products' className = {({isActive})=> isActive ? 'link_active': 'link'}>продукты</NavLink>
      <div> </div>
      <NavLink to = '/Clients' className = {({isActive})=> isActive ? 'link_active': 'link'}>клиенты</NavLink>
    </nav>
  </header>
  <main>
    <Routes>
      <Route path = 'Products' element = {<Products/>}/>
      <Route path = 'Clients' element = {<Clients/>}/>
    </Routes>
  </main>
  </>)
}
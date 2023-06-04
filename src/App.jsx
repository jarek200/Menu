import { useState } from 'react'
import SingleItem from './SingleItem'
import menu from './data'
import Navigation from './Navigation'

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const uniqueCategories = menu.reduce((acc, { category }) => (acc.includes(category) ? acc : [...acc, category]), [])
  const handleClick = category => (category === 'all' ? setMenuItems(menu) : setMenuItems(menu.filter(item => item.category === category)))

  return (
    <main className='menu'>
      <h1 className='title '>Our Menu</h1>
      {['all', ...uniqueCategories].map((cat, idx) => (
        <Navigation key={idx} cat={cat} handleClick={handleClick} />
      ))}
      {menuItems.map(item => (
        <SingleItem key={item.id} {...item} />
      ))}
    </main>
  )
}
export default App

import { useState } from 'react'
import SingleItem from './SingleItem'
import menu from './data'
import Navigation from './Navigation'
import Title from './Title'

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const uniqueCategories = menu.reduce((acc, { category }) => (acc.includes(category) ? acc : [...acc, category]), [])
  const handleClick = category => (category === 'all' ? setMenuItems(menu) : setMenuItems(menu.filter(item => item.category === category)))

  return (
    <main className='menu'>
      <section className='menu'>
        <Title text='Our Menu' />
      </section>
      <section className='btn-container'>
        {['all', ...uniqueCategories].map((cat, idx) => (
          <Navigation key={idx} cat={cat} handleClick={handleClick} />
        ))}
      </section>
      <section className='section-center'>
        {menuItems.map(item => (
          <SingleItem key={item.id} {...item} />
        ))}
      </section>
    </main>
  )
}
export default App

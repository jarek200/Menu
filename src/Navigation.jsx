export default function Navigation({ handleClick, cat, idx }) {
  return (
    <div key={idx} className='btn-container'>
      <button onClick={() => handleClick(cat)} className='filter-btn'>
        {cat}
      </button>
    </div>
  )
}

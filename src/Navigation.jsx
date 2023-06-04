export default function Navigation({ handleClick, cat, idx }) {
  return (
    <button key={idx} onClick={() => handleClick(cat)} className='btn'>
      {cat}
    </button>
  )
}

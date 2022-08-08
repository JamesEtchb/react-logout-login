export default function Menubar({ name, setName }) {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span>Menubar</span>
      {name 
        ? <button onClick={() => setName(null)}>Logout</button> 
        : <button onClick={() => setName('James')}>Login</button>
      }
    </nav>
  )
}

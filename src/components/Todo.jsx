import './Todo.css';
// Functional Component
export default function TodoList() {
    return (
      <>
        <h1>Hedy Lamarr's Todos</h1>
        <img 
          src="https://i.imgur.com/yXOvdOSs.jpg" 
          alt="Hedy Lamarr" 
          className="photo" 
        />
        <ul>
          <li className='list1'>Invent new traffic lights</li>
          <li>Rehearse a movie scene</li>
          <li style={{color:"blue"}}>Improve the spectrum technology</li>
        
          <li style={{backgroundColor:"red"}}>Improve the spectrum technology</li>
        </ul>
      </>
    );
  }
  
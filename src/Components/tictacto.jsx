import './tictacto.css'
import circle from '../assets/circle.jpeg'
import cross from '../assets/cross.png'
import { useState } from 'react';


const Tictactoe = ()=>{ 
  const [board ,setBoard]=useState(Array(9).fill(''))
  const[move,setMove]=useState('X')
 const Click =(n)=>{
  let square=[...board]


  if(board[n]!=''){
    alert('Already clicked')
  return
  }

  square[n]=move
  setBoard(square)
if(move==='X'){
  setMove('O')
}else{
  setMove('X')
}
 }

    return (
      <>
     <div className="container">
      <h1 className='title'>Tic Tac Toe Game  <span >&nbsp;  React</span></h1>

     
     <div className="board">
      <div className="row1">
        <div  className="boxes" onClick={()=>{Click(0)}} >{board[0]} </div>
        <div  className="boxes" onClick={()=>{Click(1)}}>{board[1]}</div>
        <div className="boxes" onClick={()=>{Click(2)}}>{board[2]}</div>
      </div>
      <div className="row2">
        <div className="boxes" onClick={()=>{Click(3)}}>{board[3]}</div>
        <div className="boxes" onClick={()=>{Click(4)}}>{board[4]}</div>
        <div className="boxes" onClick={()=>{Click(5)}}>{board[5]}</div>
      
      </div>
      <div className="row3">
        <div className="boxes" onClick={()=>{Click(6)}}>{board[6]}</div>
        <div className="boxes" onClick={()=>{Click(7)}}>{board[7]}</div>
        <div className="boxes" onClick={()=>{Click(8)}}>{board[8]}</div>
      </div>
     </div>
     <button type="button" className="btn btn-danger">Reset</button>
     </div>
      </>
    )
  }
  
  export default Tictactoe;
import React, { useState } from 'react'
import Item from './Item'
import { v4 as uuidv4 } from 'uuid';


export default function Form() {

/***********Tableau des taches***************/

    const [dataArr,setDataArr]=useState([
        ])

/***********input***************/
    const [valtxt,setvaltxt]=useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editedText, setEditedText] = useState('');



const modifytext=(e)=>{

setvaltxt(e.target.value);
console.log(valtxt);

}
/********fonction addTodo**********************/
const addTodo = e => {        
    e.preventDefault(); 
    if (editIndex !== null) {
     // Si nous sommes en mode édition, mettons à jour l'élément existant
        const newArr = dataArr.map((element) =>
        element.id === editIndex ? { ...element, txt: editedText } : element
        );
          setDataArr(newArr);
          setEditIndex(null);
          setEditedText('');
        } else {
          // Sinon, ajoutez un nouvel élément
          const newTodo = {
            txt: valtxt,
            id: uuidv4(),
            completed: false,
          };
          setDataArr([...dataArr, newTodo]);
        }
      
        setvaltxt('');
      };
      

 /***** ne jamais modifier le state directement*****     
    const newArr = [...dataArr]      
    const newTodo = {};       
    newTodo.txt = valtxt;    
    newTodo.id = uuidv4();       
    newArr.push(newTodo);    
    setDataArr(newArr);       
    setvaltxt('')    ;
}
*/
/***********pour l'édition ****************/

const editTodo = (index) => {
    setEditIndex(index);
    setEditedText(dataArr[index].txt);
  };
  
  

/******fonction deleteelement******************/


const deleteelement=id=>{

    
 /***** ne jamais modifier le state directement******/ 
    let  newArr = [...dataArr]
    newArr=newArr.filter(element=>{
    return element.id!=id;
    })
 setDataArr(newArr);
    }

/******fonction toggleTodo******************/

    const toggleTodo = (id) => {
       // alert('hello'+id)
        const newArr = dataArr.map((item) => {
            if (item.id === id) {
                return {...item, completed: !item.completed };
            }
            return item;
        });
        setDataArr(newArr);
    }



    const saveTodo = (index) => {
        const newArr = [...dataArr];
        newArr[index].txt = editedText;
        setDataArr(newArr);
        setEditIndex(null);
        setEditedText('');
      };
      


    

    return (
        
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6" style={{ backgroundColor: 'lightgray' , border:'1px solid grey' , borderRadius:'10px'}}>
        <form onSubmit={e => addTodo(e)} className="mb-3">
            <label htmlFor="todo" className="form-label mt-3"><h1>Ma liste </h1></label>
            <input type="text" className="form-control" id="todo" value={valtxt}    onChange={(e)=>modifytext(e)} placeholder='insérer un élément'/>
            <button className="mt-3 btn btn-primary d-block">Envoyer</button>
        </form>
    <ul  className='list-group' >
  {dataArr.map((element, index) => (
    <Item
      completed={element.completed}
      txt={element.txt}
      key={element.id}
      toggleTodo={() => toggleTodo(element.id)}
      delFunc={() => deleteelement(element.id)}
      editing={editIndex === index}
      editedText={editedText}
      onTextChange={(text) => setEditedText(text)}
      onSave={() => saveTodo(index)}
      onEdit={() => editTodo(index)}
      
    />
  ))}
</ul>


</div>
    );
    
}

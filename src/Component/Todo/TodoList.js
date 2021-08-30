import React,{useState,useEffect} from 'react';
import img from '../Images/todo.svg';
import './Style.css';

const Todo = () => {

	//To get data from local storage

	const getLocalItems=()=>{
		let list=localStorage.getItem('listData');
		console.log(list);

		if(list){
			return JSON.parse(localStorage.getItem('listData'));
		}else{
			return [];
		}

	}

	const [inputData, setInputData] = useState();
	const [Items, setItems] = useState(getLocalItems());
	const [toggleSubmit, setToggleSubmit] = useState(true);
	const [isEditItem, setIsEditItem] = useState(null);

	const addItem=()=>{
		if(!inputData){
         alert("input Some Data");
		} else if (inputData && !toggleSubmit) {
	      setItems(
	        Items.map((val) => {
	          if (val.id === isEditItem) {
	            return { ...val, name: inputData };
	          }
	          return val;
	        })
	      );

	      setInputData("");
	      setIsEditItem(null);
	      setToggleSubmit(true);
        }else{
			const allInputData = {
		        id: new Date().getTime().toString(),
		        name: inputData,
		      };
	        setItems([...Items,allInputData]);
	        setInputData("");
        }
	}

	const deleteItem=(id)=>{
      const updatedItem=Items.filter((val)=>{
            return val.id !== id;
      });
      setItems(updatedItem);
	}

	const removeAll=()=>{
		setItems([]);
	}

	const editItem=(id)=>{

		let newEditItem=Items.find((val)=>{
			return val.id === id;
		});

		console.log(newEditItem);
		setToggleSubmit(false);
		setInputData(newEditItem.name);
		setIsEditItem(id);

	}

	useEffect(() => {
		localStorage.setItem('listData',JSON.stringify(Items))
		
	}, [Items]);


	return (
		<>
		<div className="main-div">
	        <div className="child-div">
	          <figure>
	            <img src={img} alt="todologo" />
	            <figcaption>Add Your List Here 🖐</figcaption>
	          </figure>
	          <div className="addItems">
	            <input
	              type="text"
	              placeholder="✍ Add Item"
	              value={inputData}
	              onChange={(event)=>{ setInputData(event.target.value);}}   
	            /> 

	            {
	            	toggleSubmit? <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i> : 
	            	       <i className="far fa-edit add-btn" title="Update Item" onClick={addItem}></i>
	            }
    
	          </div>
	          {/* show our items  */}
	          <div className="showItems">
	           {
	           	Items.map((val)=>{
                  return(
                       	<div className="eachItem" key={val.id}>
				           	<h3>{val.name}</h3>
				           	<div className="todo-btn">
				           		<i className="far fa-edit add-btn" title="Edit Item" onClick={()=>editItem(val.id)}></i> 	
				           	    <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={()=>deleteItem(val.id)}></i>
				           	</div>  	               	
			           </div>
                  	)
	           	})
	           }  
	          </div>

	          {/* remove all button  */}
	          <div className="showItems">
	            <button
	              className="btn effect04"
	              data-sm-link-text="Remove All"
	              onClick={removeAll}
	              >
	              <span> CHECK LIST</span>
	            </button>
	          </div>
	        </div>
	    </div>
		</>
	)
}

export default Todo;
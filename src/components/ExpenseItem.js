import { useState } from 'react';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';
function ExpenseItem(props){
    //this is here we are using submodule of react that is used to manage updated values to any variable in the html file
    //w/o react we would have first acquired the html element and then inside the event listener would have set its value again 
    //this updated value is itself called as 'NEW STATE' 
    //previously title was something else but now title is different and hence the state of title is changing 
    //1st arg -> the state itself
    //2nd arg -> the method that must be called to perform the updation
    //this would call the component function again to reflect the changes
    const [title, setTitle] = useState(props.title);
    function ClickHandler(){
        setTitle('updated');
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{title}</h2>
            </div>
            <div className='expense-item__price'>${props.amount}</div>
            <button type='submit' onClick={ClickHandler}>Submit</button>
        </Card>
    );
}
export default ExpenseItem;
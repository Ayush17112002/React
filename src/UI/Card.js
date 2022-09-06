//card is used to give some common styling 
import './Card.css';
function Card(props){
    let classes = 'card ';
    if(props.className !== undefined){
        classes += props.className;
    }
    return(
        <div className={classes}>{props.children}</div>
    );
}
export default Card;
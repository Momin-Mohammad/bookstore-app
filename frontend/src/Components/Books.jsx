import { useNavigate } from "react-router-dom";
import styles from "./Books.module.css";

export default function Books({bookImg,bookName,author,genre,price}){
    const navigate = useNavigate();
    return(
        <div className={styles.Books_div}>
            <img src={bookImg} placeholder={bookName}/>
            <h2>{bookName}</h2>
            <h3>Author :{author}</h3>
            <h3>Genre : {genre}</h3>
            <h3>Price : {price}</h3>
            <button onClick={()=>navigate(`/books/${bookName}`)}>View Details</button>
        </div>
    )
}
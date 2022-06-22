import SingleBook from "./SingleBook"
import "bootstrap/dist/css/bootstrap.min.css"
import {Component} from "react"
import BookData from "../data/horror.json"

class BookList extends Component {
    render(){
        return (
        BookData.map(book =>
            <SingleBook BookData={book}/>
            ))
    }
}
export default BookList
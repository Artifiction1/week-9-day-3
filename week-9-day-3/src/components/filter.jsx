import { Component } from "react"
import {} from "react-bootstrap"
import BookData from "../data/horror.json"
import React from "react"
import SearchEngine from "./input"

let FilteredList=[]
class FilterBooks extends Component{
 render(){
    FilteredList = BookData.filter(book => book.title.includes("Girl"))
    console.log(FilteredList)
    return (console.log(FilteredList))}
}
export default FilterBooks
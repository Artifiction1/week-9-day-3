import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FilterBooks from './filter';

let Booksy ={}
class SearchEngine extends Component {

    state ={ Booksy: {
        search: ""
    },}
    handleChange = (valueToSet) => {
        
        this.setState({
          Booksy: {
            search: valueToSet,
          },
        }
        );
        <FilterBooks search = {Booksy.search} />
      }
    render(){
  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          value = {this.state.Booksy.search} 
          onChange = {async event => {
            console.log(event.target.value)
            await this.handleChange(event.target.value)
            console.log(this.state.Booksy.search);
            <FilterBooks search = {this.state.Booksy.search}/>
          }} 
          placeholder="search"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </>
  );}
}

export default SearchEngine
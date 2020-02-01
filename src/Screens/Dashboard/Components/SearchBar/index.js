import React from 'react';
import {searchText} from '../../../../store/Actions/searchText';
import {addBook} from '../../../../store/Actions/addBook';
import {connect} from 'react-redux';
import data from '../../../../store/Data/data.json';

class SearchBar extends React.Component{

    state = {
        searchTerm:'',
        searchId:'',
        showSuggetions:true
    }

    suggestBook = (e) => {
        this.setState({
            searchTerm:e.target.value
        });
        this.props.suggestBook(e.target.value);
    }

    formSubmit = (e) => {
        e.preventDefault();
        if(this.state.searchId!==''){
            this.setState({
                searchTerm:'',
                showSuggetions:true,
                searchId:''
            });
            this.props.addBookId(this.state.searchId);
        }
    }

    render(){
        const suggetions = this.props.suggetions;
        return (
            <header>
                <form onSubmit={this.formSubmit}>
                    <input type="text" placeholder="Search your book" value={this.state.searchTerm} onChange={this.suggestBook}/>
                    <input type="submit" value="Submit" />
                    {
                    this.state.showSuggetions ? 
                    <div className="dropdown">
                        <ul className="dropdown-content">
                        {
                            suggetions.map(sugg => {
                                return (
                                    <li key={sugg.id} href="#" className="" onClick={() => this.setState({showSuggetions:false, searchTerm:data.titles[sugg.id],searchId:sugg.id})}>{data.titles[sugg.id]}</li>
                                )
                            })
                        }
                        </ul>
                    </div>
                    : null 
                    }
                </form>
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.suggetions);
    return {
        suggetions:state.suggetions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        suggestBook:(searchTerm)=>dispatch(searchText(searchTerm)),
        addBookId:(id)=> dispatch(addBook(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
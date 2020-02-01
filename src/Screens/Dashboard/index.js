import React, { Fragment } from 'react';
import SearchBar from './Components/SearchBar';
import BookList from './Components/BookList';

class Dashboard extends React.Component{

    
    render(){
        
        return (
            <Fragment>
                <SearchBar />
                <BookList />
            </Fragment>
        )
    }
}

export default Dashboard;
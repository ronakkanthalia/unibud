import React from 'react';
import {connect} from 'react-redux';

class BookList extends React.Component{

   

    render(){
        
        return (
            <div className="bookList">
            {
                this.props.bookList.length ? 
                <div>
                    <h2>Book List</h2>
                    <table border="1" >
                        <thead>
                            <tr>
                                <td>Title</td>
                                <td>Author</td>
                                <td>Summary</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.bookList.map(book => {
                                    return <tr>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>
                                            <p>{book.summary}</p>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
                : null
            }
            
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.bookList);
    return {
        bookList:state.bookList
    }
}
export default connect(mapStateToProps)(BookList);
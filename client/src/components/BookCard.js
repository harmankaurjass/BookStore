import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class BookCard extends Component {
    render() {
        const { book } = this.props;
        return (

            <div className="col-lg-2 col-md-3 col-sm-6 col-7 mb-5" id="fill">
                {book.image ? <img className=" w-100 mb-2 img-fluid" src={require(`../images/books_DB/${book.image}`)} alt="Book Cover" /> : <img className=" w-100 mb-2 img-fluid card card-body" src={require(`../images/books_DB/no_cover.jpg`)} alt="Book Cover" />}
                <div >
                    <p className="text-truncate" style={bookName}>{book.name}</p>
                    <p className="text-truncate mb-2" style={bookAuthor}>{book.author}</p>
                    <Link to={'book/' + book.id}><button className="btn btn-secondary btn-sm btn-block" id="button1">Browse More</button></Link>
                </div>
            </div>
        )
    }
}

const bookName = {
    padding: '0px',
    margin: '0px',
    fontSize: '20px',
    color: 'brown',
    fontweight:'bolder'
}

const bookAuthor = {
    padding: '0px',
    margin: '0px',
    fontSize: '16px',
    color: 'black',
    fontweight:'bolder'
}

export default BookCard
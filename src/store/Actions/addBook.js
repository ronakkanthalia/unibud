import data from '../Data/data.json';

export function addBook(summaryId) {
    return(dispatch) => {
        let author = '';
        data.authors.map(auth => {
            if(auth.book_id === summaryId){
                author=auth.author
            }
        });
        let summary = '';
        data.summaries.map(sum => {
            if(sum.id === summaryId){
                summary=sum.summary
            }
        });
        let bookObj = {
            title:data.titles[summaryId],
            author,
            summary
        };
        dispatch(
            {
                type:'SET_LIST', 
                book:bookObj
            }
        )
    };
}
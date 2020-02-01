import data from '../Data/data.json';

export function searchText(text) {
    return(dispatch) => {
        console.log('text ', text);
        if(text===''){
            dispatch({
                type:'SET_SUGGETION', 
                suggetions:[]
            });
        }else{
            let words = text.split(" ");
            let result = data.summaries.filter(item => {
                let count = 0;
                words.map(word => {
                    let re = new RegExp(word, 'g');
                    count += (item.summary.match(re) || []).length;
                });
                if(count){
                    return {
                        id:item.id,
                        count:count
                    };
                }
            });
            let sortedResult = result.sort(function(a, b){
                return a.count-b.count
            });
            let finalResult = sortedResult.slice(0,10);
            dispatch(
                {
                    type:'SET_SUGGETION', 
                    suggetions:finalResult
                }
            )
        }
    };
}
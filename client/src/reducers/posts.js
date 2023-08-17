

export default (posts = [], action) => {
    switch(action.type){
        case 'FETCH_ACTION':
        return action.payload;
        case 'CREATE':
        return [...posts, action.payload];
        default:
            return posts;

    }
}
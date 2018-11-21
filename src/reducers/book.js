const initialState = {
    bookData: [],
    pictureData: [],
    bibles: [],
    bibleDetail: [],
    books: [],
    chapters: [],
    verses: [],
    verse: [],
}

const bookReducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_BOOKS' :
            return {
                ...state,
                bookData: action.payload.books
            }
        case 'ADD_PICTURES':
            return {
                ...state,
                pictureData: action.payload.pictures
            }
        case 'GET_BIBLE':
            return {
                ...state,
                bibleDetail: action.payload.bibleDetail
            }
        case 'ADD_BIBLES':
            return {
                ...state,
                bibles: action.payload.bibles
            }
        case 'BOOK_LIST':
        return {
            ...state,
            books: action.payload.books
            }
        case 'CHAPTER_LIST':
        return {
            ...state,
            chapters: action.payload.chapters
            }
        case 'VERSES_LIST':
        return {
            ...state,
            verses: action.payload.verses
            }
        case 'VERSES_DETAIL':
        return {
            ...state,
            verse: action.payload.verse
            }
        case 'RESET_STATE':
        return {
            ...state,
            books: action.payload.resetState,
            chapters: action.payload.resetState,
        }
        default : 
            return state
    } 
}

export default bookReducer
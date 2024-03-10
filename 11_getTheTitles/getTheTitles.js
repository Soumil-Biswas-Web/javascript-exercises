function getTitle(book){
    return book.title;
}

const getTheTitles = function(books) {
    let titleArr = books.map(getTitle);
    return titleArr;
};

// Do not edit below this line
module.exports = getTheTitles;

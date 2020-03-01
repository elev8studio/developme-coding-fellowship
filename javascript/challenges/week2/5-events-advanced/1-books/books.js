(d => {

    let bookshelf = d.getElementById('list');
    let bookInfo = d.createElement('p');
    bookInfo.classList.add('well', 'hidden');
    bookshelf.after(bookInfo);

    bookshelf.addEventListener('click', e => {
        let clicked = e.target;

        if (clicked.matches('li')) {
            bookInfo.classList.remove('hidden');
            bookInfo.textContent = `Author: ${clicked.getAttribute('data-author')}, Price: ${clicked.getAttribute('data-price')}`;
        };
    });


})(document);
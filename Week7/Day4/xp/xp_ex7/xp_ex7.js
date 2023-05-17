const allBooks = [
    {
      title: "Sherlock Holmes",
      author: "Arthur Conan Doyle",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/ArthurConanDoyle_AStudyInScarlet_annual.jpg",
      alreadyRead: true
    },
    {
      title: "James Bond",
      author: "Ian Fleming",
      image: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/4/11/1365673795998/Casino-Royale---Third-Pri-003.jpg?width=700&quality=85&auto=format&fit=max&s=17f48fa1d277adbb4affdd165e85e956",
      alreadyRead: false
    }
  ];

  const listBooksSection = document.querySelector('.listBooks');

  allBooks.forEach(book => {
    const bookDiv = document.createElement('div');

    const image = document.createElement('img');
    image.src = book.image;
    image.style.width = '100px';
    bookDiv.appendChild(image);

    const bookInfo = document.createElement('p');
    bookInfo.textContent = `${book.title} written by ${book.author}`;
    bookDiv.appendChild(bookInfo);

    if (book.alreadyRead) {
        bookInfo.style.color = 'red';
    }

    listBooksSection.appendChild(bookDiv);
});
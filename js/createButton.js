document.getElementById('createButton').addEventListener('click', function () {
    const comment = document.getElementById('commentBox');
    const button = document.createElement('button');
    //have to use classList to add class
    button.classList = 'button bg-red-600';

    //without inner content it will not be visible
    button.innerText = 'submit';

    //to add in a specific section/div
    comment.appendChild(button);

    //to add in body of the html content
    // document.body.appendChild(button);
})


//to add button in body

document.getElementById('createButtonInBody').addEventListener('click', function () {

    const button = document.createElement('button');
    //have to use classList to add class
    button.classList = 'button bg-blue-600';

    //without inner content it will not be visible
    button.innerText = 'submit in body';

    //to add in body of the html content
    document.body.appendChild(button);
})
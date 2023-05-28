const init = () => {

    const inputForm = document.querySelector('form')
    inputForm.addEventListener('submit', e => {
        e.preventDefault() 
        // console.log(e.target.children[1].value)
        const input = document.querySelector('input#searchByID')
        console.log(input.value)

        //fetch request 

        const url = `http://localhost:3000/movies/${input.value}`
        fetch(url).then(response => response.json())
        .then(data => {
            const title = document.querySelector('section#movieDetails h4')
            const summary = document.querySelector('section#movieDetails p')
            title.textContent = data.title
            summary.textContent = data.summary
           


        })
        

    })


  
}

document.addEventListener('DOMContentLoaded', init);




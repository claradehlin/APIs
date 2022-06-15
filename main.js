const getBtn = document.querySelector('#residentButton')

function btnClick() {
    axios.get('https://swapi.dev/api/planets/?search=Tatooine').then(
    (res) => {
        let residents = (res.data.results[0].residents)
        console.log(residents)
        for (i=0; i<residents.length; i++) {
            axios.get(residents[i]).then((res) => {
                let element = document.createElement("h2");
                 element.textContent = res.data.name;
                document.querySelector('body').appendChild(element);
            })
        }
    }
    )
    
    console.log("YOU HATH CLICKED ON THINE BUTTON")
}

getBtn.addEventListener("click", btnClick)
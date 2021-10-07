export default (htmlObjectList) => {
    for(const input of Array.from(htmlObjectList)) {
        const inputElem = input.children[0]
        const inputClasses = Array.from(inputElem.classList)
        const popOver = input.children[1]

        //by default, pop overs is hidden if user hasn't interacted with the input
        popOver.style.display = 'none'

        if(inputClasses.includes('noLetter')) {
            inputElem.addEventListener('keyup', e => 
                //regex testing
                /\D/.test(e.target.value) || e.target.value.length < 1 ?
                    popOver.style.display = null : popOver.style.display = "none"
            )
        }

        if(inputClasses.includes('noNumeric')) {
            inputElem.addEventListener('keyup', e => 
                //regex testing
                /\d/.test(e.target.value) || e.target.value.length < 1 ?
                    popOver.style.display = null : popOver.style.display = "none"
            )
        }

        if(inputClasses.includes('noDefaultSelected')) {
            const defaultValue = inputElem.value;

            inputElem.addEventListener('change', e =>
                e.target.value == defaultValue ?
                    popOver.style.display = null : popOver.style.display = "none"
            )
        }
    }
}
export default (nameString) => {
    let newOption = document.createElement('option')

    newOption.value = newOption.innerHTML = nameString
    return newOption
}
export default (studentObject, htmlTableObject) => {
    let row = htmlTableObject.insertRow()
    let i = 0

    for(const values of Object.keys(studentObject)) {
        row.insertCell(i).innerHTML = studentObject[values]
        i++
    }

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('btn')
    deleteButton.classList.add('redBtn')
    deleteButton.classList.add('delBtn')
    deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="16" fill="currentColor" class="bi bi-person-x-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/></svg>'
    deleteButton.addEventListener('click', e =>
        htmlTableObject.deleteRow(Array.from(htmlTableObject.rows).indexOf(row))
    )

    row.insertCell(i).appendChild(deleteButton)
}
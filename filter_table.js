export default (studentTableObject, query = '', filterBy = 'none') => {
    switch(filterBy) {
        case "none" : {
            for(const tableRow of Array.from(studentTableObject.children[0].children).splice(1))
                if(tableRow.children[1].innerText.toLowerCase().includes(query.toLowerCase()))
                    tableRow.style.display = null
                else
                    tableRow.style.display = 'none'
            break
        }
        case "faculty" : {
            console.log(studentTableObject.children[1].children)
            break
        }
        case "programOfStudy" : {
            console.log(studentTableObject.children[1].children)
            break
        }
        default: {
            break
        }
    }
}
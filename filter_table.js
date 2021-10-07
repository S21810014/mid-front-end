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
            if(query == '-- SELECT FACULTY --') {
                for(const tableRow of Array.from(studentTableObject.children[0].children).splice(1))
                    tableRow.style.display = null
               
                break
            }
            
            for(const tableRow of Array.from(studentTableObject.children[0].children).splice(1))
                if(tableRow.children[3].innerText.includes(query))
                    tableRow.style.display = null
                else
                    tableRow.style.display = 'none'
            break
        }
        case "programOfStudy" : {
            if(query == '-- SELECT PROGRAM OF STUDY --') {
                for(const tableRow of Array.from(studentTableObject.children[0].children).splice(1))
                    tableRow.style.display = null
                
                break
            }

            for(const tableRow of Array.from(studentTableObject.children[0].children).splice(1))
                if(tableRow.children[4].innerText.includes(query))
                    tableRow.style.display = null
                else
                    tableRow.style.display = 'none'
            break
        }
        default: {
            break
        }
    }
}
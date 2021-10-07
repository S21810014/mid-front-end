export default (studentTableObject, query = '', filterBy = 'none') => {
    switch(filterBy) {
        case "none" : {
            console.log("by name")
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
import createListOption from './create_list_option.js'
import addStudentToTable from './add_student_to_table.js'
import setupValidation from './setup_validation.js'
import filterTable from './filter_table.js'

const dropdownData = {
    'Pascasarjana' : [
        'Magister Manajemen',
        'Magister Teologi'
    ],
    'Fakultas Filsafat' : [
        'Ilmu Filsafat',
    ],
    'Fakultas Keguruan dan Ilmu Pendidikan' : [
        'Pendidikan Agama',
        'Pendidikan Bahasa Inggris',
        'Pendidikan Ekonomi',
        'Pendidikan Luar Sekolah',
    ],
    'Fakultas Ekonomi dan Bisnis' : [
        'Akuntansi',
        'Manajemen',
    ],
    'Fakultas Pertanian' : [
        'Agroteknologi',
    ],
    'Fakultas Ilmu Komputer' : [
        'Informatika',
        'Sistem Informasi',
    ],
    'Fakultas Keperawatan' : [
        'Profesi Ners',
        'Keperawatan',
    ],
    'Akademi Sekretari Manajemen Indonesia Klabat' : [
        'Sekretari (D3)',
    ],

    //need to add this default value because resetting the faculty dropdown will trigger 'change'
    //event, and if after that we modify the program of study dropdown, it might not work
    //
    //so we added this option to make sure that if the faculty dropdown is reset back to default value,
    //we are also resetting the program of study dropdown
    '-- SELECT FACULTY --' : [
        '-- SELECT PROGRAM OF STUDY --',
    ]
}

//pre-initialize studentsTable with sample students


const programOfStudyDropdown = document.getElementById('addStudFormPOS')
const facultyDropdown = document.getElementById('addStudFormFac')
const addStudentBtn = document.getElementById('addStudFormAddBtn')
const studentsTable = document.getElementById('studentsTable')
const searchStudentInput = document.getElementById('searchStudentInput')
const showStudentByFacultyBtn = document.getElementById('showStudByFac')
const showStudentByPOSBtn = document.getElementById('showStudByPOS')
const filterFacultyDropdown = document.getElementById('filterFacultyDropdown')
const filterPOSdropdown = document.getElementById('filterPOSdropdown')

//queries div with 'addStudFormCard' class name, then query all child div with 'inputValidWrapper' class name
const needValidInputs = document.getElementsByClassName("addStudFormCard")[0].querySelectorAll(".inputValidWrapper")
setupValidation(needValidInputs)

const students = [
    {
        studentID: '105021810001',
        fullName: 'John Doe',
        gender: 'Male',
        faculty: 'Fakultas Ilmu Komputer',
        programOfStudy: 'Sistem Informasi',
    },
    {
        studentID: '105021810002',
        fullName: 'Alice',
        gender: 'Female',
        faculty: 'Fakultas Keperawatan',
        programOfStudy: 'Profesi Ners',
    },
    {
        studentID: '105021810004',
        fullName: 'Timothy Tiwow',
        gender: 'Male',
        faculty: 'Fakultas Ilmu Komputer',
        programOfStudy: 'Informatika',
    }
]

students.forEach(element => {
    addStudentToTable(element, studentsTable)
});

facultyDropdown.addEventListener('change', e => {
    const selectedFaculty = e.target.value

    //clear the dropdown before adding data
    programOfStudyDropdown.innerHTML = null

    //add the program of study based on selected faculty
    for(const programOfStudy of dropdownData[selectedFaculty]) {
        programOfStudyDropdown.appendChild(createListOption(programOfStudy))
    }
})

addStudentBtn.addEventListener('click', e => {
    const studentID = document.getElementById('addStudFormStudID').value
    const studentName = document.getElementById('addStudFormStudName').value
    const studentGender = document.querySelector('input[name="genderRadioBtn"]:checked').id
    const studentFaculty = facultyDropdown.value
    const studentProgramOfStudy = programOfStudyDropdown.value

    for(const input of Array.from(needValidInputs)) {
        const inputElem = input.children[0]
        const inputClasses = Array.from(inputElem.classList)
        const popOver = input.children[1]

        if(inputClasses.includes('noLetter'))
            //regex testing
            /\D/.test(inputElem.value) || inputElem.value.length < 1 ?
                popOver.style.display = null : popOver.style.display = "none"

        if(inputClasses.includes('noNumeric'))
            //regex testing
            /\d/.test(inputElem.value) || inputElem.value.length < 1 ?
                popOver.style.display = null : popOver.style.display = "none"

        if(inputClasses.includes('noDefaultSelected')) {
            //had to do this since we can't be sure that the combobox hasn't been modified
            const defaultValue = ['-- SELECT FACULTY --', '-- SELECT PROGRAM OF STUDY --']

            defaultValue.includes(inputElem.value) ?
                popOver.style.display = null : popOver.style.display = "none"
        }
    }

    //if any pop overs still visible, do not continue execution
    for(const input of Array.from(needValidInputs))
        if(input.children[1].style.display !== 'none')
            return


    addStudentToTable({
        studentID: studentID,
        studentName: studentName,
        studentGender: studentGender == 'genderRadioBtnMale' ? 'Male' : 'Female',
        studentFaculty: studentFaculty,
        studentProgramOfStudy: studentProgramOfStudy
    }, studentsTable)

    //reset all inputs

    //reset inputs except the dropdown menus
    for(const input of Array.from(needValidInputs).splice(0, needValidInputs.length - 2))
        input.children[0].value = ''
    
    //manually reset faculty dropdown menu
    facultyDropdown.value = '-- SELECT FACULTY --'
})

searchStudentInput.addEventListener('keyup', e => 
    filterTable(studentsTable, e.target.value)
)

showStudentByFacultyBtn.addEventListener('click', e => 
    filterTable(studentsTable, filterFacultyDropdown.value, 'faculty')
)

showStudentByPOSBtn.addEventListener('click', e => 
    filterTable(studentsTable, filterPOSdropdown.value, 'programOfStudy')
)
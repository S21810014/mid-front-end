import createListOption from './create_list_option.js'
import addStudentToTable from './add_student_to_table.js'

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
}

//pre-initialize studentsTable with sample students


const programOfStudyDropdown = document.getElementById('addStudFormPOS')
const facultyDropdown = document.getElementById('addStudFormFac')
const addStudentBtn = document.getElementById('addStudFormAddBtn')
const studentsTable = document.getElementById('studentsTable')

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

    addStudentToTable({
        studentID: studentID,
        studentName: studentName,
        studentGender: studentGender == 'genderRadioBtnMale' ? 'Male' : 'Female',
        studentFaculty: studentFaculty,
        studentProgramOfStudy: studentProgramOfStudy
    }, studentsTable)
})
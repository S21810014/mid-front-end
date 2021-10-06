import createListOption from './create_list_option.js'

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

const programOfStudyDropdown = document.getElementById('addStudFormPOS')
const facultyDropdown = document.getElementById('addStudFormFac')

facultyDropdown.addEventListener('change', e => {
    const selectedFaculty = e.target.value

    //clear the dropdown before adding data
    programOfStudyDropdown.innerHTML = null

    console.log(createListOption)

    //add the program of study based on selected faculty
    for(const programOfStudy of dropdownData[selectedFaculty]) {
        programOfStudyDropdown.appendChild(createListOption(programOfStudy))
    }
})
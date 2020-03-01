//program.js

const GET_PROGRAM_PROPERTIES = 'GET_PROGRAM_PROPERTIES';
const GET_PROGRAM_ROOTS = 'GET_PROGRAM_ROOTS';
const GET_PROGRAM_KEY4 = 'GET_PROGRAM_KEY4';
const GET_PROGRAM_KEY5 = 'GET_PROGRAM_KEY5';
const GET_PROGRAM_RDTE = 'GET_PROGRAM_RDTE';   const GET_PROGRAM_RDTEUFR = 'GET_PROGRAM_RDTEUFR';
const GET_PROGRAM_PROC = 'GET_PROGRAM_PROC';   const GET_PROGRAM_PROCUFR = 'GET_PROGRAM_PROCUFR';
const GET_PROGRAM_OTHER = 'GET_PROGRAM_OTHER'; const GET_PROGRAM_OTHERUFR = 'GET_PROGRAM_OTHERUFR';
const GET_PROGRAM_TOTAL = 'GET_PROGRAM_TOTAL'; const GET_PROGRAM_TOTALUFR = 'GET_PROGRAM_TOTALUFR';
const GET_PROGRAM_DEEPDIVE = 'GET_PROGRAM_DEEPDIVE'; 

function getProgramPropertiesAction(program){//PROGRAM PROPERTIES

    return{
        type: GET_PROGRAM_PROPERTIES,
        program
    }
}

function getProgramRootsAction(program){//PROGRAM ROOTS

    return{
        type: GET_PROGRAM_ROOTS,
        program
    }
}

function getProgramKey4Action(program){//PROGRAM KEY4

    return{
        type: GET_PROGRAM_KEY4,
        program
    }
}

function getProgramKey5Action(program){//PROGRAM KEY5

    return{
        type: GET_PROGRAM_KEY5,
        program
    }
}


function getProgramRDTEAction(program){//PROGRAM RDTE

    return{
        type: GET_PROGRAM_RDTE,
        program
    }
}

function getProgramRDTEUFRAction(program){//PROGRAM RDTE UFR

    return{
        type: GET_PROGRAM_RDTEUFR,
        program
    }
}

function getProgramPROCAction(program){//PROGRAM PROC

    return{
        type: GET_PROGRAM_PROC,
        program
    }
}

function getProgramPROCUFRAction(program){//PROGRAM PROC UFR

    return{
        type: GET_PROGRAM_PROCUFR,
        program
    }
}

function getProgramOTHERAction(program){//PROGRAM OTHER

    return{
        type: GET_PROGRAM_OTHER,
        program
    }
}

function getProgramOTHERUFRAction(program){//PROGRAM OTHER UFR

    return{
        type: GET_PROGRAM_OTHERUFR,
        program
    }
}

function getProgramTOTALAction(program){//PROGRAM TOTAL 

    return{
        type: GET_PROGRAM_TOTAL,
        program
    }
}

function getProgramTOTALUFRAction(program){//PROGRAM TOTAL UFR

    return{
        type: GET_PROGRAM_TOTALUFR,
        program
    }
}


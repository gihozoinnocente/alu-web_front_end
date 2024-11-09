function createClassRoom(numbersOfStudents){
    function studentSeat(seat){
        return seat;
    }

    const students = [];
    for (let i = 0; i < numbersOfStudents; i++) {
        students.push(studentSeat(i + 1));
    }

    return students;
}

const createClassRoom = createClassRoom(10);
const StudentRepository = require('../repository/student');

class StudentService {
    constructor() {
        this.studentRepository = new StudentRepository();
    }

    async getStudent(id) {
        try {
            const student = await this.studentRepository.getStudent(id);
            return student;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    async getAllStudents(filter) {
        try {
            // Check if a filter is provided
            if (filter) {
                const students = await this.studentRepository.getAllStudents(filter);
                return students;
            } else {
                // If no filter is provided, get all students
                const students = await this.studentRepository.getAllStudents();
                return students;
            }
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }
    
}

module.exports = StudentService;

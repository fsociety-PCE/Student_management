const StudentService = require('../services/student-service');


const studentService = new StudentService();

const get = async (req, res) => {
    try {
        const student = await studentService.getStudent(req.params.id);
        return res.status(200).json({
            data: student,
            success: true,
            message: 'Successfully fetched the student',
            error: null
        });
    } catch (error) {
        console.error("Something went wrong in the controller layer");
        return res.status(500).json({
            data: null,
            success: false,
            message: 'Failed to fetch the student',
            error: error.message
        });
    }
};

const getAll = async (req, res) => {
    try {
        const filter = {};
        if (req.query.event) {
            filter.Events = { $regex: new RegExp(req.query.event, 'i') };
        }
        if (req.query.branch) {
            filter.Branch = { $regex: new RegExp(req.query.branch, 'i') };
        }
        if (req.query.batch) {
            filter.Batch = { $regex: new RegExp(req.query.batch, 'i') };
        }

        const students = await studentService.getAllStudents(filter);
        return res.status(200).json({
            data: students,
            success: true,
            message: 'Successfully fetched all students',
            error: null
        });
    } catch (error) {
        console.error("Something went wrong in the controller layer");
        return res.status(500).json({
            data: null,
            success: false,
            message: 'Failed to fetch all students',
            error: error.message
        });
    }
};



module.exports = {
    get,
    getAll
};

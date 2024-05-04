const DataModel = require('../models/registration');

class StudentRepository{
    
        async getStudent(id) {
            try {
                const student = await DataModel.findById(id);
                return student;
            } catch (error) {
                console.log("Something went wrong in the repository layer - getStudent:", error.message);
                throw { error };
            }
        }
    
      
            async getAllStudents(filter = {}) {
                try {
                    const eventRegex = /(Hackathon|Programming Using C|Competitive Programming|Blind Coding )/i;
                    const branchRegex = /(CSE(?!\(AI\))|Electrical|ECE)|CSE\(AI\)/i;
                    const batchRegex = /(2k22|2k23)/i;
            
                    const students = await DataModel.find({
                        $and: [
                            { Events: { $regex: eventRegex } },
                            { Branch: { $regex: branchRegex } },
                            { Batch:  {$regex: batchRegex}},
                            filter // Other filters
                        ]
                    });
                    return students;
                } catch (error) {
                    console.log("Something went wrong in the repository layer - getAllStudents:", error.message);
                    throw { error };
                }
            }
            
        }


module.exports = StudentRepository;
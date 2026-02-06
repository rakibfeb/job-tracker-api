const Application = require("../models/Application");

exports.createApplication = async (req, res) => {
    try {
        const application = await Application.create(req.body);
        res.status(201).json({ message: "Application created successfully!" });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to create a new application" });
    }
}

exports.getApplications = async (req, res) => {
    try {
        const applications = await Application.find();
        console.log(applications);
        res.status(201).json({ 
            success:true,
            count:applications.length,
            data: applications })
    }
    catch (err) {
        res.status(500).json({ message: "failed to get applications" });
    }
}

exports.updateApplicaton = async (req,res)=>{
    try{
        let {id} = req.params;
        const application = await Application.findByIdAndUpdate(
            id, req.body,{new:true}
        );

        if(!application) return res.status(404).json({message:"Application not found"});

        res.status(200).json({message:"UpApplication updated successfully"},application);
    }
    catch(err){
        res.status(500).json({message:"Failed to update application"});
    }
}
const Application = require("../models/Application");

exports.createApplication = async (req, res) => {
    try {
        const application = await Application.create({
            ...req.body,
             user: req.user,
             statusHistory: [{status:req.body.status || "Applied"}]
            });
        res.status(200).json({ message: "Application created successfully!", application });
    }
    catch (err) {
        res.status(500).json({ message: "Failed to create a new application" });
    }
}

exports.getApplications = async (req, res) => {
    try {
        let { status, company, search } = req.query;

        let filter = {};

        if (status) {
            filter.status = status;
        }
        if (company) {
            filter.company = { $regex: company, $options: 'i' }
        };

        if (search) {
            filter.$or = [
                { company: { $regex: search, $options: 'i' } },
                { role: { $regex: search, $options: 'i' } },
                { notes: { $regex: search, $options: 'i' } },
            ];
        }

        const applications = await Application.find({user: req.user, ...filter}).sort({ createdAt: -1 }).select('-__v');
        res.status(200).json({
            success: true,
            count: applications.length,
            data: applications
        })
    }
    catch (err) {
        res.status(500).json({ message: "failed to get applications" });
    }
}

exports.updateApplicaton = async (req, res) => {
    try {
        let { id } = req.params;
        const existingApplication = await Application.findById(id);
        if (!existingApplication) return res.status(404).json({ message: "Application not found" });
        if(req.body.status !== existingApplication.status){
            existingApplication.statusHistory.push({status: req.body.status});
            await existingApplication.save();
        }
        const application = await Application.findByIdAndUpdate(
            {_id: id,
            user: req.user},
            req.body, 
            { new: true }
        );

        if (!application) return res.status(404).json({ message: "Application not found" });

        res.status(200).json({ message: "UpApplication updated successfully", application });
    }
    catch (err) {
        res.status(500).json({ message: "Failed to update application" });
    }
}


exports.getApplication = async (req, res) => {
    try {
        let { id } = req.params;
        let application = await Application.findById(id);
        if (!application) return res.status(404).json({ message: "Application not found" });

        res.status(200).json({ message: "get application Successfully", application });

    } catch (err) {
        res.status(500).json({ message: "failed to get the Application" });
    }
}

exports.deleteApplication = async (req, res) => {
    try {
        let { id } = req.params;
        let application = await Application.findOneAndDelete({_id: id, user: req.user});
        if (!application) return res.status(404).json({ message: "apllication not found" });

        res.status(200).json({ message: "Application deleted successfully", application });
    } catch (err) {
        res.status(500).json({ message: "failed to delete application" })
    }
}
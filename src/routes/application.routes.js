const router = require('express').Router();

const  {
    createApplication,
    getApplications,
    updateApplicaton
} = require('../controllers/applications.controller');

router.post("/",createApplication);
router.get("/",getApplications);
router.put("/:id", updateApplicaton);
// router.delete("/:id",deleteApplication);

module.exports = router;
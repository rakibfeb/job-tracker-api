const router = require('express').Router();

const  {
    createApplication,
    getApplications
} = require('../controllers/applications.controller');

router.post("/",createApplication);
router.get("/",getApplications);
// router.put("/:id", updateApplication);
// router.delete("/:id",deleteApplication);

module.exports = router;
const router = require('express').Router();

const  {
    createApplication,
    getApplications,
    updateApplicaton,
    getApplication,
    deleteApplication,
} = require('../controllers/applications.controller');

router.use(require('../middleware/auth.middleware')); // middleware

router.post("/",createApplication);
router.get("/",getApplications);
router.put("/:id", updateApplicaton);
router.get("/:id",getApplication);
router.delete("/:id",deleteApplication);
module.exports = router;
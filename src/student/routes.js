const  Router = require('express');
const router = Router();
const contro = require('./controller')

router.get("/",contro.getEmploye)
router.post("/",contro.addEmploye)
router.delete("/:id",contro.removeEmploye)
router.put("/:id",contro.updateEmploye)
router.get("/:id",contro.getEmployeById)


module.exports = router
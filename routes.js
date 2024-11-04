import Router from 'express';
import contro from './controller/controller.js'
const router = Router();

router.get("/",contro.getEmploye)
router.post("/",contro.addEmploye)
router.delete("/:id",contro.removeEmploye)
router.put("/:id",contro.updateEmploye)
router.get("/:id",contro.getEmployeById)


export default router
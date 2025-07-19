import express from "express";
import upload from "../middleware/multer.js";
import { addDemande ,isLivreurAccepted, getalllivreur , getlivreuraccepte ,getLivreurAccepteByUserId, acceptdemande,rejectdemande,getlivreurdemande , getLivreurByUserId , updateLivreurProfile} from "../controllers/livreurController.js";

const livreurRouter = express.Router();

livreurRouter.post('/addDemande', upload.array('documents', 3), addDemande);
livreurRouter.get('/getall',getalllivreur);
livreurRouter.get('/getaccepte',getlivreuraccepte);
livreurRouter.get('/status/:userId',getLivreurAccepteByUserId);
livreurRouter.post('/accept',acceptdemande);
livreurRouter.get('/demande',getlivreurdemande);
livreurRouter.post('/reject',rejectdemande);
livreurRouter.get("/by-user/:userId", getLivreurByUserId);
livreurRouter.get("/statut/:userId", isLivreurAccepted);
livreurRouter.patch("/update/:userId", updateLivreurProfile);




export default livreurRouter;

import mongoose from "mongoose";

const vendeurSchema = new mongoose.Schema({
  userId: { 
    type: String, 
    required: true 
  },
  numeroPhone: { 
    type: Number, 
    required: true 
  },


  adressProfessionnel: { 
    type: String, 
    required: true 
  },
  categorieProduitMarche: { 
    type: Array, 
    required: true,
    default: [] 
  },
  nometprenomlegal: { 
    type: String, 
    required: true 
  },
  Marchpardefaut: {
    type: String,
    required: true
  },
  documents: { 
    type: Map, 
    required: true 
  },

    typeDesVendeurs: { 
    type: String, 
    required: true 
  },
  adressDeStockage: { 
    type: String, 
    required: true 
  },
    statutdemande: {
    type: String,
    default: "en traitement"
  }
}, { timestamps: true });

const Vendeur = mongoose.models.Vendeur || mongoose.model("Vendeur", vendeurSchema);

export default Vendeur;
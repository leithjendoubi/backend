import mapModel from '../models/mapModel.js';

// Add or update user address
export const addUserAddress = async (req, res) => {
  try {
    const { userId, coordinates } = req.body;

    if (!userId || !coordinates || !Array.isArray(coordinates) || coordinates.length !== 2) {
      return res.status(400).json({ error: 'Invalid input data' });
    }

    const existingMap = await mapModel.findOne({ 'userAddress.userId': userId });

    if (existingMap) {
      existingMap.userAddress.coordinates = coordinates;
      await existingMap.save();
      return res.status(200).json(existingMap);
    } else {
      const newMap = await mapModel.create({ userAddress: { userId, coordinates } });
      return res.status(201).json(newMap);
    }
  } catch (error) {
    console.error('Error adding user address:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Add or update livreur address
export const addLivreurAddress = async (req, res) => {
  try {
    const { livreurId, coordinates } = req.body;

    if (!livreurId || !coordinates || !Array.isArray(coordinates) || coordinates.length !== 2) {
      return res.status(400).json({ error: 'Invalid input data' });
    }

    const existingMap = await mapModel.findOne({ 'livreurAddress.livreurId': livreurId });

    if (existingMap) {
      existingMap.livreurAddress = { livreurId, coordinates };
      await existingMap.save();
      return res.status(200).json(existingMap);
    } else {
      const newMap = await mapModel.create({ livreurAddress: { livreurId, coordinates } });
      return res.status(201).json(newMap);
    }
  } catch (error) {
    console.error('Error adding livreur address:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Add or update marche address
export const addMarcheAddress = async (req, res) => {
  try {
    const { marcheId, coordinates } = req.body;

    if (!marcheId || !coordinates || !Array.isArray(coordinates) || coordinates.length !== 2) {
      return res.status(400).json({ error: 'Invalid input data' });
    }

    const existingMap = await mapModel.findOne({ 'marcheAddress.marcheId': marcheId });

    if (existingMap) {
      existingMap.marcheAddress = { marcheId, coordinates };
      await existingMap.save();
      return res.status(200).json(existingMap);
    } else {
      const newMap = await mapModel.create({ marcheAddress: { marcheId, coordinates } });
      return res.status(201).json(newMap);
    }
  } catch (error) {
    console.error('Error adding marche address:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Add or update order address
export const addOrderAddress = async (req, res) => {
  try {
    const { orderId, coordinates } = req.body;

    if (!orderId || !coordinates || !Array.isArray(coordinates) || coordinates.length !== 2) {
      return res.status(400).json({ error: 'Invalid input data' });
    }

    const existingMap = await mapModel.findOne({ 'orderAddress.orderId': orderId });

    if (existingMap) {
      existingMap.orderAddress = { orderId, coordinates };
      await existingMap.save();
      return res.status(200).json(existingMap);
    } else {
      const newMap = await mapModel.create({ orderAddress: { orderId, coordinates } });
      return res.status(201).json(newMap);
    }
  } catch (error) {
    console.error('Error adding order address:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Add or update stock address
export const addStockAddress = async (req, res) => {
  try {
    const { stockId, coordinates } = req.body;

    if (!stockId || !coordinates || !Array.isArray(coordinates) || coordinates.length !== 2) {
      return res.status(400).json({ error: 'Invalid input data' });
    }

    const existingMap = await mapModel.findOne({ 'stockAddress.stockId': stockId });

    if (existingMap) {
      existingMap.stockAddress = { stockId, coordinates };
      await existingMap.save();
      return res.status(200).json(existingMap);
    } else {
      const newMap = await mapModel.create({ stockAddress: { stockId, coordinates } });
      return res.status(201).json(newMap);
    }
  } catch (error) {
    console.error('Error adding stock address:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Get user address by ID
export const getUserAddressById = async (req, res) => {
  try {
    const { userId } = req.params;
    const mapData = await mapModel.findOne({ 'userAddress.userId': userId });

    if (!mapData || !mapData.userAddress.coordinates) {
      return res.status(404).json({ error: 'Address not found' });
    }

    return res.status(200).json(mapData.userAddress);
  } catch (error) {
    console.error('Error getting user address:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Get livreur address by ID
export const getLivreurAddressById = async (req, res) => {
  try {
    const { livreurId } = req.params;
    const mapData = await mapModel.findOne({ 'livreurAddress.livreurId': livreurId });

    if (!mapData || !mapData.livreurAddress.coordinates) {
      return res.status(404).json({ error: 'Address not found' });
    }

    return res.status(200).json(mapData.livreurAddress);
  } catch (error) {
    console.error('Error getting livreur address:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Get order address by ID
export const getOrderAddressById = async (req, res) => {
  try {
    const { orderId } = req.params;
    const mapData = await mapModel.findOne({ 'orderAddress.orderId': orderId });

    if (!mapData || !mapData.orderAddress.coordinates) {
      return res.status(404).json({ error: 'Address not found' });
    }

    return res.status(200).json(mapData.orderAddress);
  } catch (error) {
    console.error('Error getting order address:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Get stock address by ID
export const getStockAddressById = async (req, res) => {
  try {
    const { stockId } = req.params;
    const mapData = await mapModel.findOne({ 'stockAddress.stockId': stockId });

    if (!mapData || !mapData.stockAddress.coordinates) {
      return res.status(404).json({ error: 'Address not found' });
    }

    return res.status(200).json(mapData.stockAddress);
  } catch (error) {
    console.error('Error getting stock address:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all addresses
export const getAllAddresses = async (req, res) => {
  try {
    const addresses = await mapModel.find();
    return res.status(200).json(addresses);
  } catch (error) {
    console.error('Error getting all addresses:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

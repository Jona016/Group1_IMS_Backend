import jwt from 'jsonwebtoken';
import config from '../config/config.js'

const getTokenUserId = (token) => {
    try {
      const decoded = jwt.verify(token, config.jwtSecret);
      return decoded.userId; 
    } catch (error) {
      return null;
    }
  }
  
  export default { getTokenUserId }
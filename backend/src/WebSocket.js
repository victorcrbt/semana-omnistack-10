import io from 'socket.io';

import parseStringAsArray from './utils/parseStringAsArray';
import calculateDistance from './utils/calculateDistance';

const connections = [];

class WebSocket {
  constructor(server) {
    this.socket = io(server);
  }

  onConnection() {
    this.socket.on('connection', socket => {
      const { latitude, longitude, techs } = socket.handshake.query;

      connections.push({
        id: socket.id,
        coordinates: {
          latitude: Number(latitude),
          longitude: Number(longitude),
        },
        techs: parseStringAsArray(techs),
      });
    });
  }

  findConnections(coords, techs) {
    return connections.filter(connection => {
      return (
        calculateDistance(coords, connection.coordinates) < 10 &&
        connection.techs.some(item => techs.includes(item))
      );
    });
  }

  sendMessage(to, message, data) {
    to.forEach(connection => {
      this.socket.to(connection.id).emit(message, data);
    });
  }
}

export default WebSocket;

// imageService.js
import { MongoClient, GridFSBucket } from 'mongodb';
import fs from 'fs';

const client = new MongoClient('mongodb+srv://channelfandb:1234@cluster0.radbvnj.mongodb.net/channelfandb?retryWrites=true&w=majority');
const db = client.db('channelfandb');
const bucket = new GridFSBucket(db, { bucketName: 'images' });

export const uploadImageToGridFS = async (imagePath, fileName) => {
  return new Promise((resolve, reject) => {
    const uploadStream = bucket.openUploadStream(fileName);
    fs.createReadStream(imagePath).pipe(uploadStream);

    uploadStream.on('finish', () => {
      const imageUrl = `http://localhost:3000/files/${uploadStream.id}`;
      resolve(imageUrl); // Devuelve la URL al finalizar la subida
    });

    uploadStream.on('error', (error) => {
      reject(error); // Manejo de errores
    });
  });
};


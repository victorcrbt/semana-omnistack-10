import mongoose from 'mongoose';

const DevSchema = new mongoose.Schema({
  name: String,
  github_username: {
    type: String,
    index: true,
    unique: true,
  },
  bio: String,
  avatar_url: String,
  techs: [String],
});

export default mongoose.model('Dev', DevSchema);

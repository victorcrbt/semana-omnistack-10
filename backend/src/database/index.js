import mongoose from 'mongoose';

mongoose.connect(
  'mongodb+srv://admin:admin@cluster0-re36c.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

export default mongoose;

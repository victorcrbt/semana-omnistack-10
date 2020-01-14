import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/omnistack10', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default mongoose;

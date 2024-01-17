import mongoose from 'mongoose';

const user = new mongoose.Schema({
  user_name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', user);
const item = new mongoose.Schema({
  name: { type: String, required: true, },
  type: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: String, required: true },
  expriredate: { type: String, required: true },
}, { timestamps: true });

const Item = mongoose.models.Item || mongoose.model('Item', item);


export {User,
        Item};
import mongoose from 'mongoose';

const user = new mongoose.Schema({
  user_name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roll:{ type:Number, required: true },
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', user);
const item = new mongoose.Schema({
  name: { type: String, required: true, },
  type: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: String, required: true },
  expiredate: { type:Number, required: false },
  date:{type:Number,require:true}
}, { timestamps: true });

const Item = mongoose.models.Item || mongoose.model('Item', item);
const borrowitem = new mongoose.Schema({
  name: { type: String, required: true, },
  type: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: String, required: true },
  to: { type: String, required: true },
  restortion_day:{type:String,required:true}
}, { timestamps: true });

const BorrowItem = mongoose.models.BorrowItem || mongoose.model('BorrowItem',borrowitem);
const transferitem = new mongoose.Schema({
  name: { type: String, required: true, },
  type: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: String, required: true },
  to: { type: String, required: true },
}, { timestamps: true });

const TransferItem= mongoose.models.TransferItem || mongoose.model('TransferItem',transferitem);


export {User,
        Item,
        BorrowItem,
        TransferItem,
      };
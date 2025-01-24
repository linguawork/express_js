//16:50
//модель данных для Поста с содержанием и картинкой

import mongoose from 'mongoose';

//модель будет построена на схеме
const Post = new mongoose.Schema(
    //required field are a must to fill
    {
        author: { type: String, required: true },
        title: { type: String, required: true },
        content: { type: String, required: true },
        picture: { type: String },
    }
);

export default mongoose.model('Post', Post);

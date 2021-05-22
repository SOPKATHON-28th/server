진술게임
=====

### 서비스 소개
`서비스 이름` : 진술게임<br>
`서비스 한 줄 소개` : 당신의 진술한 기억을 나눠보는 술자리 게임

### Models
 - /models/Penalty.ts
```
import mongoose from "mongoose";
import { IPenalty } from "../interfaces/IPenalty"
const PenaltySchema = new mongoose.Schema({
    img: {
        type:String,
        required: true
    },
    penaltyIdx: {
        type:Number,
        required: true
    }
});

export default mongoose.model<IPenalty & mongoose.Document>("Penalty",PenaltySchema);
```
 - /interfaces/IPenalty
```
import mongoose from "mongoose";

export interface IPenalty{
    _id?: string;
    penaltyIdx: number;
    img: string;
}
```

 - /models/Question.ts
```
import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  level: {
    type: Number,
    required: true
  },
});

//export default 
export default mongoose.model<mongoose.Document>("Question", QuestionSchema);
```

 - /interfaces/IQuestion
```
import mongoose from "mongoose";

export interface IQuestion{
    _id?: string;
    title: string;
    level: number;
}
```


### API 명세서
 - ##### [API 명세서](https://github.com/SOPKATHON-28th/server/wiki)

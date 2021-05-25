"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
const app = express_1.default();
const PORT = process.env.PORT || 4000;
app.use(cors_1.default());
app.use(express_1.default.urlencoded({
    extended: true
}));
app.use(express_1.default.json()); //support get data from request
app.use(index_1.default);
const db = require('./configs/db').mongoURI;
mongoose_1.default.set("useFindAndModify", false);
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose_1.default.connect(db, options).then(() => {
    console.log(`Database connected successfully ${db}`);
}).catch(err => {
    console.log(`Unable to connect with the database ${err}`);
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

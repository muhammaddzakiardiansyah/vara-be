import multer from "multer";
import path from "path";

const fileUpload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/uploads');
        },
        filename: function (req, file, cb) {
            cb(null, `${new Date().getTime()}-${file.originalname}`);
        }
    })
})
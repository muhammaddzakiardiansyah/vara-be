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
    }),
    fileFilter: (req, file, cb) => {
        let formatType = path.extname(file.originalname);
        if(formatType == ".jpg" || formatType == ".jpeg" || formatType == ".png" || formatType == ".svg") {
            cb(null, true);
        } else {
            cb("Format file tidak didukung!", false)
        }
    },
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
});

export default fileUpload;
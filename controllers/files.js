import multer from 'multer';

//configure multer
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// version 2 to use multer
// fileSize is in bytes. (1000000 bytes = 1MB)
const upload = multer({ storage }).single('demo_image');

export const getImage = (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');

  res.status(200).send({
    message: 'file post route',
  });
};

export const postImage = (req, res) => {
  //   res.header('Access-Control-Allow-Origin', '*');

  upload(req, res, (err) => {
    if (err) {
      console.log(err);
      res.status(400).send('Something went wrong!');
    }

    res.status(200).send({
      message: 'file post route',
      file: req.file,
    });
  });
};

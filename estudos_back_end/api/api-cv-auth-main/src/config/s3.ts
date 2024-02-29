import fs from 'fs';
import S3 from 'aws-sdk/clients/s3';

const bucketId = process.env.AWS_S3_BUCKET;
const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

export const s3Upload = (file: any) => {
  const fileStream = fs.createReadStream(file.path);

  const uploadParams: any = {
    Bucket: bucketId,
    Body: fileStream,
    Key: file.filename,
    ContentType: file.mimetype,
  };

  return s3.upload(uploadParams).promise();
};

import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FileUploadService {
  private s3: AWS.S3;

  constructor() {
    this.s3 = new AWS.S3({
      accessKeyId: process.env.AWS_API_KEY,
      secretAccessKey: process.env.AWS_SECRET,
      region: process.env.AWS_REGION,
    });
  }

  async uploadFile(file: Express.Multer.File): Promise<string> {
    const bucket = process.env.AWS_IMAGE_BUCKET;
    const name = `${uuidv4()}-${file.originalname}`;

    const params = {
      Bucket: bucket,
      Key: name,
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    const data = await this.s3.upload(params).promise();
    return data.Location;
  }
}
export default FileUploadService;

/* eslint-disable @typescript-eslint/ban-types */
import { v4 as uuid } from 'uuid';
import { MessageHandler } from 'src/shared/enums';

export const fileRename = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: Function,
) => {
  if (!file) return callback(new Error(MessageHandler.FILE_EMPTY), false);

  const fileExtension = file.mimetype.split('/')[1];

  const fileName = `${uuid()}.${fileExtension}`;

  callback(null, fileName);
};

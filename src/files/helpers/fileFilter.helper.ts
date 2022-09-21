/* eslint-disable @typescript-eslint/ban-types */
import { MessageHandler, ValidExtension } from 'src/shared/enums';

export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: Function,
) => {
  if (!file) return callback(new Error(MessageHandler.FILE_EMPTY), false);

  const fileExtension = file.mimetype.split('/')[1];

  if ((<any>Object).values(ValidExtension)?.includes(fileExtension)) {
    callback(null, true);
  }

  callback(null, false);
};

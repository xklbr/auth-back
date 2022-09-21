export enum MessageHandler {
  PASSWORD_INVALID = 'The password must have a Uppercase, lowercase letter and a number',

  UNEXPECTED_ERROR = 'Unexpected error, check server logs',

  UNAUTHORIZED_CREDENTIALS = 'Email or password are not valid',
  UNAUTHORIZED_TOKEN = 'Token is not valid',
  UNAUTHORIZED_USER = 'User is inactive, contact support',

  USERS_NOT_FOUND = 'Users not found',
  USER_NOT_FOUND = 'User not found',
  USER_INVALID_ROLE = 'User does not have permissions',
  USER_INVALID_STATUS = 'User does not have valid status',
  USER_INACTIVE = 'User is inactive',

  EMAIL_ALREADY_EXIST = 'Email is all ready exist',

  PRODUCT_ALREADY_EXIST = 'Product is already exist',
  PRODUCT_NOT_FOUND = 'Product not found',
  FILE_EMPTY = 'File is empty',
  FILE_IS_NOT_IMG = 'Make sure that the file sent is an image.',
}

/* eslint-disable prettier/prettier */
export const API_PREFIX = 'api/v1';

export const DATABASE_SCHEMA_NAMES = {
  CORE: 'core',
  MIGRATION: 'migration',
};

export const DATABASE_COLECTION_NAMES = {
  USERS: 'users',
  JOBS: 'jobs',
};

export enum FeatureFlagEnum {
  RESIZE_BIG_IMAGES = 'RESIZE_BIG_IMAGES',
  CREATE_IMAGE_THUMBNAILS = 'CREATE_IMAGE_THUMBNAILS',
}

export enum Order {
  ASC = 'ASC',
  DESC = 'DESC',
}

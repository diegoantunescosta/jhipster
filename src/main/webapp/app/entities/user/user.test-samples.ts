import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 'c1cd95e5-cb57-4004-94f3-3413e6baeb20',
  login: 'S!&p@TR',
};

export const sampleWithPartialData: IUser = {
  id: '2ad7187d-0b2d-4139-9ddb-db9056b811bd',
  login: 'i.|8H@q2EP8\\zz01f0',
};

export const sampleWithFullData: IUser = {
  id: '9edfed73-8e32-4bff-adc5-277cb287d2bd',
  login: 'gI@qJ3wEd\\4ve\\bF5\\wKD4LLZ\\HxF',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

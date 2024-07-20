import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'a42dd557-0e0b-4c62-8750-25953262ec26',
};

export const sampleWithPartialData: IAuthority = {
  name: '7bdadcf2-f4cc-4f1f-bc3c-748c856ecb80',
};

export const sampleWithFullData: IAuthority = {
  name: '391c0a82-237f-46fc-9a65-05e9f75cce3f',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

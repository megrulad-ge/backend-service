import { Dictionary } from '../dictionary.entity';
import { CreateDictionaryResponse } from './create-dictionary.response';

export class FetchDictionaryResponse extends CreateDictionaryResponse {
  constructor(partial: Partial<Dictionary>) {
    super(partial);
    Object.assign(this, partial);
  }
}

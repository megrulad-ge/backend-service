import { Test, TestingModule } from '@nestjs/testing';
import { TranslationService } from './translation.service';
import { SetupModule } from '/common/setup/setup.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Translation } from './translation.entity';

describe('TranslateService', () => {
  let service: TranslationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SetupModule, TypeOrmModule.forFeature([Translation])],
      providers: [TranslationService],
    }).compile();

    service = module.get<TranslationService>(TranslationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it.todo('should create a translation record');
  });

  describe('fetch', () => {
    it.todo('should return a created translation record');
  });

  describe('update', () => {
    it.todo('should update a record');

    it.todo('should throw an error when the record is not found');
  });

  describe('remove', () => {
    it.todo('should mark record as deleted');
    it.todo('should throw an error when the record is not found');
  });
});

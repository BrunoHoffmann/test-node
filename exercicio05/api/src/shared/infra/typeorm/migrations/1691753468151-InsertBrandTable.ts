import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertBrandTable1691753468151 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO brands (name)
      VALUES
      ('Toyota'),
      ('Ford'),
      ('Honda'),
      ('Chevrolet'),
      ('Volkswagen'),
      ('BMW'),
      ('Mercedes-Benz'),
      ('Audi'),
      ('Nissan'),
      ('Hyundai');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        DELETE TABLE brands
      `,
    );
  }
}

import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateVehicleTable1691752782401 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'vehicles',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'brand_id',
            type: 'uuid',
          },
          {
            name: 'year',
            type: 'varchar',
          },
          {
            name: 'sold',
            type: 'boolean',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'BrandVehicle',
            columnNames: ['brand_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'brands',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('vehicles');
  }
}

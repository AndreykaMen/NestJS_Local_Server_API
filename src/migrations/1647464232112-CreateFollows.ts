import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateFollows1647464232112 implements MigrationInterface {
  name = 'CreateFollows1647464232112';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "folllows" ("id" SERIAL NOT NULL, "followerId" integer NOT NULL, "followingId" integer NOT NULL, CONSTRAINT "PK_bd1dcf1bd4b3c1b5eca0bebfddd" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "folllows"`);
  }
}

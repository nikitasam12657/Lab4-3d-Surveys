"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitMigration1776697952708 = void 0;
class InitMigration1776697952708 {
    constructor() {
        this.name = 'InitMigration1776697952708';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "response" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "textValue" character varying NOT NULL, "imagePath" character varying NOT NULL, "surveyId" uuid, CONSTRAINT "PK_f64544baf2b4dc48ba623ce768f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "survey" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_f0da32b9181e9c02ecf0be11ed3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "response" ADD CONSTRAINT "FK_57ae9b4b711490ee8c929cb04ad" FOREIGN KEY ("surveyId") REFERENCES "survey"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "response" DROP CONSTRAINT "FK_57ae9b4b711490ee8c929cb04ad"`);
        await queryRunner.query(`DROP TABLE "survey"`);
        await queryRunner.query(`DROP TABLE "response"`);
    }
}
exports.InitMigration1776697952708 = InitMigration1776697952708;
//# sourceMappingURL=1776697952708-InitMigration.js.map
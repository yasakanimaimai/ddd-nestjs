/*
  Warnings:

  - Made the column `first_name` on table `Administrator` required. This step will fail if there are existing NULL values in that column.
  - Made the column `last_name` on table `Administrator` required. This step will fail if there are existing NULL values in that column.
  - Made the column `mail_address` on table `Administrator` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title` on table `Challenge` required. This step will fail if there are existing NULL values in that column.
  - Made the column `content` on table `Challenge` required. This step will fail if there are existing NULL values in that column.
  - Made the column `label` on table `EnrollmentStatus` required. This step will fail if there are existing NULL values in that column.
  - Made the column `label` on table `Genre` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Pair` required. This step will fail if there are existing NULL values in that column.
  - Made the column `first_name` on table `Participant` required. This step will fail if there are existing NULL values in that column.
  - Made the column `last_name` on table `Participant` required. This step will fail if there are existing NULL values in that column.
  - Made the column `mail_address` on table `Participant` required. This step will fail if there are existing NULL values in that column.
  - Made the column `enrollment_status_id` on table `Participant` required. This step will fail if there are existing NULL values in that column.
  - Made the column `label` on table `ProgressStatus` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Team` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Participant" DROP CONSTRAINT "Participant_enrollment_status_id_fkey";

-- AlterTable
ALTER TABLE "Administrator" ALTER COLUMN "first_name" SET NOT NULL,
ALTER COLUMN "last_name" SET NOT NULL,
ALTER COLUMN "mail_address" SET NOT NULL;

-- AlterTable
ALTER TABLE "Challenge" ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "content" SET NOT NULL;

-- AlterTable
ALTER TABLE "EnrollmentStatus" ALTER COLUMN "label" SET NOT NULL;

-- AlterTable
ALTER TABLE "Genre" ALTER COLUMN "label" SET NOT NULL;

-- AlterTable
ALTER TABLE "Pair" ALTER COLUMN "name" SET NOT NULL;

-- AlterTable
ALTER TABLE "Participant" ALTER COLUMN "first_name" SET NOT NULL,
ALTER COLUMN "last_name" SET NOT NULL,
ALTER COLUMN "mail_address" SET NOT NULL,
ALTER COLUMN "enrollment_status_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "ProgressStatus" ALTER COLUMN "label" SET NOT NULL;

-- AlterTable
ALTER TABLE "Team" ALTER COLUMN "name" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_enrollment_status_id_fkey" FOREIGN KEY ("enrollment_status_id") REFERENCES "EnrollmentStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

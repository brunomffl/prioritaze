/*
  Warnings:

  - The `priority` column on the `tickets` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "TicketPriority" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

-- AlterTable
ALTER TABLE "tickets" DROP COLUMN "priority",
ADD COLUMN     "priority" "TicketPriority" NOT NULL DEFAULT 'LOW';

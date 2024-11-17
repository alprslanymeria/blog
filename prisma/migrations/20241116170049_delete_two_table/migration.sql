/*
  Warnings:

  - You are about to drop the `Categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SubscriberCategories` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[SubscriberCategories] DROP CONSTRAINT [SubscriberCategories_categoryId_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[SubscriberCategories] DROP CONSTRAINT [SubscriberCategories_subscriberId_fkey];

-- DropTable
DROP TABLE [dbo].[Categories];

-- DropTable
DROP TABLE [dbo].[SubscriberCategories];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH

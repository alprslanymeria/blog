/*
  Warnings:

  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Comment] DROP CONSTRAINT [Comment_categoryId_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[Comment] DROP CONSTRAINT [Comment_cookieId_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[Comment] DROP CONSTRAINT [Comment_parentCommentId_fkey];

-- DropTable
DROP TABLE [dbo].[Comment];

-- DropTable
DROP TABLE [dbo].[User];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH

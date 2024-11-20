/*
  Warnings:

  - Added the required column `categoryId` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Comment] ADD [categoryId] INT NOT NULL;

-- CreateIndex
CREATE NONCLUSTERED INDEX [Comment_categoryId_idx] ON [dbo].[Comment]([categoryId]);

-- AddForeignKey
ALTER TABLE [dbo].[Comment] ADD CONSTRAINT [Comment_categoryId_fkey] FOREIGN KEY ([categoryId]) REFERENCES [dbo].[Category]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH

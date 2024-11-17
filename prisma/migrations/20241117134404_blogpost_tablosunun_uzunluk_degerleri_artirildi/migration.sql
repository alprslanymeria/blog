/*
  Warnings:

  - You are about to alter the column `imageUrl` on the `BlogPost` table. The data in that column could be lost. The data in that column will be cast from `NVarChar(1000)` to `VarChar(500)`.
  - You are about to alter the column `header` on the `BlogPost` table. The data in that column could be lost. The data in that column will be cast from `NVarChar(1000)` to `VarChar(255)`.
  - You are about to alter the column `summary` on the `BlogPost` table. The data in that column could be lost. The data in that column will be cast from `NVarChar(1000)` to `Text`.
  - You are about to alter the column `content` on the `BlogPost` table. The data in that column could be lost. The data in that column will be cast from `NVarChar(1000)` to `Text`.
  - You are about to alter the column `author` on the `BlogPost` table. The data in that column could be lost. The data in that column will be cast from `NVarChar(1000)` to `VarChar(255)`.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[BlogPost] ALTER COLUMN [imageUrl] VARCHAR(500) NOT NULL;
ALTER TABLE [dbo].[BlogPost] ALTER COLUMN [header] VARCHAR(255) NOT NULL;
ALTER TABLE [dbo].[BlogPost] ALTER COLUMN [summary] TEXT NOT NULL;
ALTER TABLE [dbo].[BlogPost] ALTER COLUMN [content] TEXT NOT NULL;
ALTER TABLE [dbo].[BlogPost] ALTER COLUMN [author] VARCHAR(255) NOT NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH

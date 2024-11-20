BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[User] (
    [cookieId] VARCHAR(255) NOT NULL,
    [CreatedOnUtc] DATETIME2 NOT NULL CONSTRAINT [User_CreatedOnUtc_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [User_pkey] PRIMARY KEY CLUSTERED ([cookieId]),
    CONSTRAINT [User_cookieId_key] UNIQUE NONCLUSTERED ([cookieId])
);

-- CreateTable
CREATE TABLE [dbo].[Comment] (
    [commentId] INT NOT NULL IDENTITY(1,1),
    [parentCommentId] INT,
    [content] TEXT NOT NULL,
    [avatar] VARCHAR(255),
    [cookieId] VARCHAR(255) NOT NULL,
    [CreatedOnUtc] DATETIME2 NOT NULL CONSTRAINT [Comment_CreatedOnUtc_df] DEFAULT CURRENT_TIMESTAMP,
    [UpdatedOnUtc] DATETIME2,
    [isDeleted] BIT NOT NULL CONSTRAINT [Comment_isDeleted_df] DEFAULT 0,
    [blogId] INT NOT NULL,
    CONSTRAINT [Comment_pkey] PRIMARY KEY CLUSTERED ([commentId])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [Comment_parentCommentId_idx] ON [dbo].[Comment]([parentCommentId]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [Comment_blogId_idx] ON [dbo].[Comment]([blogId]);

-- AddForeignKey
ALTER TABLE [dbo].[Comment] ADD CONSTRAINT [Comment_blogId_fkey] FOREIGN KEY ([blogId]) REFERENCES [dbo].[BlogPost]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Comment] ADD CONSTRAINT [Comment_parentCommentId_fkey] FOREIGN KEY ([parentCommentId]) REFERENCES [dbo].[Comment]([commentId]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Comment] ADD CONSTRAINT [Comment_cookieId_fkey] FOREIGN KEY ([cookieId]) REFERENCES [dbo].[User]([cookieId]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH

BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[BlogPost] (
    [id] INT NOT NULL IDENTITY(1,1),
    [imageUrl] NVARCHAR(1000) NOT NULL,
    [header] NVARCHAR(1000) NOT NULL,
    [summary] NVARCHAR(1000) NOT NULL,
    [content] NVARCHAR(1000) NOT NULL,
    [author] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [BlogPost_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [categoryId] INT NOT NULL,
    CONSTRAINT [BlogPost_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Category] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000),
    CONSTRAINT [Category_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Tag] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Tag_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Tag_name_key] UNIQUE NONCLUSTERED ([name])
);

-- CreateTable
CREATE TABLE [dbo].[BlogPostTag] (
    [blogPostId] INT NOT NULL,
    [tagId] INT NOT NULL,
    CONSTRAINT [BlogPostTag_pkey] PRIMARY KEY CLUSTERED ([blogPostId],[tagId])
);

-- AddForeignKey
ALTER TABLE [dbo].[BlogPost] ADD CONSTRAINT [BlogPost_categoryId_fkey] FOREIGN KEY ([categoryId]) REFERENCES [dbo].[Category]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[BlogPostTag] ADD CONSTRAINT [BlogPostTag_blogPostId_fkey] FOREIGN KEY ([blogPostId]) REFERENCES [dbo].[BlogPost]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[BlogPostTag] ADD CONSTRAINT [BlogPostTag_tagId_fkey] FOREIGN KEY ([tagId]) REFERENCES [dbo].[Tag]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH

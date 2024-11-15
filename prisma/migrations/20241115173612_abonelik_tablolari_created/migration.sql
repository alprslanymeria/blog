BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Subscribers] (
    [id] INT NOT NULL IDENTITY(1,1),
    [email] NVARCHAR(1000) NOT NULL,
    [status] NVARCHAR(1000) NOT NULL CONSTRAINT [Subscribers_status_df] DEFAULT 'ACTIVE',
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Subscribers_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Subscribers_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Subscribers_email_key] UNIQUE NONCLUSTERED ([email])
);

-- CreateTable
CREATE TABLE [dbo].[Categories] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Categories_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Categories_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[SubscriberCategories] (
    [subscriberId] INT NOT NULL,
    [categoryId] INT NOT NULL,
    [subscribedAt] DATETIME2 NOT NULL CONSTRAINT [SubscriberCategories_subscribedAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [SubscriberCategories_pkey] PRIMARY KEY CLUSTERED ([subscriberId],[categoryId])
);

-- AddForeignKey
ALTER TABLE [dbo].[SubscriberCategories] ADD CONSTRAINT [SubscriberCategories_subscriberId_fkey] FOREIGN KEY ([subscriberId]) REFERENCES [dbo].[Subscribers]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[SubscriberCategories] ADD CONSTRAINT [SubscriberCategories_categoryId_fkey] FOREIGN KEY ([categoryId]) REFERENCES [dbo].[Categories]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH

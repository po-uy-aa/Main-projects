-- ====================================
--Create the Thirlemere Database
--Author: Mohammadpouya
-- Date Created: 5/08/2022
-- ====================================
use master;
Go
IF EXISTS ( SELECT  *
			FROM	master..sysdatabases
			WHERE	name = 'Thirlemere'
		   )
DROP DATABASE Thirlemere;
GO
CREATE DATABASE Thirlemere;
GO
USE Thirlemere;
GO
SET DATEFORMAT dmy;
GO
-- Tables
-- Table: horse
CREATE TABLE HORSE (
horse_id       NCHAR(3),
horse_name     NVARCHAR(15) NOT NULL,
colour         NVARCHAR(8)  NOT NULL,
sire           NCHAR(3) NULL,
dam            NCHAR(3) NULL,
born           SMALLINT NOT NULL,
died           SMALLINT NULL,
gender         NCHAR(1) NOT NULL,
CONSTRAINT horse_PK PRIMARY KEY (horse_id),
CONSTRAINT horse_sire_FK FOREIGN KEY (sire) REFERENCES horse,
CONSTRAINT horse_dam_FK FOREIGN KEY (dam) REFERENCES horse);
-- Tables
-- Table: entry
CREATE TABLE [ENTRY] (
event_id      NCHAR(4) NOT NULL,
horse_id      NCHAR(3) NOT NULL,
place         TINYINT NULL,
CONSTRAINT entry_PK PRIMARY KEY (event_id, horse_id),
CONSTRAINT entry_horse_FK FOREIGN KEY (horse_id) REFERENCES horse);
-- Tables
-- Table: show
CREATE TABLE SHOW (
show_id            NCHAR(2),
show_name          NVARCHAR(15) NOT NULL,
show_held          DATETIME NOT NULL,
show_address       NVARCHAR(30) NOT NULL,
CONSTRAINT show_PK PRIMARY KEY (show_id));
-- Tables
-- Table: event
CREATE TABLE  EVENT (
event_id         NCHAR(4),
show_id          NCHAR(2) NOT NULL,
event_name       NVARCHAR(15) NOT NULL,
judge_id         NCHAR(2) NULL,
CONSTRAINT event_PK PRIMARY KEY (event_id),
CONSTRAINT event_show_FK FOREIGN KEY (show_id) REFERENCES show);
-- Tables
-- Table: judge
CREATE TABLE JUDGE (
judge_id          NCHAR(2),
judge_name        NVARCHAR(15) NOT NULL,
[address]         NVARCHAR(30) NULL,
CONSTRAINT judge_PK PRIMARY KEY (judge_id));
-- Tables
-- Table: prize
CREATE TABLE PRIZE (
event_code        NCHAR(4),
place             TINYINT,
prizemoney         MONEY NULL,
CONSTRAINT prize_PK PRIMARY KEY (event_code, place),
CONSTRAINT prize_event_FK FOREIGN KEY (event_code) REFERENCES event);


ALTER TABLE event ADD CONSTRAINT event_judge_FK FOREIGN KEY (judge_id) REFERENCES judge (judge_id);
ALTER TABLE entry ADD CONSTRAINT entry_event_FK FOREIGN KEY (event_id) REFERENCES event (event_id);

-- =====================================================
Bulk Insert [Thirlemere_SKY_SAND].[dbo].[ENTRY]
FROM '"E:\courses\SQL\ThirlemereFlatFileData\EntryData.csv"'
WITH(
    Format ='CSV',--Comma separated values file.
    FIELDQUOTE='''',
    FIRSTROW=2,
    FIELDTERMINATOR=',',
    ROWTERMINATOR='\n',
    ERRORFILE='"E:\courses\SQL\ThirlemereFlatFileData\EntryDataError.log"'
);
Bulk Insert [Thirlemere_SKY_SAND].[dbo].[EVENT]
FROM '"E:\courses\SQL\ThirlemereFlatFileData\EventData.csv"'
WITH(
    Format ='CSV',--Comma separated values file.
    FIELDQUOTE='''',
    FIRSTROW=2,
    FIELDTERMINATOR=',',
    ROWTERMINATOR='\n',
    ERRORFILE='"E:\courses\SQL\ThirlemereFlatFileData\EntryDataError.log"'
);
Bulk Insert [Thirlemere_SKY_SAND].[dbo].[HORSE]
FROM '"E:\courses\SQL\ThirlemereFlatFileData\HorseData.csv"'
WITH(
    Format ='CSV',--Comma separated values file.
    FIELDQUOTE='''',
    FIRSTROW=2,
    FIELDTERMINATOR=',',
    ROWTERMINATOR='\n',
    ERRORFILE='"E:\courses\SQL\ThirlemereFlatFileData\EntryDataError.log"'
);
Bulk Insert [Thirlemere_SKY_SAND].[dbo].[JUDGE]
FROM '"E:\courses\SQL\ThirlemereFlatFileData\JudgeData.csv"'
WITH(
    Format ='CSV',--Comma separated values file.
    FIELDQUOTE='''',
    FIRSTROW=2,
    FIELDTERMINATOR=',',
    ROWTERMINATOR='\n',
    ERRORFILE='"E:\courses\SQL\ThirlemereFlatFileData\EntryDataError.log"'
);
Bulk Insert [Thirlemere_SKY_SAND].[dbo].[PRIZE]
FROM '"E:\courses\SQL\ThirlemereFlatFileData\PrizeData.csv"'
WITH(
    Format ='CSV',--Comma separated values file.
    FIELDQUOTE='''',
    FIRSTROW=2,
    FIELDTERMINATOR=',',
    ROWTERMINATOR='\n',
    ERRORFILE='"E:\courses\SQL\ThirlemereFlatFileData\EntryDataError.log"'
);
Bulk Insert [Thirlemere_SKY_SAND].[dbo].[SHOW]
FROM '"E:\courses\SQL\ThirlemereFlatFileData\ShowData.csv"'
WITH(
    Format ='CSV',--Comma separated values file.
    FIELDQUOTE='''',
    FIRSTROW=2,
    FIELDTERMINATOR=',',
    ROWTERMINATOR='\n',
    ERRORFILE='"E:\courses\SQL\ThirlemereFlatFileData\EntryDataError.log"'
);
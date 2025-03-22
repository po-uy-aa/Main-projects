-- ====================================
--Create the Medical Database
--Author: Mohammadpouya
-- Date Created: 25/08/2022
-- ====================================
use master;
Go
IF EXISTS ( SELECT  *
			FROM	master..sysdatabases
			WHERE	name = 'Medical'
		   )
DROP DATABASE Medical;
GO
CREATE DATABASE Medical;
GO
USE Medical;
GO
-- Table: Patient
CREATE TABLE Patient (
Patient_ID    int NOT NULL,
Title       Nvarchar(20) NULL,
Firstname     NVARCHAR(50) NOT NULL,
MiddleInitial         NCHAR(1) NULL,
Lastname           NVARCHAR(50)NOT NULL,
HouseUnitLotNum           NVARCHAR(5)NOT NULL,
Street          NVARCHAR(50)NOT NULL,
Suburb           NVARCHAR(50)NOT NULL,
[State]         NVARCHAR(3)NOT NULL,
PostCode         NCHAR(4)NOT NULL,
HomePhone        NCHAR(10)NULL,
MobilePhone      NCHAR(10)NULL,
MedicareNumber    NCHAR(16)NULL,
DateOfBirth        Date NOT NULL,
Gender             NVARCHAR(20) NOT NULL
CONSTRAINT Patient_PK PRIMARY KEY (Patient_ID)
);
-- Table: Practitioner
CREATE TABLE Practitioner (
Practitioner_ID    int NOT NULL,
MedicalRegistrationNumber NChar(11) NOT NULL,
Title     NVARCHAR(20) NULL,
Firstname  NVARCHAR(50)NOT NULL,
MiddleInitial         NCHAR(1) NULL,
Lastname           NVARCHAR(50) NOT NULL,
HouseUnitLotNum           NVARCHAR(5)NOT NULL ,
Street          NVARCHAR(50)NOT NULL,
Suburb           NVARCHAR(50)NOT NULL ,
[State]         NVARCHAR(3)NOT NULL,
PostCode         NCHAR(4)NOT NULL,
HomePhone        NCHAR(10)NULL,
MobilePhone      NCHAR(10)NULL,
MedicareNumber    NCHAR(16)NULL,
DateOfBirth        Date NOT NULL,
Gender             NVARCHAR(20) NOT NULL,
PractitionerType_Ref    NVARCHAR(50)
CONSTRAINT Practitioner_PK PRIMARY KEY (Practitioner_ID) NOT NULL
);
-- Table: Availability
CREATE TABLE [Availability] (
WeekDayName_Ref           NVARCHAR(9) NOT NULL,
Practitioner_Ref          int NOT NULL
CONSTRAINT Availability_PK PRIMARY KEY (WeekDayName_Ref,Practitioner_Ref),
CONSTRAINT Availability_Practitioner_FK FOREIGN KEY (Practitioner_Ref)REFERENCES Practitioner
);
-- Table: WeekDays
CREATE TABLE WeekDays (
WeekDayName NVARCHAR(9)NOT NULL
CONSTRAINT  WeekDays_PK PRIMARY KEY (WeekDayName)
);
-- Table: PractitionerType
CREATE TABLE PractitionerType (
PractitionerType NVARCHAR(50) NOT NULL
CONSTRAINT  PractitionerType_PK PRIMARY KEY (PractitionerType)
);
-- Table:Appointment
CREATE TABLE Appointment (
Practitioner_Ref          int NOT NULL,
AppDate             Date NOT NULL,
AppStartDate         Time NOT NULL,
Patient_Ref    int NOT NULL
CONSTRAINT Appointment_PK PRIMARY KEY (Practitioner_Ref,AppDate,AppStartDate),
CONSTRAINT Appointment_Practitioner_FK FOREIGN KEY (Practitioner_Ref)REFERENCES Practitioner,
CONSTRAINT Appointment_Patient_FK FOREIGN KEY (Patient_Ref)REFERENCES Patient
);
-- Table:PathTestReqs
CREATE TABLE PathTestReqs (
Practitioner_Ref          int NOT NULL,
DateOrdered             Date NOT NULL,
TimeOrdered        Time NOT NULL,
Patient_Ref    int NOT NULL,
Test_Ref   NVARCHAR(20) NOT NULL
CONSTRAINT PathTestReqs_PK PRIMARY KEY (Practitioner_Ref,DateOrdered,TimeOrdered),
CONSTRAINT PathTestReqs_Practitioner_FK FOREIGN KEY (Practitioner_Ref)REFERENCES Practitioner,
CONSTRAINT PathTestReqs_Patient_FK FOREIGN KEY (Patient_Ref)REFERENCES Patient
);
-- Table:TestType
CREATE TABLE TestType (
Test_Code          NVARCHAR(20) NOT NULL ,
TestName             NVARCHAR(200) NOT NULL,
[Description]       NVARCHAR(500) NULL
CONSTRAINT TestType_PK PRIMARY KEY (Test_Code)
);


--======================================Bulk Inserts==================================================
Bulk Insert [Medical].[dbo].[Patient]
FROM 'G:\SQL\Medical CSV Data\15_PatientData.csv'
WITH(
FORMAT = 'CSV',
FIELDQUOTE = '''',
FIRSTROW = 1,
FIELDTERMINATOR = ',',
ROWTERMINATOR = '\n'
);
Bulk Insert [Medical].[dbo].[Practitioner]
FROM'G:\SQL\Medical CSV Data\16_PractitionerData.csv'
WITH(
FORMAT='csv',
FIELDQUOTE='''',
FIRSTROW=1,
FIELDTERMINATOR=',',
ROWTERMINATOR='\n'
);
Bulk Insert [Medical].[dbo].[Availability]
FROM'G:\SQL\Medical CSV Data\13_AvailabilityData.csv'
WITH(
FORMAT='CSV',
FIELDQUOTE='''',
FIRSTROW=1,
FIELDTERMINATOR=',',
ROWTERMINATOR='\n'
);
Bulk Insert [Medical].[dbo].[WeekDays]
FROM'G:\SQL\Medical CSV Data\19_WeekDaysData.csv'
WITH(
FORMAT='CSV',
FIELDQUOTE='''',
FIRSTROW=1,
FIELDTERMINATOR=',',
ROWTERMINATOR='\n'
);
Bulk Insert [Medical].[dbo].[PractitionerType]
FROM'G:\SQL\Medical CSV Data\17_PractitionerTypeData.csv'
WITH(
FORMAT='CSV',
FIELDQUOTE='''',
FIRSTROW=1,
FIELDTERMINATOR=',',
ROWTERMINATOR='\n'
);
Bulk Insert [Medical].[dbo].[Appointment]
FROM'G:\SQL\Medical CSV Data\12_AppointmentData.csv'
WITH(
FORMAT='CSV',
FIELDQUOTE='''',
FIRSTROW=1,
FIELDTERMINATOR=',',
ROWTERMINATOR='\n'
);
Bulk Insert [Medical].[dbo].[PathTestReqs]
FROM'G:\SQL\Medical CSV Data\14_PathTestReqsData.csv'
WITH(
FORMAT='CSV',
FIELDQUOTE='''',
FIRSTROW=1,
FIELDTERMINATOR=',',
ROWTERMINATOR='\n'
);
Bulk Insert [Medical].[dbo].[TestType]
FROM'G:\SQL\Medical CSV Data\18_TestTypeData.csv'
WITH(
FORMAT='CSV',
FIELDQUOTE='''',
FIRSTROW=1,
FIELDTERMINATOR=',',
ROWTERMINATOR='\n'
);
ALTER TABLE Practitioner ADD CONSTRAINT MedicalRegistrationNumber_AK UNIQUE NONCLUSTERED (MedicalRegistrationNumber);
ALTER TABLE Appointment ADD CONSTRAINT Appointment_AK UNIQUE NONCLUSTERED (AppDate,AppStartDate,Patient_Ref);
ALTER TABLE Practitioner ADD CONSTRAINT Practitioner_PractitionerType_FK FOREIGN KEY (PractitionerType_Ref) REFERENCES PractitionerType;
ALTER TABLE [Availability] ADD CONSTRAINT Availability_WeekDays_FK FOREIGN KEY (WeekDayName_Ref)REFERENCES WeekDays;
ALTER TABLE PathTestReqs ADD CONSTRAINT PathTestReqs_TestType_FK FOREIGN KEY (Test_Ref)REFERENCES TestType;
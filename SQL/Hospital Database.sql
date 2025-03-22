-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2021-07-28 05:52:09.265
-- Create the Hospital Database
-- Author: Peter Panagopoulos
-- Date Created: 28/07/2021
-- Version 1.0
CREATE DATABASE Hospital;
GO
USE Hospital;
GO
-- tables
-- Table: ADMISSION
CREATE TABLE ADMISSION (
    Admission_Id int  NOT NULL,
    Patient_Id int  NOT NULL,
    Admission_date date  NOT NULL,
    Expected_op char(2)  NOT NULL,
    Admitted_by int  NULL,
    Ward_code char(1)  NULL,
    Discharge_date date  NULL,
    CONSTRAINT ADMISSION_pk PRIMARY KEY  (Admission_Id)
);
GO
-- Table: OBSERVATION
CREATE TABLE OBSERVATION (
    Admission_Id int  NOT NULL,
    Observ_date date  NOT NULL,
    Observ_time time(6)  NOT NULL,
    Observ_type varchar(10)  NOT NULL,
    Observ_value smallint  NOT NULL,
    Staff_Id int  NOT NULL,
    CONSTRAINT OBSERVATION_pk PRIMARY KEY  (Admission_Id,Observ_date,Observ_time,Observ_type)
);
GO
-- Table: OPERATION
CREATE TABLE OPERATION (
    Operation_Id int  NOT NULL,
    Actual_Op char(2)  NOT NULL,
    Admission_Id int  NOT NULL,
    Op_Date date  NOT NULL,
    Surgeon int  NOT NULL,
    Aneasthetist int  NOT NULL,
    CONSTRAINT OPERATION_pk PRIMARY KEY  (Operation_Id)
);
GO
-- Table: OPERATION_TYPE
CREATE TABLE OPERATION_TYPE (
    Op_code char(2)  NOT NULL,
    Operation_name varchar(50)  NOT NULL,
    Theatre_fee money  NOT NULL,
    Days_in smallint  NOT NULL,
    CONSTRAINT OPERATION_TYPE_pk PRIMARY KEY  (Op_code)
);
GO
-- Table: PERSON
CREATE TABLE PERSON (
    Person_Id int  NOT NULL,
    Surname varchar(30)  NOT NULL,
    First_name varchar(30)  NOT NULL,
    Sex char(1)  NOT NULL,
    Birth_date date  NOT NULL,
    Street varchar(50)  NOT NULL,
    Town varchar(50)  NOT NULL,
    Postcode char(4)  NOT NULL,
    Next_Of_Kin int  NULL,
  --CONSTRAINT postCode_chk CHECK (WHERE [Postcode] LIKE ('[0-9]', 4)),
    CONSTRAINT PERSON_pk PRIMARY KEY  (Person_Id)
);
GO
-- Table: STAFF
CREATE TABLE STAFF (
    Person_Id int  NOT NULL,
    Start_date date  NOT NULL,
    Staff_type varchar(30)  NOT NULL,
    CONSTRAINT STAFF_pk PRIMARY KEY  (Person_Id)
);
GO
-- Table: WARD
CREATE TABLE WARD (
    Ward_code char(1)  NOT NULL,
    Ward_name varchar(30)  NOT NULL,
    Bed_count tinyint  NOT NULL,
    Opened_date date  NOT NULL,
    Last_painted_date date  NULL,
    Daily_charge money  NOT NULL,
    CONSTRAINT WARD_pk PRIMARY KEY  (Ward_code)
);
GO
-- ===============================DATA INSERTS=========================
SET DATEFORMAT DMY;
GO
INSERT INTO PERSON (Person_id,Surname,First_name,Sex,Birth_date,Street,Town,Postcode,Next_of_kin) VALUES 
(101, 'Black', 'Barry', 'M', '31/12/1959', '11 High St.', 'Cooma', '2630', 102),
(102, 'Black', 'Mary', 'F', '1/01/1963', '11 High St.', 'Cooma', '2630', NULL),
(103, 'Strathclyde', 'Albert', 'M', '5/05/1955', '3 The Mews', 'Hawthorn', '4171', 104),
(104, 'Strathclyde', 'Alice', 'F', '7/07/1955', '3 The Mews', 'Hawthorn', '4171', 103),
(105, 'Green', 'Gill', 'F', '6/06/1966', '124 Main St.', 'Young ', '2594', 106),
(106, 'Green', 'Graham', 'M', '4/04/1967', '124 Main St.', 'Young', '2594', 105),
(107, 'Gray', 'Lesley', 'F', '2/02/1972', '130 Main St.', 'Young', '2594', 109),
(109, 'Gray', 'John', 'M', '4/04/1972', '130 Main St.', 'Young', '2594', 107),
(110, 'Samuelson', 'Thomas', 'M', '1/01/1964', '17 The Mews', 'Hawthorn', '4171', NULL), 
(111, 'Abrahams', 'Mary', 'F', '5/05/1967', '21 The Esplanade', 'Ivanhoe  ', '2878', NULL), 
(112, 'Aumann', 'Monica', 'F', '5/05/1955', '29 The Esplanade', 'Ivanhoe', '2878', NULL),
(113, 'Brown', 'Melissa', 'F', '8/08/1984', '11 East St.', 'Cooma', '2630', NULL),
(114, 'Napier', 'Mary', 'F', '1/01/1971', '163 New Rd.', 'Henty', '2658', NULL),
(115, 'Nelson', 'Nigel', 'M', '2/02/1972', '165 Young Rd.', 'Temora', '2666', NULL), 
(116, 'Newman', 'Olive', 'F', '3/03/1973', '21 Olympic Way', 'Henty', '2658', NULL), 
(117, 'Gray', 'Lesley', 'M', '31/12/1989', '130 Main St.', 'Young', '2594', 107);
GO
INSERT INTO ADMISSION (Admission_id,Patient_id,Admission_date,Expected_op,Admitted_by,Ward_code,Discharge_date) VALUES 
(205,101,'2/02/1992','HB',114,'P','16/02/1992'),
(274,109,'1/09/1994','AP',114,'P','9/09/1994'),
(275,101,'1/09/1994','HB',115,'L',NULL),
(276,106,'24/08/1994','LA',114,'P','2/09/1994'),
(277,114,'2/09/1994','AP',115,'P','10/09/1994'),
(278,105,'1/01/1995','HB', NULL, NULL,NULL),
(279,113,'3/09/1994','TS',115,'F','6/09/1994'),
(280,117,'3/09/1994','AP',115,'F',NULL);
GO
INSERT INTO OBSERVATION (Admission_id,Observ_date,Observ_time,Observ_type,Observ_value,Staff_id) VALUES
(205,'2/02/1992','15:00','Temp',38,114),
(274,'4/09/1994','06:01','Temp',39,116),
(275,'1/09/1994','14:00','Pulse',74,115),
(275,'1/09/1994','14:00','Temp',38,115),
(275,'3/09/1994','18:00','Temp',40,116),
(275,'3/09/1994','22:00','Temp',40,116),
(275,'4/09/1994','06:10','Pulse',82,116),
(275,'4/09/1994','06:10','Temp',38,116),
(277,'4/09/1994','06:00','Temp',39,115);
GO
INSERT INTO OPERATION (Operation_id,Actual_op,Admission_id,Op_date,Surgeon,Aneasthetist) VALUES
(317,'HB',205,'4/02/1992',110,111),
(355,'LA',276,'25/08/1994',103,111),
(360,'AP',277,'2/09/1994',103,111),
(361,'AP',274,'2/09/1994',103,111),
(362,'HT',275,'3/09/1994',110,112),
(363,'AP',276,'3/09/1994',103,111);
GO
INSERT INTO OPERATION_TYPE (Op_code,Operation_name,Theatre_fee,Days_in) VALUES
('AP','Appendicectomy',500.00,5),
('HB','Heart Bypass',2000.00,14),
('HT','Heart Transplant',5000.00,30),
('HY','Hysterectomy',800.00,7),
('LA','Leg Amputation',1500.00,10),
('TS','Tonsilectomy',700.00,7);
GO
INSERT INTO STAFF (Person_id,[Start_date],Staff_type) VALUES
(103,'1/01/1980','Surgeon'),
(110,'5/05/1985','Surgeon'),
(111,'1/01/1990','Anaesthetist'),
(112,'3/03/1990','Anaesthetist'),
(114,'1/01/1991','Nurse'),
(115,'2/02/1992','Nurse'),
(116,'3/03/1993','Nurse');
GO
INSERT INTO WARD (Ward_code,Ward_name,Bed_count,Opened_date,Last_painted_date,Daily_charge) VALUES
('F','Flemming',15,'15/11/1990',NULL,230.00),
('L','Lister',8,'18/12/2000','20/12/1984',200.00),
('P','Pasteur',10,'12/12/1968','12/12/1986',150.00);
GO
-- ====================foreign keys===================================
-- Reference: ADMISSION_OPERATION_TYPE (table: ADMISSION)
ALTER TABLE ADMISSION ADD CONSTRAINT ADMISSION_OPERATION_TYPE
    FOREIGN KEY (Expected_op)
    REFERENCES OPERATION_TYPE (Op_code);
GO
-- Reference: ADMISSION_PERSON (table: ADMISSION)
ALTER TABLE ADMISSION ADD CONSTRAINT ADMISSION_PERSON
    FOREIGN KEY (Patient_Id)
    REFERENCES PERSON (Person_Id);
GO
-- Reference: ADMISSION_STAFF (table: ADMISSION)
ALTER TABLE ADMISSION ADD CONSTRAINT ADMISSION_STAFF
    FOREIGN KEY (Admitted_by)
    REFERENCES STAFF (Person_Id);
GO
-- Reference: ADMISSION_WARD (table: ADMISSION)
ALTER TABLE ADMISSION ADD CONSTRAINT ADMISSION_WARD
    FOREIGN KEY (Ward_code)
    REFERENCES WARD (Ward_code);
GO
-- Reference: OBSERVATION_ADMISSION (table: OBSERVATION)
ALTER TABLE OBSERVATION ADD CONSTRAINT OBSERVATION_ADMISSION
    FOREIGN KEY (Admission_Id)
    REFERENCES ADMISSION (Admission_Id);
GO
-- Reference: OBSERVATION_STAFF (table: OBSERVATION)
ALTER TABLE OBSERVATION ADD CONSTRAINT OBSERVATION_STAFF
    FOREIGN KEY (Staff_Id)
    REFERENCES STAFF (Person_Id);
GO
-- Reference: OPERATION_ADMISSION (table: OPERATION)
ALTER TABLE OPERATION ADD CONSTRAINT OPERATION_ADMISSION
    FOREIGN KEY (Admission_Id)
    REFERENCES ADMISSION (Admission_Id);
GO
-- Reference: OPERATION_OPERATION_TYPE (table: OPERATION)
ALTER TABLE OPERATION ADD CONSTRAINT OPERATION_OPERATION_TYPE
    FOREIGN KEY (Actual_Op)
    REFERENCES OPERATION_TYPE (Op_code);
GO
-- Reference: PERSON_PERSON (table: PERSON)
ALTER TABLE PERSON ADD CONSTRAINT NEXToFKIN_PERSON
    FOREIGN KEY (Next_Of_Kin)
    REFERENCES PERSON (Person_Id);
GO
-- Reference: STAFF_PERSON (table: STAFF)
ALTER TABLE STAFF ADD CONSTRAINT STAFF_PERSON
    FOREIGN KEY (Person_Id)
    REFERENCES PERSON (Person_Id);
GO
-- Reference: operation_aneasthetist_fk (table: OPERATION)
ALTER TABLE OPERATION ADD CONSTRAINT operation_aneasthetist_fk
    FOREIGN KEY (Aneasthetist)
    REFERENCES STAFF (Person_Id);
GO
-- Reference: operation_surgeon_fk (table: OPERATION)
ALTER TABLE OPERATION ADD CONSTRAINT operation_surgeon_fk
    FOREIGN KEY (Surgeon)
    REFERENCES STAFF (Person_Id);
GO
-- End of file.

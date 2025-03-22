-- ====================================
--Create the Rob's Rentals Database
--Author:    Pouya
-- Date Created: 19/07/2022
-- ====================================
USE MASTER
GO 
IF EXISTS ( SELECT * 
FROM MASTER ..sysdatabases
WHERE name= N'RobsRentals_MINT'
)
DROP DATABASE RobsRentals_MINT;
Go
CREATE DATABASE RobsRentals_MINT;
GO
USE RobsRentals_MINT;
GO
CREATE TABLE CUSTOMEER(
cust_num     NCHAR(4),
title       NVARCHAR(4),
cust_name   NVARCHAR (20)
CONSTRAINT customer_PK PRIMARY KEY (cust_num)
);
GO
CREATE TABLE MODEL(
model_code    NVARCHAR(5),
model_name    NVARCHAR(40),
mth_charge    MONEY
CONSTRAINT model_PK PRIMARY KEY (model_code)
);
GO
CREATE TABLE APPLIANCE(
stock_num        NCHAR(4),
model_num        NVARCHAR(5),
condition        NCHAR(1),
date_maint       DATETIME
CONSTRAINT appliance_PK PRIMARY KEY (stock_num),
CONSTRAINT appliance_model_FK FOREIGN KEY (model_num) REFERENCES MODEL
);
GO
CREATE TABLE   HIRE(
stock_num           Nchar(4),
date_hired          Datetime,
cust_num            Nchar(4),
paid_till           Datetime,
date_ret            Datetime
CONSTRAINT hire_PK PRIMARY KEY (stock_num,date_hired),
CONSTRAINT hire_appliance_FK FOREIGN KEY (stock_num) REFERENCES APPLIANCE,
CONSTRAINT hire_customer_FK FOREIGN KEY (cust_num) REFERENCES CUSTOMEER
);
USE RobsRentals_MINT;
GO
SET DATEFORMAT dmy;
GO
INSERT INTO CUSTOMEER VALUES ('1001','Mr','Isaac Newton')
INSERT INTO CUSTOMEER VALUES ('1002','Ms','Freda Bloggs')
INSERT INTO CUSTOMEER VALUES ('1003','Dr','Stan Smith')
INSERT INTO CUSTOMEER VALUES ('1004','Ms','Alice Adams')
INSERT INTO CUSTOMEER VALUES ('1005','Mr','Max Miller')
INSERT INTO CUSTOMEER VALUES ('1006','Dr','Zeg Zebra')
INSERT INTO model VALUES ('AX323','50 cm National Colour TV',89)
INSERT INTO model VALUES ('AX747','90 cm Sanyo Colour TV',169)
INSERT INTO model VALUES ('BX111','4 channel integrated video rectifier',45)
INSERT INTO appliance VALUES ('2001','AX323','E',null)
INSERT INTO appliance VALUES ('2002','AX323','S','07/07/1991')
INSERT INTO appliance VALUES ('2003','BX111','R',null)
INSERT INTO appliance VALUES ('2004','AX323','E','06/06/1991')
INSERT INTO appliance VALUES ('2005','AX747','E',null)
INSERT INTO appliance VALUES ('2006','AX747','R','08/08/1991')
INSERT INTO hire VALUES ('2001','01/01/1980','1005','01/02/1980','01/02/1980')
INSERT INTO hire VALUES ('2001','05/01/1990','1001','05/03/1990','05/03/1990')
INSERT INTO hire VALUES ('2001','08/03/1990','1002','07/06/1990','08/06/1990')
INSERT INTO hire VALUES ('2002','08/03/1990','1002','08/04/1990','08/04/1990')
INSERT INTO hire VALUES ('2003','05/01/1990','1001','05/07/1990','05/07/1990')
INSERT INTO hire VALUES ('2004','05/01/1990','1001','05/02/1990','05/02/1990')
INSERT INTO hire VALUES ('2004','01/02/1991','1001','02/02/1992',null)
INSERT INTO hire VALUES ('2005','10/02/1991','1003','12/12/1992',null)
INSERT INTO hire VALUES ('2006','01/07/1989','1003','30/11/1989','30/11/1989')
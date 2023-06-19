--create database EMedicine


create table Users(ID INT IDENTITY(1,1) PRIMARY KEY, FirstName VARCHAR(100),LastName VARCHAR(100), Password VARCHAR(100),Email VARCHAR(100), Fund DECIMAL(18,2),Type VARCHAR(100),Status INT, CreatedOn Datetime);

Create TABLE Medicine(ID INT IDENTITY(1,1) PRIMARY KEY, Name VARCHAR(100), Manufacturer VARCHAR(100), UnitPrice Decimal(18,2),Discount DECIMAL(18,2), Quantity INT, ExpDate Datetime, ImageURL VARCHAR(100), Status INT);


Create Table Cart(ID INT Identity(1,1) PRIMARY KEY,UserId Int, MedicineID Int,UnitPrice Decimal(18,2),Discount Decimal(18,2) ,Quantity INT,TotalPrice DECIMAL(18,2));

Create Table Orders(ID Int Identity(1,1) PRIMARY KEY, UserID Int,OrderNo VARCHAR(100), OrderTotal DECIMAL(18,2),OrderStatus VARCHAR(100));

Create Table OrderItems(ID Int Identity(1,1) PRIMARY KEY, OrderID Int,MedicineID Int, UnitPrice DECIMAL(18,2),Discount Decimal(18,2), Quantity INT, TotalPrice Decimal(18,2));



using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace StudentGradeCalculator
{
    public partial class Form1 : Form
    {
        public Form1()//constructor
        {
            InitializeComponent();

            //write the code to populate the listbox with name listStudentName with the details from import/students.csv file
            //CSV File Format: <student id>, <student first name>, <student last name>

            //open the file, read each line from the file, format the data and then add into a list.
            List<StudentRecord> allStudentRecords = new List<StudentRecord>();

            using (var reader = new StreamReader(@"..\..\import/students.csv"))
            {

               

                while (!reader.EndOfStream)//read until the end of the file
                {
                    string line = reader.ReadLine();//get the content of each line from the file students.csv for ex: 1,Mike,Spencer

                    string[] values = line.Split(','); //{1, Mark,Spencer}//split method splits the line based on , and keep them inside an array.

                    string studentID = values[0];// this gives me first element in the array. In this instance, it is student id
                    string firstName = values[1]; //student first name
                    string lastName = values[2];//student last name


                    string studentName = firstName + " " + lastName; //combining first name and last name with a space in between give the student name


                    StudentRecord record = new StudentRecord();//creating an student record object for StudentRecord Class

                    record.Id = Convert.ToInt32(studentID);
                    record.Name = studentName; // set property

                    allStudentRecords.Add(record);//add student record into the list of student records

                   
                                        


                }

                listStudentName.DataSource = allStudentRecords;//assign the list with all the student records to the List Box with name listStudentName
                listStudentName.DisplayMember = "Name"; // use get property




            }



        }

        private void txtMark2_TextChanged(object sender, EventArgs e)
        {

        }

        private void btnCalculate_Click(object sender, EventArgs e)
        {

            StudentRecord  record = listStudentName.SelectedItem as StudentRecord;
            InternationalStudentRecord international = new InternationalStudentRecord();

            double mark1 = Convert.ToDouble(txtMark1.Text);
            double mark2 = Convert.ToDouble(txtMark2.Text);
            double mark3 = Convert.ToDouble(txtMark3.Text);
            double mark4 = Convert.ToDouble(txtMark4.Text);
            double mark5 = Convert.ToDouble(txtMark5.Text);

            double[] marks = { mark1, mark2, mark3, mark4, mark5 };//creating an array called marks with the 5 marks which we have taken form 5 text boxes

            record.Marks = marks;


            double w1 = Convert.ToDouble(txtWeighting1.Text);
            double w2 = Convert.ToDouble(txtWeighting2.Text);
            double w3 = Convert.ToDouble(txtWeighting3.Text);
            double w4 = Convert.ToDouble(txtWeighting4.Text);
            double w5 = Convert.ToDouble(txtWeighting5.Text);

            double[] weightings = { w1, w2, w3, w4, w5 };

            record.Weightings = weightings;

            MessageBox.Show("Grade "+record.Grade.ToString());

            if (txtHoursWorked.Text != "" && txtApprenticeCode.Text != "")
            {
                double hoursWorked = Convert.ToDouble(txtHoursWorked.Text);
                string apprenticeCode = txtApprenticeCode.Text;

                international.Id = record.Id;
                international.Name = record.Name;
                international.Marks = record.Marks;
                international.Weightings = record.Weightings;
                international.ApprenticeshopCode = apprenticeCode;
                international.HoursWorked = hoursWorked;
                international.QualificationStatus = InternationalStudentRecord.CalculateInternationalStudentStatus(record.Grade, hoursWorked);
                MessageBox.Show("Status" + international.QualificationStatus.ToString());

            }
            else
            {

                record.QualificationStatus = StudentRecord.CalculateDomesticStudentStatus(record.Grade);
                MessageBox.Show("Status" + record.QualificationStatus.ToString());
            }

          

            // record.QualificationStatus=record.Get


        }
    }
}

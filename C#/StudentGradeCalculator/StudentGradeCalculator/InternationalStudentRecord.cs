using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentGradeCalculator
{
    public class InternationalStudentRecord : StudentRecord
    {
        //properties
        public string ApprenticeshopCode;

        public double HoursWorked;

        //this method will calculate the Qualiication status for international student

        public static string CalculateInternationalStudentStatus(double grade, double hoursWorked)
        {
            string status = "";

            if(grade>=50 && hoursWorked > 200)
            {
                status = "Qualified";
            }
            else
            {
                status = "Not yet qualified";
            }

            return status;
        }
    }
}

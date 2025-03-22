using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentGradeCalculator
{
    public class StudentRecord
    {
        //Properties

        public int Id { get; set; }

        public string Name { get; set; }

        public double[] Marks { get; set; }

        public double[] Weightings { get; set; }

        public double Grade 
        { 
            get 
            {
                //Calculating the grade of the student
                double totalGrade = 0;
                for(int i = 0; i < Marks.Length; i++)
                {
                    totalGrade = totalGrade + Marks[i] * Weightings[i];
                }

                return totalGrade;
            } 
        }

        public string QualificationStatus { get; set; }

        //This method is used to calculate the qualification status for domestic student
        public static  string CalculateDomesticStudentStatus(double grade)
        {
            string status = "";
            if (grade >= 90)
            {
                status = "A";
            }
            else if (grade >= 70)
            {
                 status = "B";
            }
            else if(grade >= 50)
            {
                status = "C";

            }
            else
            {
                status = "F";
            }
            return status;
        }

        //Methods
    }
}

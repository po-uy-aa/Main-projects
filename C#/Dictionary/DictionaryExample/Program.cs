using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DictionaryExample
{
    internal class Program
    {
        static void Main(string[] args)
        {

            //ICT10 - Certificate 1
            //ICT20- Certificate 2
            //ICT30- Certificate 3
            //ICT40- Certificat 4

            //Dictionary in C#

            Dictionary<string, string> courses = new Dictionary<string, string>();

            courses.Add("ICT10", "Certificate I in IT");
            courses.Add("ICT20", "Certificate II in IT");
            courses.Add("ICT30", "Certificate III in IT");
            courses.Add("ICT40", "Certificate IV in IT");

            foreach(KeyValuePair<string,string> course in courses)
            {
                //Console.WriteLine("The key is " + course.Key + " value is "+ course.Value);
                Console.WriteLine("Course code is: " + course.Key + ", Course name is: " + course.Value);
            }


            /*
             * 
            1 Sunday
            2 Monday
            3 Tuesday
            4 Wednesday
            5 Thursday
            6 Friday
            7 Saturday
             
              */

            Dictionary<int, string> daysOfWeek = new Dictionary<int, string>();
            daysOfWeek.Add(1, "Sunday");
            daysOfWeek.Add(2, "Monday");
            daysOfWeek.Add(3, "Tuesday");
            daysOfWeek.Add(4, "Wednesday");
            daysOfWeek.Add(5, "Thursday");
            daysOfWeek.Add(6, "Friday");
            daysOfWeek.Add(7, "Saturday");

            foreach (KeyValuePair<int, string> day in daysOfWeek)
            {
                //Console.WriteLine("The key is " + course.Key + " value is "+ course.Value);
                Console.WriteLine("Day number is: " + day.Key + ", Day name is: " + day.Value);
            }

            //daysOfWeek.Add(2, "Sunday");// this line throws error

            daysOfWeek.Add(8, "Sunday");

            foreach (KeyValuePair<int, string> day in daysOfWeek)
            {
                //Console.WriteLine("The key is " + course.Key + " value is "+ course.Value);
                Console.WriteLine("Day number is: " + day.Key + ", Day name is: " + day.Value);
            }

            Console.WriteLine("Print only the keys in daysOfWeek Dictionary");
            //print only keys
            foreach (int no in daysOfWeek.Keys)
            {
                Console.WriteLine(no);
            }

            Console.WriteLine("Print only the values in daysOfWeek Dictionary");
            //print only keys
            foreach (string day in daysOfWeek.Values)
            {
                Console.WriteLine(day);
            }

            //printing only one particular value
            Console.WriteLine("Print only one particular value which has key value 5");
            //print only keys
            Console.WriteLine(daysOfWeek[5]);

            Console.WriteLine(courses["ICT30"]);

            //Console.WriteLine(courses["ICT50"]);// this one throws error because the key value "ICT50" does not exist in the dictionary courses


        }
    }
}

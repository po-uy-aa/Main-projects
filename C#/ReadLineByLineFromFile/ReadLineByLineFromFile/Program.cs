using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReadLineByLineFromFile
{
    internal class Program
    {
        static void Main(string[] args)
        {

            if (File.Exists("data.txt")){
                StreamReader reader = new StreamReader("data.txt");

                string line=reader.ReadLine();// this reads the first line
                Console.WriteLine(line);// this prints the first line

                while (line != null)
                {
                    line=reader.ReadLine();// this reads from the second line until the end of the file
                    Console.WriteLine(line);// this prints the second line to the end of the fil
                }

                reader.Close();
            }
        }
    }
}

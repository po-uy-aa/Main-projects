using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace RandomPasswordGenerator
{
    internal class Program
    {

        static Random random = new Random();
        static void Main(string[] args)
        {

            int randomNumber=RandomNumberGenerator(1, 100);//this genrated random number between 1 and 100

            Console.WriteLine(randomNumber);
            //string randomString = RandomStringGenerator(10);(lowercase=false)

            string randomString = RandomStringGenerator(10);// this generates random string of lenght 10 which is lower case between a and z
            Console.WriteLine(randomString);

            randomString = RandomStringGenerator(10,true);// this generates random string of lenght 10 which is upper case between A and Z
            Console.WriteLine(randomString);

            //Generate random password with 10 size(4-lowercase,+ 4-digits+ 2 Uppercase)

            string randomPassword = RandomPassword();

            Console.WriteLine(randomPassword);
        }


        static int RandomNumberGenerator(int min, int max)
        {
            return random.Next(min, max);
        }

        static string RandomStringGenerator(int size, bool lowerCase=false)
        {
            StringBuilder builder = new StringBuilder();

            // we need to generate string with both uppdrcase and lowercase


            char offset = lowerCase ? 'a' : 'A';

            int letterCount = 26;//no of alphabets


            for(int i = 0; i < size; i++)
            {
                char c = (char)random.Next(offset, offset + letterCount);//generate random character between a and z

                builder.Append(c);
            }

            return builder.ToString();
        }

        //Generate random password with 10 size(4-lowercase,+ 4-digits+ 2 Uppercase)
        static string RandomPassword()
        {
            StringBuilder builder = new StringBuilder();

            builder.Append(RandomStringGenerator(4, true));// generates 4 lowercase characters

            builder.Append(RandomNumberGenerator(1000, 9999));//generates 4 digit number

            builder.Append(RandomStringGenerator(2, false));//generates 2 uppercase characters

            return builder.ToString();
        }
    }
}

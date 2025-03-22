using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SampleWindowsForm
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnLogin_Click(object sender, EventArgs e)
        {
            //write c# code when the login button is click.

            string username = txtUserName.Text;//assign the value inside the text box with the name txtUserName into username variable

            string password = txtPassword.Text;
            if (username == "")
            {
                lblMessage.Text = "Please enter user name";

                //MessageBox.Show("Please enter user name");//display an alert message 
            }
            else  if (password == "")
            {
                lblMessage.Text = "Please enter password";
                //MessageBox.Show("Please enter password");//display an alert message 
            }

            if (username != "" && password != "")
            {
                lblMessage.Text = username + " " + password;
                //MessageBox.Show(username + " " + password);//display an alert message 
            }

        }

        private void btnLogin_KeyDown(object sender, KeyEventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            MessageBox.Show("Color selected is "+cbxColors.Text.ToString());
        }

        private void btnCheck_Click(object sender, EventArgs e)
        {
            if (chkYes.Checked)
            {
                MessageBox.Show("checkbox Yes is selected");
            }
            if (chkNo.Checked)
            {
                MessageBox.Show("checkbox No is selected");
            }

            if (chkYes.Checked && chkNo.Checked)
            {
                MessageBox.Show("checkbox Yes and No is selected");
            }
        }

        private void chkYes_CheckedChanged(object sender, EventArgs e)
        {

        }

        private void btnSelect_Click(object sender, EventArgs e)
        {
            //MessageBox.Show(lstColors.SelectedItem.ToString());// this gives only one selected value;//if selection mode=one

            //if selection mode = multi

            string colors = "";

            foreach(string item in lstColors.SelectedItems)
            {
                //MessageBox.Show(item);
                colors += " " + item;
            }
            MessageBox.Show("You have selected these colors " + colors);
        }

        private void btnRadio_Click(object sender, EventArgs e)
        {
            if (radioTrue.Checked)
            {
                MessageBox.Show("You have selected True");
            }
            else
            {
                MessageBox.Show("You have selected False");
            }
        }
    }
}

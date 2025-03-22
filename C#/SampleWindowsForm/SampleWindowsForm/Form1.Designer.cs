namespace SampleWindowsForm
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.lblUsername = new System.Windows.Forms.Label();
            this.lblPassword = new System.Windows.Forms.Label();
            this.txtUserName = new System.Windows.Forms.TextBox();
            this.txtPassword = new System.Windows.Forms.TextBox();
            this.btnLogin = new System.Windows.Forms.Button();
            this.button1 = new System.Windows.Forms.Button();
            this.lblMessage = new System.Windows.Forms.Label();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.cbxColors = new System.Windows.Forms.ComboBox();
            this.label1 = new System.Windows.Forms.Label();
            this.chkYes = new System.Windows.Forms.CheckBox();
            this.chkNo = new System.Windows.Forms.CheckBox();
            this.lblYesNo = new System.Windows.Forms.Label();
            this.btnCheck = new System.Windows.Forms.Button();
            this.comboBoxGroup = new System.Windows.Forms.GroupBox();
            this.groupBox2 = new System.Windows.Forms.GroupBox();
            this.groupBox3 = new System.Windows.Forms.GroupBox();
            this.btnSelect = new System.Windows.Forms.Button();
            this.lstColors = new System.Windows.Forms.ListBox();
            this.groupBox4 = new System.Windows.Forms.GroupBox();
            this.radioTrue = new System.Windows.Forms.RadioButton();
            this.radioFalse = new System.Windows.Forms.RadioButton();
            this.btnRadio = new System.Windows.Forms.Button();
            this.groupBox1.SuspendLayout();
            this.comboBoxGroup.SuspendLayout();
            this.groupBox2.SuspendLayout();
            this.groupBox3.SuspendLayout();
            this.groupBox4.SuspendLayout();
            this.SuspendLayout();
            // 
            // lblUsername
            // 
            this.lblUsername.AutoSize = true;
            this.lblUsername.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblUsername.Location = new System.Drawing.Point(6, 34);
            this.lblUsername.Name = "lblUsername";
            this.lblUsername.Size = new System.Drawing.Size(152, 24);
            this.lblUsername.TabIndex = 0;
            this.lblUsername.Text = "Enter Username:";
            // 
            // lblPassword
            // 
            this.lblPassword.AutoSize = true;
            this.lblPassword.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblPassword.Location = new System.Drawing.Point(6, 74);
            this.lblPassword.Name = "lblPassword";
            this.lblPassword.Size = new System.Drawing.Size(147, 24);
            this.lblPassword.TabIndex = 1;
            this.lblPassword.Text = "Enter Password:";
            // 
            // txtUserName
            // 
            this.txtUserName.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtUserName.Location = new System.Drawing.Point(174, 34);
            this.txtUserName.Name = "txtUserName";
            this.txtUserName.Size = new System.Drawing.Size(162, 29);
            this.txtUserName.TabIndex = 2;
            // 
            // txtPassword
            // 
            this.txtPassword.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtPassword.Location = new System.Drawing.Point(174, 74);
            this.txtPassword.Name = "txtPassword";
            this.txtPassword.Size = new System.Drawing.Size(162, 29);
            this.txtPassword.TabIndex = 3;
            // 
            // btnLogin
            // 
            this.btnLogin.BackColor = System.Drawing.SystemColors.HotTrack;
            this.btnLogin.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnLogin.Location = new System.Drawing.Point(251, 135);
            this.btnLogin.Name = "btnLogin";
            this.btnLogin.Size = new System.Drawing.Size(75, 37);
            this.btnLogin.TabIndex = 4;
            this.btnLogin.Text = "Login";
            this.btnLogin.UseVisualStyleBackColor = false;
            this.btnLogin.Click += new System.EventHandler(this.btnLogin_Click);
            this.btnLogin.KeyDown += new System.Windows.Forms.KeyEventHandler(this.btnLogin_KeyDown);
            // 
            // button1
            // 
            this.button1.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button1.Location = new System.Drawing.Point(151, 71);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(75, 34);
            this.button1.TabIndex = 5;
            this.button1.Text = "Click";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // lblMessage
            // 
            this.lblMessage.AutoSize = true;
            this.lblMessage.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblMessage.ForeColor = System.Drawing.Color.Red;
            this.lblMessage.Location = new System.Drawing.Point(272, 282);
            this.lblMessage.Name = "lblMessage";
            this.lblMessage.Size = new System.Drawing.Size(0, 24);
            this.lblMessage.TabIndex = 6;
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.lblUsername);
            this.groupBox1.Controls.Add(this.lblPassword);
            this.groupBox1.Controls.Add(this.txtUserName);
            this.groupBox1.Controls.Add(this.btnLogin);
            this.groupBox1.Controls.Add(this.txtPassword);
            this.groupBox1.Location = new System.Drawing.Point(25, 34);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(409, 194);
            this.groupBox1.TabIndex = 7;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "loginGroupBox";
            // 
            // cbxColors
            // 
            this.cbxColors.FormattingEnabled = true;
            this.cbxColors.Items.AddRange(new object[] {
            "Red",
            "Yellow",
            "Black",
            "Grey"});
            this.cbxColors.Location = new System.Drawing.Point(124, 44);
            this.cbxColors.Name = "cbxColors";
            this.cbxColors.Size = new System.Drawing.Size(121, 21);
            this.cbxColors.TabIndex = 8;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(6, 39);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(112, 24);
            this.label1.TabIndex = 9;
            this.label1.Text = "Select Color";
            // 
            // chkYes
            // 
            this.chkYes.AutoSize = true;
            this.chkYes.Location = new System.Drawing.Point(23, 60);
            this.chkYes.Name = "chkYes";
            this.chkYes.Size = new System.Drawing.Size(44, 17);
            this.chkYes.TabIndex = 10;
            this.chkYes.Text = "Yes";
            this.chkYes.UseVisualStyleBackColor = true;
            this.chkYes.CheckedChanged += new System.EventHandler(this.chkYes_CheckedChanged);
            // 
            // chkNo
            // 
            this.chkNo.AutoSize = true;
            this.chkNo.Location = new System.Drawing.Point(92, 60);
            this.chkNo.Name = "chkNo";
            this.chkNo.Size = new System.Drawing.Size(40, 17);
            this.chkNo.TabIndex = 11;
            this.chkNo.Text = "No";
            this.chkNo.UseVisualStyleBackColor = true;
            // 
            // lblYesNo
            // 
            this.lblYesNo.AutoSize = true;
            this.lblYesNo.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblYesNo.Location = new System.Drawing.Point(6, 16);
            this.lblYesNo.Name = "lblYesNo";
            this.lblYesNo.Size = new System.Drawing.Size(151, 24);
            this.lblYesNo.TabIndex = 12;
            this.lblYesNo.Text = "Select Yes or No";
            // 
            // btnCheck
            // 
            this.btnCheck.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnCheck.Location = new System.Drawing.Point(158, 47);
            this.btnCheck.Name = "btnCheck";
            this.btnCheck.Size = new System.Drawing.Size(75, 37);
            this.btnCheck.TabIndex = 13;
            this.btnCheck.Text = "Check";
            this.btnCheck.UseVisualStyleBackColor = true;
            this.btnCheck.Click += new System.EventHandler(this.btnCheck_Click);
            // 
            // comboBoxGroup
            // 
            this.comboBoxGroup.Controls.Add(this.label1);
            this.comboBoxGroup.Controls.Add(this.cbxColors);
            this.comboBoxGroup.Controls.Add(this.button1);
            this.comboBoxGroup.Location = new System.Drawing.Point(35, 269);
            this.comboBoxGroup.Name = "comboBoxGroup";
            this.comboBoxGroup.Size = new System.Drawing.Size(261, 123);
            this.comboBoxGroup.TabIndex = 14;
            this.comboBoxGroup.TabStop = false;
            this.comboBoxGroup.Text = "ComboBox Group";
            // 
            // groupBox2
            // 
            this.groupBox2.Controls.Add(this.lblYesNo);
            this.groupBox2.Controls.Add(this.chkYes);
            this.groupBox2.Controls.Add(this.btnCheck);
            this.groupBox2.Controls.Add(this.chkNo);
            this.groupBox2.Location = new System.Drawing.Point(507, 34);
            this.groupBox2.Name = "groupBox2";
            this.groupBox2.Size = new System.Drawing.Size(266, 124);
            this.groupBox2.TabIndex = 15;
            this.groupBox2.TabStop = false;
            this.groupBox2.Text = "CheckBox Group";
            // 
            // groupBox3
            // 
            this.groupBox3.Controls.Add(this.btnSelect);
            this.groupBox3.Controls.Add(this.lstColors);
            this.groupBox3.Location = new System.Drawing.Point(316, 274);
            this.groupBox3.Name = "groupBox3";
            this.groupBox3.Size = new System.Drawing.Size(227, 126);
            this.groupBox3.TabIndex = 16;
            this.groupBox3.TabStop = false;
            this.groupBox3.Text = "List Box Group";
            // 
            // btnSelect
            // 
            this.btnSelect.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnSelect.Location = new System.Drawing.Point(132, 82);
            this.btnSelect.Name = "btnSelect";
            this.btnSelect.Size = new System.Drawing.Size(75, 32);
            this.btnSelect.TabIndex = 1;
            this.btnSelect.Text = "Select";
            this.btnSelect.UseVisualStyleBackColor = true;
            this.btnSelect.Click += new System.EventHandler(this.btnSelect_Click);
            // 
            // lstColors
            // 
            this.lstColors.FormattingEnabled = true;
            this.lstColors.Items.AddRange(new object[] {
            "Yellow",
            "Green",
            "Pink",
            "Red"});
            this.lstColors.Location = new System.Drawing.Point(6, 19);
            this.lstColors.Name = "lstColors";
            this.lstColors.SelectionMode = System.Windows.Forms.SelectionMode.MultiSimple;
            this.lstColors.Size = new System.Drawing.Size(120, 95);
            this.lstColors.TabIndex = 0;
            // 
            // groupBox4
            // 
            this.groupBox4.Controls.Add(this.btnRadio);
            this.groupBox4.Controls.Add(this.radioFalse);
            this.groupBox4.Controls.Add(this.radioTrue);
            this.groupBox4.Location = new System.Drawing.Point(599, 206);
            this.groupBox4.Name = "groupBox4";
            this.groupBox4.Size = new System.Drawing.Size(174, 186);
            this.groupBox4.TabIndex = 17;
            this.groupBox4.TabStop = false;
            this.groupBox4.Text = "Radio Button Box";
            // 
            // radioTrue
            // 
            this.radioTrue.AutoSize = true;
            this.radioTrue.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.radioTrue.Location = new System.Drawing.Point(26, 32);
            this.radioTrue.Name = "radioTrue";
            this.radioTrue.Size = new System.Drawing.Size(68, 28);
            this.radioTrue.TabIndex = 0;
            this.radioTrue.TabStop = true;
            this.radioTrue.Text = "True";
            this.radioTrue.UseVisualStyleBackColor = true;
            // 
            // radioFalse
            // 
            this.radioFalse.AutoSize = true;
            this.radioFalse.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.radioFalse.Location = new System.Drawing.Point(26, 63);
            this.radioFalse.Name = "radioFalse";
            this.radioFalse.Size = new System.Drawing.Size(74, 28);
            this.radioFalse.TabIndex = 1;
            this.radioFalse.TabStop = true;
            this.radioFalse.Text = "False";
            this.radioFalse.UseVisualStyleBackColor = true;
            // 
            // btnRadio
            // 
            this.btnRadio.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnRadio.Location = new System.Drawing.Point(75, 119);
            this.btnRadio.Name = "btnRadio";
            this.btnRadio.Size = new System.Drawing.Size(75, 37);
            this.btnRadio.TabIndex = 2;
            this.btnRadio.Text = "Select";
            this.btnRadio.UseVisualStyleBackColor = true;
            this.btnRadio.Click += new System.EventHandler(this.btnRadio_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.groupBox4);
            this.Controls.Add(this.groupBox3);
            this.Controls.Add(this.groupBox2);
            this.Controls.Add(this.comboBoxGroup);
            this.Controls.Add(this.groupBox1);
            this.Controls.Add(this.lblMessage);
            this.Name = "Form1";
            this.Text = "loginGroupBox";
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            this.comboBoxGroup.ResumeLayout(false);
            this.comboBoxGroup.PerformLayout();
            this.groupBox2.ResumeLayout(false);
            this.groupBox2.PerformLayout();
            this.groupBox3.ResumeLayout(false);
            this.groupBox4.ResumeLayout(false);
            this.groupBox4.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label lblUsername;
        private System.Windows.Forms.Label lblPassword;
        private System.Windows.Forms.TextBox txtUserName;
        private System.Windows.Forms.TextBox txtPassword;
        private System.Windows.Forms.Button btnLogin;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Label lblMessage;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.ComboBox cbxColors;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.CheckBox chkYes;
        private System.Windows.Forms.CheckBox chkNo;
        private System.Windows.Forms.Label lblYesNo;
        private System.Windows.Forms.Button btnCheck;
        private System.Windows.Forms.GroupBox comboBoxGroup;
        private System.Windows.Forms.GroupBox groupBox2;
        private System.Windows.Forms.GroupBox groupBox3;
        private System.Windows.Forms.ListBox lstColors;
        private System.Windows.Forms.Button btnSelect;
        private System.Windows.Forms.GroupBox groupBox4;
        private System.Windows.Forms.Button btnRadio;
        private System.Windows.Forms.RadioButton radioFalse;
        private System.Windows.Forms.RadioButton radioTrue;
    }
}


# **Description**

This project is a simple contact form web application built using React framework with Vite for the frontend, Express.js for the backend, and Sheet.base API for storing contact form submissions in Google Sheets. Additionally, it features an option for users to receive a copy of their submission via email. Styling is done using Tailwind CSS, with Daisy UI components for quick setup, and loading spinner provided by Daisy UI. Notifications are displayed using React-Toastify.

## **Features**
+ User-friendly contact form with fields for name, phone number, email address, and message.
+ Integration with Google Sheets API to store form submissions securely.
+ Tailwind CSS and Daisy UI for responsive and attractive styling.
+ Loading spinner provided by Daisy UI for better user experience.
+ Notifications displayed using React-Toastify to confirm successful form submission.

## **Additional Features**
* Option for users to receive a copy of their submission via email.
* Used **node-mailer** library in server-side to send email on the emailId provided by the User.
 
## Technologies Used
+ REACTJS
+ Tailwind CSS
+ Daisy UI
+ React-toastify
+ Sheet.base API
+ Nodemailer

## Set up
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using npm install.
4. Navigate to the contactpage_frontend directory
5. Install dependencies using npm install.
6. In the project directory create a .env file
7. In .env file create a variable named GMAIL and give your google account App password there
8. In sentMail.js replace *userhak80@gmail.com* with your googel account
9. All set to go now.

## Images
![CONTACT_PAGE_IMAGE](https://github.com/Jagss24/ContactPage/blob/master/contactpage_img.png)

## Video Link
[Video](https://youtu.be/-PcKXKpOCAk)

## Gooogle sheet link
[GOOGLE_SHEET](https://docs.google.com/spreadsheets/d/1qlps_CLkRDdj2z0heRsmdaheJiRNESP9X31Wu88vrps/edit#gid=0)

## Deployed on Vercel
[LIVE](https://contact-page-neon.vercel.app/)


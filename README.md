# CCNA Exam Practice Quiz

A web-based quiz application designed to help CCNA students practice and test their knowledge. Built with Next.js, TypeScript, and Tailwind CSS, this app provides an interactive way to prepare for the CCNA exam.

![image](https://github.com/user-attachments/assets/ad4bee22-0e06-4b3e-8f60-afbb7ee4a50c)


results page
![image](https://github.com/user-attachments/assets/7a654cb8-984d-4ee1-803e-6d1c45e4fba2)

study resource page
![image](https://github.com/user-attachments/assets/52f4b1ab-1a2c-4099-82b9-3cf79acc5582)


## Features

- **Interactive Quiz Interface**: Navigate through multiple-choice questions with "Next" and "Previous" buttons.
- **Progress Indicator**: Visual progress bar indicating pass, fail, or excellence based on your score.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Customizable Questions**: Easily add or modify quiz questions via a JSON file.
- **Modern UI/UX**: Styled using Tailwind CSS and Shadcn UI for a clean and intuitive interface.

## Installation

### Prerequisites

- **Node.js** (version 14 or later)
- **npm** or **Yarn**

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Nattie-Nkosi/ccna-quiz-app.git
   cd ccna-quiz-app
   ```

2. **Install Dependencies**

   ```bash
   npm install # or yarn install
   ```

3. **Run the Development Server**

   ```bash
   npm run dev # or yarn dev
   ```

4. **Open the App in Your Browser**

   Navigate to `http://localhost:3000` to start using the app.

## Usage

- **Start Quiz**: Upon launching the app, you will be redirected to the quiz page.
- **Navigate Questions**: Use the "Next" and "Previous" buttons to navigate through questions.
- **Submit Answers**: After the last question, your results will be displayed.
- **View Results**: See your score, status (Failed, Passed, Excellence), and review correct answers.

## Adding Your Own Questions

You can customize the quiz by adding your own questions to the `questions.json` file.

1. **Locate the `questions.json` File**

   The file is located at `data/questions.json`.

2. **Modify or Add Questions**

   Each question should follow the structure:

   ```json
   {
     "id": "unique-id",
     "question": "Your question here?",
     "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
     "correctAnswer": "The correct option text"
   }
   ```

3. **Save the File**

   After making changes, save the file. The app will automatically use the updated questions.

## Disclaimer

**Please note:** The questions previously available in this app were for practice purposes only and were **not** actual exam questions from the CCNA certification exam. However, since sharing exam-related content violates Cisco's NDA, the questions.json file has been removed. The content provided now is solely intended to help students prepare and understand the general type of material that may be covered in their studies.

## Contributing

Contributions are welcome! If you'd like to improve the app or add new features, please fork the repository and create a pull request.

**built with 💓 by Nattie Nkosi**

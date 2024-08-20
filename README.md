# Registration Form 


This is a simple registration form built with React. It collects user data including their name, email, and password, and displays a success message upon successful registration.
![f1](https://github.com/user-attachments/assets/fc8dafe4-3387-46ac-83c3-2d553fb18d96)


## Features

- **Input Fields**: The form includes input fields for the user's name, email, and password.
- **Validation**: The form checks if all fields are filled before allowing the user to submit the form. If any field is empty, an alert is displayed asking the user to fill in all fields.
- **Success Message**: Upon successful form submission, a message is displayed to the user confirming their registration.
- **State Management**: The form uses React's `useState` and `useEffect` hooks to manage the form's state and side effects.

## Components

### `Form` Component

The `Form` component is the main component that renders the registration form.

#### State

- `inputData`: An object that stores the values of the form inputs (`name`, `email`, `password`).
- `flag`: A boolean that determines whether the form has been successfully submitted.

#### Effects

- **`useEffect` Hook**: Logs "Registered" to the console whenever the `flag` state changes to `true`, indicating that the form has been successfully submitted.

#### Handlers

- **`handleData`**: Updates the `inputData` state whenever the user types in any of the input fields.
- **`handleSubmit`**: Validates the form data and sets the `flag` state to `true` if all fields are filled, triggering the success message.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/registration-form.git
    ```
2. Navigate to the project directory:
    ```bash
    cd myapp
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the development server:
    ```bash
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000` to view the form.

3. Fill in the required fields and submit the form. If successful, a message will appear indicating that you have registered successfully.



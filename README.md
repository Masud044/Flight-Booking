## Flight booking project


# Features
- User Registration – Allow new users to create accounts with email, password, and basic details.
- User Login – Secure login using email/password with session or JWT token-based authentication.
- Display All Flights – Show all flights with details (flight name, departure, arrival, date, time, price, etc.).
- Add a New Flight – Form to add flights (with validation for correct details).
- Edit Flight Details – Update existing flight information.
- Delete Flight – Remove flights from the system.
- Search & Filter Flights – Filter by flight name, date, departure city, or arrival city.
- Browse Flights – View available flights with complete details.
- Book a Seat – Select a flight and choose a seat.
- Seat Reservation Lock – Implement a 2-minute countdown timer to hold a seat before booking confirmation.
- Confirm Booking – Complete booking with passenger details.
- Update Booking – Modify passenger details or flight selection.
- Delete Booking – Cancel bookings (with seat availability updated in real time).

# Limitation of feature
- booking system feature is causing token issues and can’t be implemented right now, we can focus on Flights Management and Authentication only.
- Error handling ( invalid token or expired sessions).
- I try to my best all requirment fullfill but token issue are bloking feature 


## Technologies Used
- Vite-React
- React Router Dom v6.10.0
- Tailwindcss
- Daisyui
- React-lucide
- Toast
- axios
- JWt-decode
- React-hook-form
- Yup


## Getting Started
Follow these instructions to get a local copy of the flight booking website up and running on your machine for development and testing purposes:

1. Clone the repository: git clone repository-link

2. Install the dependencies: npm

3. Start the development server: npm run dev
Deployment
To deploy the flight booking to a production environment, follow the deployment instructions specific to your hosting platform (e.g., vercel, Firebase, Render etc.).



# live site link: 
https://flight-bookings-project.netlify.app/


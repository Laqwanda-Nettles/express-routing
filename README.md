# Express Routing

## Objective

The objective of this assignment was to set up an Express.js server with well-structured, modular routes using `Express.Router`. The focus was on creating a clean and scalable route organization, handling dynamic route parameters for flexibility, and implementing a nested route structure for better separation of concerns. Additionally, the project aimed to provide functionality for creating, retrieving, and managing user data, while thoroughly testing the routes using **Thunder Client**.

---

## Features

### 1. **Server Setup**

The server is configured in `index.js` with the following features:

- Middleware for JSON parsing using `express.json()`.
- Organized routing with `Express.Router` for modularity.
- A 404 middleware to handle undefined routes.

### 2. **Main Routes**

The main routes are defined in `routes/index.js`:

- **`GET /`** - Responds with a welcome message.
- **`GET /about`** - Responds with "About Us" information.

### 3. **User Routes**

The user routes are defined in `routes/users.js`:

- **`GET /users/hello`** - Responds with a greeting for users.
- **`GET /users/`** - Fetches and returns all users from `data.json`.
- **`GET /users/:id`** - Fetches a specific user by `id`, with error handling for invalid IDs.
- **`POST /users/`** - Adds a new user to the existing array, dynamically assigning an `id`.

### 4. **Dynamic Route Handling**

The `:id` parameter in `GET /users/:id` demonstrates:

- Extracting dynamic URL segments using `req.params`.
- Searching for specific data in an array and handling errors if the resource is not found.

### 5. **Nested Route Structure**

Using `Express.Router` allows for logical separation of routes:

- `routes/index.js` handles general site-related routes.
- `routes/users.js` handles user-related operations.

### 6. **Testing with Thunder Client**

All routes were tested using **Thunder Client** :

- **Bonus: POST /users/**
  ![alt text](<Screenshot 2024-12-05 192529.png>)

---

## Challenges

### Mutating an Existing Array of Users

One of the significant challenges in this assignment was correctly implementing the `POST` route to add a new user to the existing `users` array. The main issues encountered were:

1. **Understanding the Data Flow**  
   Initially, it was unclear how to work with a mutable copy of `data.json`. Instead of modifying the file directly, the array was copied into memory, allowing for safe manipulation during the server runtime.

2. **Auto-Incrementing IDs**  
   Ensuring that each new user had a unique `id` was tricky. This required dynamically calculating the `id` based on the length of the array.

**Solution Steps**:

- A mutable copy of `data.json` is created in memory:
  ```javascript
  const users = [...data];
  ```
- Incoming data is parsed and assigned a unique `id`:
  ```javascript
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  ```
- Logging operations (`console.log`) were used to verify the correctness of updates:
  ```javascript
  console.log("New User: ", newUser);
  console.log("Updated Users: ", users);
  ```

---

## Sample Routes and Outputs

### 1. **Main Routes**

- **`GET /`**  
  **Response**:

  ```json
  "Hello, World!"
  ```

- **`GET /about`**  
  **Response**:
  ```json
  "About Us."
  ```

### 2. **User Routes**

- **`GET /users/hello`**  
  **Response**:

  ```json
  "Hello Users!"
  ```

- **`GET /users/`**  
  **Response**:

  ```json
  [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      ...
    }
  ]
  ```

- **`GET /users/:id`**  
  **Request**: `/users/2`  
  **Response**:

  ```json
  "User ID: 2, User name: Jane Smith"
  ```

- **`POST /users/`**  
  **Request**:
  ```json
  {
    "name": "New User",
    "email": "new.user@example.com",
    "role": "user"
  }
  ```
  **Response**:
  ```json
  {
    "id": 6,
    "name": "New User",
    "email": "new.user@example.com",
    "role": "user"
  }
  ```

---

## Conclusion

This assignment offered valuable hands-on experience with Express.js, emphasizing modularization, route handling, and dynamic functionality. By implementing GET and POST endpoints and using mock data, the project showcased the practical application of handling API requests and mutating in-memory data. It also highlighted the importance of debugging and testing for robust functionality.

# FullStack Test App

## Task Description

Develop an application that displays a list of cryptocurrencies with:
- Pagination and infinite scroll support
- Unique color generation for each list item
- Data fetching from an external API via a custom backend proxy

---

## Teck Stack

- **Frontend:** React, Vite, CSS Modules
- **Backend:** Node.js, Express, Axios, Dotenv
- **API:** CoinCap 

---

## Frontend

- **Starter:** Vite + React
- **Components:**
  - `CryptoList` — main list component with infinite scroll
  - `CryptoItem` — individual cryptocurrency item with color indication
- **Custom Hook:**  
  - `useCryptoPagination` — loads and paginates data, handles infinite scroll
- **Functions:**
  - Generates an array of random colors for list items
  - Handles loading and error states

---

## Backend

- **Node.js + Express server**
- **API Key Configuration:**
  - Add your API key to the `.env` file:
    ```
    COINCAP_API_KEY=your_api_key_here
    ```
  - The backend automatically adds the key to CoinCap requests

---

## Endpoints

### Frontend

| Method | URL                          | Description                    |
|--------|------------------------------|--------------------------------|
| GET    | `/api/cryptos?limit&offset`  | Get paginated cryptocurrencies |

### Backend

| Method |       URL        |   Query Params   |                Description                       |
|--------|------------------|------------------|--------------------------------------------------|
|  GET   |   `/api/assets`  |   limit, offset  | Returns a paginated list of cryptocurrencies     |

---

## Installation & Running

1. **Clone the repository:**
    ```
    git clone https://github.com/when-dev/fullstack-dev-test
    cd fullstack-dev-test
    ```

2. **Install dependencies for backend and frontend:**
    ```
    cd backend
    npm install

    cd frontend
    npm install
    ```

3. **Add `.env` file to the backend folder:**
    ```
    COINCAP_API_KEY=your_api_key_here
    ```

4. **Start the backend:**
    ```
    cd backend
    npm start
    ```

5. **Start the frontend:**
    ```
    cd frontend
    npm run dev
    ```

6. **Open the app:**
    - Go to `http://localhost:5173`

---

**Note:**  
The backend and frontend servers must be running in different terminal windows or tabs at the same time.
# ZMercRestAPI

ZMercRestAPI is a TypeScript-based REST API backend for the ZMercado application. It provides endpoints for authentication, user management, and product management using PostgreSQL and Prisma ORM. The API is fully Dockerized and available as a centralized Docker image on Docker Hub.

---

## Features

- Email/username authentication using JWT  
- Role-based access control  
- CRUD operations for users and products  
- PostgreSQL integration with Prisma ORM  
- Dockerized for easy deployment  
- Environment-based configuration  

---

## Environment Variables

The project uses several environment variables. **Do not include secret values in version control**. Example:

```env
DATABASE_URL=
API_BASE_URL=
SUPABASE_DB=
DIRECT_URL=
BETTER_AUTH_SECRET=
JWT_ISSUER=
JWT_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
CLOUDINARYAPIKEY=
CLOUDIANRYSECRET=
BREVO=
CLOUDNAME=
TELEBIRR_MERCHANT_ID=
FABRIC_APP_ID=
SHORT_CODE=
APP_SECRET=
TELEBIRR_PRIVATE_KEY=
TB_BASE_URL=
WEB_BASE_URL=
FRONTEND_URL=
CHAPA_SECRET_KEY=
```

---

## Usage

### For Users (Pull & Run Docker Image)

1. Pull the Docker image from Docker Hub:

```bash
docker pull hamiiz/zmercrest:latest
```

2. Run the container:

```bash
docker run -d -p 1000:1000 --env-file .env hamiiz/zmercrest:latest
```

- API will be accessible at `http://localhost:1000`.  
- Ensure `.env` file is configured with proper environment variables.

---

### For Developers (Local Development)

1. **Clone the repository**:

```bash
git clone https://github.com/hamiiz/zmercrest.git
cd zmercrest
```

2. **Install dependencies**:

```bash
npm install
```

3. **Configure environment variables**:

Create a `.env` file and add the variables listed above (without secret values in the repo).

4. **Generate Prisma client**:

```bash
npx prisma generate
```

5. **Run the application locally**:

```bash
npm run dev
```

- API will be available at `http://localhost:1000`.  
- Make sure PostgreSQL is running locally or use the Dockerized database from the shared environment.

6. **Optional: Run with Docker Compose**:

```bash
docker-compose up --build
```

This sets up the API and the PostgreSQL container together, useful for testing or development.

---

## API Endpoints

- **Authentication**: `/auth/sign-up/email`, `/auth/sign-in/email`, `/auth/sign-in/username`, `/auth/token`  
- **Users**: `/getuser`, `/users/:id` (CRUD under development)  
- **Products**: `/products` (CRUD under development)  

---

## Technologies

- Node.js & TypeScript  
- Express.js  
- PostgreSQL + Prisma ORM  
- Docker  
- JWT, bcrypt  
- Better Auth  

---

## License

MIT License


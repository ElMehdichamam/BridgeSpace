# BridgeSpace 🌉

> The collaboration platform that bridges the gap between technical and non-technical teams — built for companies where IT, finance, and sales share the same projects but speak completely different languages.

---

## The Problem

Every company has this moment: a developer is deep in a sprint, a sales manager needs a status update, and a finance lead wants to know if the project is on budget. They're all working on the same thing — but in completely different tools, with no shared language.

Slack gets noisy. Jira is unreadable for non-tech people. Notion has no real dev integration. Emails get lost.

**BridgeSpace fixes this.**

---

## What is BridgeSpace?

BridgeSpace is a unified project hub where every department sees the **same project** through a lens designed for them.

- A **developer** sees tasks, pull requests, blockers, and technical threads
- A **finance or sales member** sees progress percentages, milestones, timelines, and budget impact
- A **project manager** sees everything, bridging both worlds

Same data. Same project. Different views.

---

## Core Features

| Feature | Description |
|---|---|
| 🖥️ **Dual-view dashboard** | Technical view for devs, business view for finance/sales — same underlying data |
| 💬 **Bridged threads** | Discussions tagged by department; AI auto-summarizes tech threads for business users |
| 📄 **Shared docs** | Notion-style documentation linked to projects — specs for IT, one-pagers for business |
| 🔗 **GitHub integration** | Commits and PRs appear as readable milestones for non-technical stakeholders |
| 🔔 **Role-based notifications** | Same event, different alert depending on your role |
| 📖 **Built-in glossary** | Hover on "CI/CD" and get a plain-language tooltip. Business terms explained for devs too |
| 🤖 **AI bridge layer** | Anthropic-powered summaries that translate technical updates into business language |

---

## Tech Stack

### Backend
- **Node.js + Express.js** — REST API
- **MongoDB + Mongoose** — database
- **JWT** — authentication
- **Zod** — input validation
- **Socket.io** — real-time threads and notifications *(v2)*
- **Anthropic API** — AI summarization *(v2)*

### Frontend
- **React + Vite** — UI framework
- **React Router** — client-side routing
- **Tailwind CSS** — styling
- **Axios** — API calls

### Infrastructure
- **Vercel** — frontend deployment
- **Railway** — backend deployment
- **MongoDB Atlas** — managed database

---

## Project Structure

```
bridgespace/
├── server/                  # Express backend
│   ├── config/              # DB connection, env
│   ├── controllers/         # Route logic
│   ├── middleware/          # Auth, role, validation, errors
│   ├── models/              # Mongoose schemas
│   ├── routes/              # API route definitions
│   ├── validators/          # Zod schemas
│   ├── services/            # External APIs (AI, GitHub)
│   ├── .env                 # Environment variables (never commit)
│   └── index.js             # Entry point
│
├── client/                  # React frontend
│   └── src/
│       ├── components/      # Reusable UI components
│       ├── pages/           # One file per screen
│       ├── hooks/           # Custom React hooks
│       ├── services/        # Axios API calls
│       └── context/         # Auth context, global state
│
├── .gitignore
├── .env.example             # Template for required env variables
└── README.md
```

---

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (or local MongoDB)
- A `.env` file in both `/server` and `/client` — see `.env.example`

### 1. Clone the repo
```bash
git clone https://github.com/your-username/bridgespace.git
cd bridgespace
```

### 2. Set up the backend
```bash
cd server
npm install
cp .env.example .env
# Fill in your values in .env
npm run dev
```

### 3. Set up the frontend
```bash
cd ../client
npm install
cp .env.example .env
# Fill in your values in .env
npm run dev
```

### 4. Open in browser
```
Frontend: http://localhost:5173
Backend API: http://localhost:3000
```

---

## Environment Variables

### server/.env.example
```env
PORT=3000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=7d
ANTHROPIC_API_KEY=your_anthropic_api_key
GITHUB_CLIENT_ID=your_github_oauth_client_id
GITHUB_CLIENT_SECRET=your_github_oauth_secret
CLIENT_URL=http://localhost:5173
```

### client/.env.example
```env
VITE_API_URL=http://localhost:3000/api
```

---

## API Overview

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login, returns JWT |
| GET | `/api/auth/me` | Get current user |
| GET | `/api/projects` | List all projects for user |
| POST | `/api/projects` | Create a new project |
| GET | `/api/projects/:id` | Get project by ID |
| POST | `/api/projects/:id/members` | Invite a member |
| GET | `/api/threads/:projectId` | Get threads for a project |
| POST | `/api/threads` | Create a thread |
| GET | `/api/messages/:threadId` | Get messages in a thread |
| POST | `/api/messages` | Post a message |

---

## User Roles

| Role | Access |
|---|---|
| `admin` | Full access — manages org, projects, and members |
| `dev` | Technical view — tasks, threads, GitHub integration |
| `finance` | Business view — milestones, budget, progress |
| `sales` | Business view — delivery timelines, feature status |

---

## Roadmap

- [x] Project structure and architecture
- [ ] Auth system (register, login, JWT)
- [ ] Organizations and user roles
- [ ] Project CRUD
- [ ] Member invitations
- [ ] Dual-view dashboard
- [ ] Discussion threads
- [ ] GitHub integration
- [ ] Real-time with Socket.io
- [ ] AI bridge summaries (Anthropic API)
- [ ] Email notifications

---

## Contributing

This project is currently in private development. If you've been given access, please:

1. Branch off `dev` — never push directly to `main`
2. Name your branch `feat/your-feature` or `fix/your-fix`
3. Open a PR into `dev` when ready
4. Keep commits small and descriptive

---

## Author

**El Mehdi Chamam**
Building BridgeSpace to fix the communication wall between IT and business teams.

---

*BridgeSpace — where departments finally speak the same language.*

# Baljit Kaur — Portfolio Website

A multi-page React portfolio website built with Create React App, dockerized with Nginx, and deployed via a CI/CD pipeline using GitHub Actions.

## GitHub Repository

https://github.com/Baljitkaur132/baljit-portfolio

## Live Site

Runs at: `http://localhost:5575`

## Tech Stack

- React.js (Create React App)
- Docker + Nginx
- GitHub Actions (CI/CD)
- ESLint + Prettier
- Node.js 20

## Portfolio Sections

- **Home** — Basic info, bio, and contact details
- **Work** — Course projects with descriptions, images, and links
- **Skills** — Languages, frameworks, and tools
- **Resources** — Helpful developer references and links
- **Setup** — Developer environment configuration

## How to Run with Docker

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running

### Step 1 — Clone the repository

```bash
git clone https://github.com/Baljitkaur132/baljit-portfolio.git
cd baljit-portfolio
```

### Step 2 — Build the Docker image

```bash
docker build -t kaur-baljit-portfolio .
```

### Step 3 — Run the container

```bash
docker run -d --name kaur_baljit_coding_assignment14 -p 5575:5575 kaur-baljit-portfolio
```

### Step 4 — Open in browser
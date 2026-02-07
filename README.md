# Project

My personal portfolio website built with React and hosted on Github.

## Live Site

https://alondracorrea.github.io

## Tech Stack

- React  
- Node.js
- JS
- Git  
- GitHub Pages

## Prerequisites

node --version  
npm --version  
git --version  
npx create-react-app --version  

Install if not already

---

## Installation

Clone the repository:

git clone https://github.com/alondracorrea/alondracorrea.github.io.git
cd alondracorrea.github.io.git

Install dependencies:

npm install  

---

## Running Locally

npm start  

Open in browser:

http://localhost:3000  

Stop the server:

Ctrl + C  

---

## Deployment (GitHub Pages)

### One-time Setup

On GitHub:

Repository → Settings → Pages → Branch → gh-pages → /(root)

Save changes.

---

### Deploy Steps

Make sure you are on the main branch:

git branch  
git checkout main  

Stage and commit changes:

git add .  
git commit -m "Update site"  

Push to GitHub:

git push origin main  

Deploy:

npm run deploy  

---

## After Deployment


Check URL site: 

alondracorrea.github.io.git

---

## Common Issues

If changes do not appear:

npm run deploy  

Make sure:

- You pushed to main  
- GitHub Pages is set to gh-pages  
- No errors occurred during deploy  


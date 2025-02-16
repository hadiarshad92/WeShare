# WeShare 🌍🔄

**WeShare** is a community-driven platform built with the **MERN stack** that enables people to share their spare resources with others in their local area. Users can either rent or lend their items for free while they are not in use. The platform ensures that only users within the same locality can view and request available resources.

## 🚀 Features

- **User Profiles**: Users can sign up, create profiles, and explore listings in their area.
- **Resource Sharing**: Users can list any spare resources with details such as availability duration, rent price (if applicable), and status (free or paid).
- **Request & Approval System**: Users can request resources from available listings, and the owner has the option to accept or reject the request.
- **Listing Management**: Users can update or delete their listings at any time.
- **AWS S3 Storage**: Used for efficient image storage and retrieval.
- **Role-Based Access**: Users can only interact with listings in their area to maintain privacy and relevance.

## 🛠 Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Storage**: AWS S3
- **Deployment**: AWS EC2 Instance
- **Containerization & Orchestration**: Docker, Kubernetes
- **Continuous Deployment (GitOps)**: K.I.N.D (Kubernetes in Docker)
- **Live Monitoring**: Kubernetes Dashboard, ArgoCD Dashboard

## 🔧 Deployment & Infrastructure

- **AWS EC2 Instance**: Hosts the backend and frontend.
- **GitOps for Continuous Deployment**: Implemented using **K.I.N.D**, ensuring smooth updates and rollbacks.
- **Multi-Cluster Deployment**: The system is deployed across multiple Kubernetes clusters for better scalability.
- **Kubernetes Dashboard & ArgoCD**: Enables live monitoring and management of deployments.

## 📌 How It Works

1. **Sign Up & Login**
   - Users create an account and log in to access available resources.
2. **Browse Listings**
   - View all the resources available for lending/renting within the user's area.
3. **Create a Listing**
   - Add a resource with details such as availability time, rental fee, and images.
4. **Request a Resource**
   - Send a request to borrow/rent a resource. The owner can accept or reject the request.
5. **Manage Listings**
   - Update or remove owned listings at any time.

## 🎯 Future Enhancements

- **Chat System**: Allow users to communicate before lending resources.
- **Rating & Reviews**: Users can leave feedback on lenders and borrowers.
- **Automated Expiry**: Listings automatically expire when their availability period ends.
- **Blockchain-Based Trust System**: Enhance security and trust by recording transactions on a blockchain.





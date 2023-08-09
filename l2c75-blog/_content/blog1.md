---
title: L2C75-B1 - Scalability in systems

date: "2023-08-04T17:47:57.593Z"
---

Blog #1- Scalability in systems

<iframe width="100%" height="350" src="https://www.youtube.com/embed/lKLYWl6iBGg" title="L2C75-B1 : Scalability in systems" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

# Credits:

1. Came across a video on YouTube posted by Gaurav Sen(https://www.youtube.com/@gkcs ) .
2. The video was about scaling systems horizontally or vertically https://youtu.be/xpDnVSmNFX0 .

## Here is what I learned from it :

1. Generally, we have multiple devices requesting a server .
2. The server could be hosted on the cloud or set up locally.
3. When the number of requests increases to the server, there
   are two ways to scale the server.
4. Horizontal Scaling vs Vertical Scaling

## Horizontal Scaling : -

1. It includes adding more servers(could be cheap hardware)
2. A Load balancer is required to route the requests to specific servers, who are not loaded with requests at the time.
3. It is fault tolerant, servers could regenerate from the replica sets
4. Data packets are communicated through RPCs - Remote Procedure Calls among the servers, it makes the calls slower since they have to be passed through the network.
5. Data is inconsistent - as the sync might take a while between the nodes
6. Scales well as users increase - it is easy to configure and add cheap hardware to the network

## Vertical Sacaling: -

1. It includes adding more computational resources to the same server.
2. No load balancer is required
3. It has a single point of failure due to lack of replication
4. Data packets are communicated inter processes - it is much faster since processes are running within the same system.
5. The data is consistent since it is stored in one place.
6. Scales till hardware limits the scaling- there are limitations in terms of addition of RAM and storage to a server.

## Usage :-

1. We do use both the types of scaling in real life scenarios as per the use case.
2. <strong>Horizontal scaling</strong> is used when it is more vital for the system to scale well and be fault tolerant.
3. <strong>Vertical scaling</strong> is used when it is more vital for the system to be quick at responding with data packets and have consistent data at any point of time.

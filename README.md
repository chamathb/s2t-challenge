# s2t-challenge

### Steps to run
- from project root, run `npm install` to install dependencies 
- run `npm start` to start the application


## Deployment Suggestions
1. We can decide the technology, service provider like AWS and design the 
deployment architecture ex: micro-services architecture with AWS ECS/Beanstalk
2. We can make this application to run in a containerized environment using
   node docker image, build our image and push the image to repository.
   DockerHub or Elastic Container Repository
3. Then we can evaluate and select our options on the cloud service provider
 ex: AWS ECS, AWS Beanstalk
4. If we already using AWS ECS like technology stack we can register this as 
a ECS task(For AWS)
5. If not we can select elastic beanstalk technology stack
 for deploy this service as a micro-service(For AWS) 
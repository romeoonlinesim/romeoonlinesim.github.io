### This application runs best on Ubuntu 18.04 because of its dependency, "Robocup Soccer Server". Therefore, if there are any problems of running this on other OS, please try to run this on Ubuntu 18.04.

### How to install and run
First, you need to install Soccerserver by following the README.md file from this repository:

https://github.com/rcsoccersim/rcssserver

Then, you need to install MongoDB on your computer or server. For Linux system, it can be installed by following this guide:

https://docs.mongodb.com/manual/administration/install-on-linux/

The port that MongoDB uses should be kept by default, which is 27017.


To start nodejs:
Go to terminal from the root of this folder, then run:
```
npm install
npm start
```

To start reactjs:
Go to terminal from the root of this folder, then run:
```
cd client
npm install
npm start
```

If you do the above commands without any errors, the frontend interface could be accessed at http://localhost:5000 from your computer.

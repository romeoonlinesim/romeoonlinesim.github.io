## This application runs best on Ubuntu 18.04 because of its dependency, "Robocup Soccer Server". Therefore, if there are any problems of running this on other OS, please try to run this on Ubuntu 18.04.

## How to install and run

### Installing Soccerserver 
First, you need to install Soccerserver (version 16.0.1) by following the README.md file from this repository:

https://github.com/rcsoccersim/rcssserver

### Installing the teams needed for Soccerserver (for Moodle submission version only)
We will attach a zip folder calls soccer-file that contains the 12 teams necessary for the simulation.

In your computer, extract that zip file into your default Downloads folder, i.e. the path is 
```
/home/<your-username>/Downloads
```
After extracting the zip file, you should see there are 12 teams folders in your Downloads folder.

### Installing the teams needed for Soccerserver (for team members)
Clone the repository soccer-file.

In your computer, copy the contents of folder soccer-file into you default Downloads folder, i.e. the path is
```
/home/<your-username>/Downloads
```

### Installing MongoDB
Then, you need to install MongoDB on your computer or server. If you already have it on your system, you can skip this step. For Linux system, it can be installed by following this guide:

https://docs.mongodb.com/manual/administration/install-on-linux/

**Important:** The port that MongoDB uses should be kept by default, which is 27017.

### Install npm and nodejs
If you already have npm version > 6.x.x and node version > 10.x.x in your computer then you may skip this step.
However, since our code is developed and deployed in npm version 7.20.3 and node 16.6.0, you may want to use this version.

The following steps will help you to install these specific versions of npm and node:

Install nvm:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

Install npm:
```
To install a specific version (7.20.3) of npm:
npm install npm@7.20.3 -g
To install latest version of npm:
nvm install-latest-npm
```

Install node:
```
To install a specific version (6.16.0) of node:
nvm install 6.16.0
To install the latest release version of node:
nvm install node
```

After finishing the above steps, you can check the version of npm and node in your computer:
```
npm --version  # expect 7.20.3
node --version  # expect 6.16.0
```

### Set up the environment variables
You should modify the .env file in the root of this folder. The content of it should look like this. You should replace "nh16" with your Ubuntu username:
```
CLIENT_HOMEPAGE=http://20.92.81.138
HOME_PATH=/home/nh16   # replace with /home/<your-username>
SOCCER_SERVER=/home/nh16/rcssserver-16.0.1/src/rcssserver   # replace with /home/<your-username>/rcssserver-16.0.1/src/rcssserver
COMPETITION_FOLDER=/home/nh16/comp   # replace with /home/<your-username>/comp
```

### Start the app in development environment



To start backend server:
Open a new terminal from the root of this folder, then run:
```
npm install
npm start
```

To start frontend app:
Open a new terminal from the root of this folder, then run:
```
cd client
npm install
npm start
```

If you do the above commands without any errors, the frontend interface could be accessed at http://localhost:5000 from your computer.

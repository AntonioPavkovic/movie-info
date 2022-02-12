import React from "react";
import { Icon, Typography } from "antd";
import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { useTheme } from "@material-ui/core/styles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import github from "./img/tehnologies/github.png"
import reactjs from "./img/tehnologies/reactjs.png"
import mongodb from "./img/tehnologies/mongodb.png"
import nodeexpress from "./img/tehnologies/nodeexpress.png"
import nikola from "./img/authors/nikola.jpeg";
import antonio from "./img/authors/antonio.jpeg";
import "./AboutUs.css"

const { Title } = Typography;

const MyCollection = [
  {
    label: "ReactJS",
    imgPath: reactjs,
  },
  {
    label: "MongoDB",
    imgPath: mongodb,
  },
  {
    label: "Node&Express",
    imgPath: nodeexpress,
  },
];

const FavoritePage = () => {

  const CollectionSize = MyCollection.length;
  const theme = useTheme();
  const [index, setActiveStep] = React.useState(0);

  const goToNextPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <Title level={2}> O nama <Icon type="smile" /></Title>

      <div className="blog-post">
        <h2 className="blog-post-title">Autori</h2>
          <p className="blog-post-meta">Antonio Pavković && Nikola Alerić</p>
          <hr className="round" />
          <div className="row">
            <div className="col-6" id="ante">
              <h4 className="w">Antonio Pavković</h4>
              <p>Student 3. godine Računarstva, FSRE Mostar. <br />Rođen 30.05.1999. <br /> Radio sam frontend na ovom projektu, koristeći ReactJS.<br /> Od ostalih tehnologija zanimaju me: NodeJS i <br /> Java Spring Boot.</p>
              <img src={antonio} height="500" width="300" />
            </div>
            <div className="col-6" id="niksa">
              <h4 className="w">Nikola Alerić</h4>
              <p>Student 3. godine Računarstva, FSRE Mostar. <br />Rođen 16.09.2000. <br /> Radio sam backend na ovom projektu, koristeći NodeJS. Od ostalih tehnologija zanimaju me: NodeJS i Python Django.</p>
              <img src={nikola} height="400" width="400" position="relative"/>
              <br />
              <br />
            </div>
          </div>
        </div>

        <div
          style={{marginLeft: "40%"}} 
        >
          <h2>Tehnologije koje smo koristili.</h2>
          <div
            style={{
              maxGrow: 400,
              flexgrow: 1
            }}
          >
            <Paper
              square
              elevation={0}
              style={{
                height: "50",
                display: "flex",
                paddingLeft: theme.spacing(4),
                backgroundColor: theme.palette.background.default,
                alignItems: "center",
              }}
            >
              <Typography>{MyCollection[index].label}</Typography>
            </Paper>
            
            <img 
              src = {MyCollection[index].imgPath}
              style = {{
                height: 255,
                width: "100%",
                maxWidth: 400,
                display: "block",
                overflow: "hidden"
              }}
              alt = {MyCollection[index].label}
            />

          <MobileStepper
            variant="text"
            position="static"
            index={index}
            steps={CollectionSize}
            nextButton={
              <Button
              size="small"
              onClick={goToNextPicture}
              disabled={index === CollectionSize - 1}
            >
              Next
              {theme.direction !== "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
            }
          />
          </div>
        </div>
          
        <div className = "blog-post-bottom">
          <Button>
            <a href = "https://docs.google.com/document/d/14FJwW5mtFDIoLcWDPPttZoWnju4dFFrm5GFhFeXkWqE/edit?usp=sharing">Link vizije</a>
          </Button>
          <a href="https://github.com/AntonioPavkovic/movie-info" target = "_blank" rel="noreferrer">
          <span className="githubContainer">
            <img alt='' src={github} className="github" />
          </span>
        </a>
        </div>
    </div>
  );
}

export default FavoritePage;

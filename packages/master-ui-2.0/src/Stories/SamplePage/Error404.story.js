import React from "react";
import { Container, Segment, Button, Text } from "../../Components/Atom";
import logo from "../../assets/images/el-logo.png";
import error404 from "../../assets/images/error404.svg";

export default {
    title: "Sample Page/Error 404",
};

export const Basic = () => {
    return (
        <>
          <Container 
            height={"100vh"} 
            alignItems={"center"} 
            justifyContent={"center"} 
            display={"flex"}
            bg={"white"}
          >
              <Segment
                p={40}
                boxShadow
                minWidth={600}
                style={{ textAlign: "center" }}
              >
                  <img src={logo} alt="Logo" />
                  <Segment m={40}>
                      <img src={error404} alt="error404" />
                  </Segment>
                  <Text H16 mb={8}>
                      Page Not Found
                  </Text>
                  <Text color={"black40"} mb={16}>
                      We are unable to find the page you're looking for
                  </Text>
                  <Button variant="primary" size="medium" style={{ minWidth: "300px" }} onChange={() => {}}>
                      Back To Home
                  </Button>
              </Segment>
          </Container>
        </>
    );
};

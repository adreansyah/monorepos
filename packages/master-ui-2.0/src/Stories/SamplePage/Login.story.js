import React, { useState } from "react";
import { 
  Container,  
  Segment,
  FormControl,
  Icon,
  Textfield,
  Button, 
  ButtonLink,
  Text
} from "../../Components/Atom";
import logo from "../../assets/images/el-logo.png";

export default {
    title: "Sample Page/Login Page",
};

export const Basic = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
      <>
        <Container 
          height={"100vh"} 
          alignItems={"center"} 
          justifyContent={"center"} 
          display={"flex"}
          >
            <Segment width={500}>
                <div style={{textAlign: "center"}}>
                     <img src={logo} alt="Logo"/>
                </div>
                <Segment 
                  boxShadow 
                  bg={"white"} 
                  justifyContent={"center"}
                  p={40}
                  mt={28}
                  flexDirection={"column"}
                >

                    <Text fontWeight={500} mb={8} textAlign={"center"} style={{fontSize: "20px"}}>Login Back Office</Text>
                    <Text color={"info"} textAlign={"center"} mb={24}>Only the administrators can login.</Text>
                    <form id="loginForm" autoComplete="false" onSubmit={e => e.preventDefault()}>
                        <FormControl label={'Username'} mb={24}>
                            <Textfield
                                inputProps={{
                                    name: 'username',
                                    placeholder: 'Username/Email',
                                    onChange: () => {},
                                }}
                            />  
                        </FormControl>
                        <FormControl label={'Password'} mb={32}>
                            <Textfield
                                inputProps={{
                                    type: showPassword ? 'text' : 'password',
                                    name: 'password',
                                    placeholder: 'Password',
                                    onChange: () => {},
                                }}
                                right={
                                    <ButtonLink
                                        type="button"
                                        styles={`btn u-p-0`}
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        <Icon
                                            className="check"
                                            name={showPassword ? 'visible' : 'invisible'}
                                            size={18}
                                            fillColor="black50"
                                        />
                                    </ButtonLink>
                                }
                            />
                        </FormControl>
                        <Button
                            variant="primary"
                            size="medium"
                            type={'submit'}
                            style={{ width: '100%' }}
                            onChange={() => {}}
                            >
                              Login
                        </Button>
                    </form>
                </Segment>
            </Segment>
        </Container>
      </>
  );
};

export const SideLogo = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
      <>
        <Container 
          height={"100vh"} 
          alignItems={"center"} 
          justifyContent={"center"} 
          display={"flex"}
          >
            <Segment
            justifyContent={"center"}
            flexDirection={"row"}
            boxShadow 
            bg={"white"}
            width={750}
            >
                <Segment 
                justifyContent={"center"}
                flexDirection={"column"}
                p={40}
                flex={1.2}
                >
                <Text fontWeight={500} mb={8} style={{fontSize: "18px"}}>Login Back Office</Text>
                <Text color={"info"}  mb={24}>Only the administrators can login.</Text>
                <form id="loginForm" autoComplete="false" onSubmit={e => e.preventDefault()}>
                    <FormControl label={'Username'} mb={24}>
                        <Textfield
                            inputProps={{
                                name: 'username',
                                placeholder: 'Username/Email',
                                onChange: () => {},
                            }}
                        />  
                    </FormControl>
                    <FormControl label={'Password'} mb={32}>
                        <Textfield
                            inputProps={{
                                type: showPassword ? 'text' : 'password',
                                name: 'password',
                                placeholder: 'Password',
                                onChange: () => {},
                            }}
                            right={
                                <ButtonLink
                                    type="button"
                                    styles={`btn u-p-0`}
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <Icon
                                        className="check"
                                        name={showPassword ? 'visible' : 'invisible'}
                                        size={18}
                                        fillColor="black50"
                                    />
                                </ButtonLink>
                            }
                        />
                    </FormControl>
                    <Button
                        variant="primary"
                        size="medium"
                        type={'submit'}
                        style={{ width: '100%' }}
                        onChange={() => {}}
                        >
                            Login
                    </Button>
                </form>
                </Segment>
                <Segment 
                p={18} 
                bg={"primary"} 
                flex={1} 
                justifyContent={"center"} 
                alignItems={"center"}
                >
                    <img src={logo} alt="Logo" width={200}/>
                </Segment>
            </Segment>
        </Container>
      </>
  );
};

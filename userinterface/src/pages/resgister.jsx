import {Alert,Button,Form,Row,Col,Stack} from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../context/Authcontext";
const Register = () => {
 const {registerinfo, updateregisterinfo,registeruser,registererror,isregisterloading}= useContext(AuthContext);
    return ( <>
    <Form onSubmit={registeruser}>
        <Row style={{height:"100vh", justifyContent:"center", paddingTop:"10%"}}>
            <Col xs={6}>
            <Stack gap={3}>
              <h2>Register</h2>
            
              <Form.Control type="text" placeholder="name" onChange={(e)=>updateregisterinfo({

             ...registerinfo, name:e.target.value }) }/>
              <Form.Control type="email" placeholder="Email" onChange={(e)=>updateregisterinfo({

...registerinfo, email:e.target.value }) }/>
              <Form.Control type="password" placeholder="Password"
              onChange={(e)=>updateregisterinfo({

                ...registerinfo, password:e.target.value }) }/>
               <Button variant="primary" type="submit">
                {isregisterloading ? "creating your account":"register"}
               </Button>
               {registererror?.error &&

               <Alert variant="danger"><p>{registererror?.message}</p></Alert>}
            </Stack>
            </Col>
        </Row>
    </Form>
    </> );
}
 
export default Register;
import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import { Booking } from "../interfaces/booking";

const BookingEmail = ({
  fullName,
  phone,
  email,
  pickup,
  drop,
  date,
  time,
}: Booking) => {
  return (
    <Html>
      <Head />
      <Preview>EZY Taxis Booking Notification</Preview>
      <Body style={main}>
        <Container>
          <Section style={content}>
            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 50,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  EZY Taxis
                </Heading>
                <Heading
                  style={{
                    fontSize: 28,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hello there 👋
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  You have received a new booking request
                </Heading>

                <Text style={paragraph}>
                  <b>Full Name: </b>
                  {fullName}
                </Text>
                <Text style={paragraph}>
                  <b>Phone: </b>
                  {phone}
                </Text>
                <Text style={paragraph}>
                  <b>Email: </b>
                  {email}
                </Text>
                <Text style={paragraph}>
                  <b>Pickup: </b>
                  {pickup}
                </Text>
                <Text style={paragraph}>
                  <b>Drop: </b>
                  {drop}
                </Text>
                <Text style={paragraph}>
                  <b>Date: </b>
                  {date}
                </Text>
                <Text style={paragraph}>
                  <b>Time: </b>
                  {time}
                </Text>
              </Column>
            </Row>
          </Section>

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0)",
            }}
          >
            © 2023 | EZY Taxis | www.ezytaxis.co.uk
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default BookingEmail;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  color: "rgb(0,0,0)",
};

const paragraph = {
  fontSize: 16,
  color: "rgb(0,0,0)",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const boxInfos = {
  padding: "20px 40px",
};

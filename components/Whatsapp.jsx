import React from "react";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const Whatsapp = () => {
  console.log("");
  return (
    <WhatsAppWidget
      phoneNo="2349161225266"
      position="right"
      widgetWidth="300px"
      widgetWidthMobile="260px"
      // autoOpen={true}
      // autoOpenTimer={5000}
      // messageBox={true}
      messageBoxTxt="Hi Team, is there any related service available ?"
      iconSize="40"
      iconColor="white"
      iconBgColor="green"
      headerIcon="/assets/blue-square-logo.png"
      headerIconColor="green"
      headerTxtColor="white"
      headerBgColor="#290da6"
      headerTitle="Blue square"
      headerCaption="Online"
      bodyBgColor="#edfff8"
      chatPersonName="Support"
      chatMessage={
        <>
          Hi there 👋 <br />
          <br /> How can I help you?
        </>
      }
      footerBgColor="white"
      placeholder="Type a message.."
      btnBgColor="black"
      btnTxt="Start Chat"
      btnTxtColor="white"
    />
  );
};

export default Whatsapp;

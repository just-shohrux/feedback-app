import React from "react";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackItemList from "../components/FeedbackItemList";
import FeedbackStats from "../components/FeedbackStats";
import { FeedbackProvider } from "../context/FeedbackContext";
import Container from "../shared/Container";

const MainPage = () => {
  return (
    <Container>
      <FeedbackProvider>
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackItemList />
      </FeedbackProvider>
    </Container>
  );
};

export default MainPage;

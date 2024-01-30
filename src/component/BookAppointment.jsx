import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const MessageContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const MessageTitle = styled.h1`
  color: #4caf10;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  color: white;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 16px;
`;

const BookAppointment = ({ onToggleBookAppointment }) => {
  const [t, i18n] = useTranslation("global");
  const [formData, setFormData] = useState({
    serviceName: "",
    fullName: "",
    email: "",
    date: "",
    time: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: "gray" }}>
      {formSubmitted ? (
        <MessageContainer>
          <MessageTitle>{t("Book.message1")}</MessageTitle>
          <Button onClick={onToggleBookAppointment}>
            {t("Book.message2")}
          </Button>
        </MessageContainer>
      ) : (
        <form styl>
          <MessageContainer>
            <MessageTitle>{t("Book.message3")}</MessageTitle>
            <FormGroup>
              <Label>Service:</Label>
              <Select
                name="serviceName"
                value={formData.serviceName}
                onChange={handleInputChange}
              >
                <option value="">{t("Book.message4")}</option>
                <option value="haircut">{t("Book.message5")}</option>
                <option value="manicure">{t("Book.message6")}</option>
                <option value="facial">{t("Book.message7")}</option>
              </Select>
            </FormGroup>
            <FormGroup>
              <Label>{t("Book.message8")}</Label>
              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>{t("Book.message9")}</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>{t("Book.message10")}</Label>
              <Input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>{t("Book.message11")}</Label>
              <Input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
              />
            </FormGroup>
            <Button type="submit" onClick={handleSubmit}>
              {t("Book.message12")}
            </Button>
          </MessageContainer>
        </form>
      )}
    </div>
  );
};

export default BookAppointment;

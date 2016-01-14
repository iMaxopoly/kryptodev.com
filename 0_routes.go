package main

import (
	"github.com/labstack/echo"
	"io/ioutil"
	"encoding/json"
	"errors"
)

func Welcome(c *echo.Context) error {
	c.Render(200, "welcome.html", "")
	return nil
}

func Blog(c *echo.Context) error {
	c.Render(200, "blog.html", "")
	return nil
}

func BlogPage(c *echo.Context) error {
	c.Render(200, "blogpage.html", "")
	return nil
}

func ContactForm(c *echo.Context) error {
	body, err := ioutil.ReadAll(c.Request().Body)
	if err != nil {
		c.JSON(401, "")
		return errors.New("Error sending mail.")
	}

	var mail EmailContent
	e := json.Unmarshal(body, &mail)
	if e != nil {
		c.JSON(401, "")
		return errors.New("Error sending mail.")
	}
	SendVerificationEmail(mail.to, mail.from, mail.subject, mail.body)
	return nil
}
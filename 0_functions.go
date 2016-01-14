package main

import "github.com/sendgrid/sendgrid-go"

type EmailContent struct {
	to      string
	from    string
	subject string
	body    string
}

func SendVerificationEmail(to, from, subject, body string) (bool) {

	sg := sendgrid.NewSendGridClientWithApiKey(ServerConfig.SendGridAPI)
	message := sendgrid.NewMail()
	message.AddTo(to)
	message.SetSubject(subject)
	message.SetText(body)
	message.SetFrom(from)
	message.SetFromName(from)
	if r := sg.Send(message); r == nil {
		return true
	} else {
		return false
	}
}

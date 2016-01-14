package main

import "github.com/fogcreek/mini"

var ServerConfig struct {
	Port        string `json:"Port"`
	Debug        string `json:"Debug"`
	SendGridAPI string `json:"SendGridAPI"`

}

func LoadConfig() error {
	var configFile, err = mini.LoadConfiguration("settings.ini")
	if err != nil {
		return err
	}
	ServerConfig.Port = configFile.String("Port", "1234")
	ServerConfig.Port = configFile.String("Debug", "false")
	ServerConfig.SendGridAPI = configFile.String("SendGridAPI", "")
	return nil
}

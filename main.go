package main

import (
	"github.com/labstack/echo"
	mw "github.com/labstack/echo/middleware"
	"io"
	"html/template"
	"net/http"
	"fmt"
)

type Template struct {
	templates *template.Template
}

func (t *Template) Render(w io.Writer, name string, data interface{}) error {
	return t.templates.ExecuteTemplate(w, name, data)
}

func main() {
	t := &Template{
		templates: template.Must(template.ParseGlob("views/*.html")),
	}

	LoadConfig()

	// Echo instance
	e := echo.New()

	// If we want to debug or not
	if ServerConfig.Debug == "true" {
		e.SetDebug(true)
	}else {
		e.SetDebug(false)
	}
	e.SetRenderer(t)

	// Middleware
	//e.Use(mw.Logger())
	e.Use(mw.Recover())

	// Define custom HTTP handler
	e.SetHTTPErrorHandler(
		func(err error, c *echo.Context) {
			code := http.StatusInternalServerError
			if err.Error() == "Not Found" {
				code = 404
				if !c.Response().Committed() {
					c.Render(code, "404.html", "")
					e.Logger().Error(err)
					return
				}
			}
			http.Error(c.Response().Writer(), err.Error(), code)
			e.Logger().Error(err)
		})

	//Static Files
	e.Static("/static/", "static")

	// Routes
	e.Get("/", Welcome)
	e.Get("/blog", Blog)
	e.Get("/blog/:id", BlogPage)
	e.Post("/contactform", ContactForm)
	//e.URI(Routing.BlogPage, "a-simple-blog")

	// Start server
	fmt.Println("Starting server...")
	e.Run(":1989")
}
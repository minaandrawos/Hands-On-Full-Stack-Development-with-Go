package rest

import "github.com/gin-gonic/gin"

func RunAPI() error {
	r := gin.Default()

	return r.Run(":8080")
}

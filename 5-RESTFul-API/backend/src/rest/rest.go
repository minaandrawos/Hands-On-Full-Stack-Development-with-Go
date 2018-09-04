package rest

import (
	"github.com/gin-gonic/gin"
)

func RunAPI(address string) error {
	r := gin.Default()
	//get products
	//get promos
	//post user sign in
	//get user orders
	//post user sign out
	//post purchase charge
	h, _ := NewHandler()
	r.GET("/products", h.GetProducts)
	r.GET("/promos", h.GetPromos)
	userGroup := r.Group("/user")
	{
		userGroup.POST("/signin", h.SignIn)
		userGroup.POST("/:id/signout", h.SignOut)
		userGroup.GET("/:id/orders", h.GetOrders)
		userGroup.POST("/charge", h.Charge)
	}
	return r.Run(address)
}

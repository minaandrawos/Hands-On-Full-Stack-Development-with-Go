package dblayer

import (
	"github.com/minaandrawos/Hands-On-Full-Stack-Development-with-Go/5-RESTFul-API/backend/src/models"
)

type DBLayer interface {
	GetAllProducts() ([]models.Product, error)
	GetCustomerByName(string, string) (models.Customer, error)
	GetProduct(uint) (models.Product, error)
}

package dblayer

import (
	"github.com/jinzhu/gorm"
	"github.com/minaandrawos/Hands-On-Full-Stack-Development-with-Go/5-RESTFul-API/backend/src/models"
)

type DBORM struct {
	*gorm.DB
}

func NewORM(dbname, con string) (*DBORM, error) {
	db, err := gorm.Open(dbname, con)
	return &DBORM{
		DB: db,
	}, err
}

func (db *DBORM) GetAllProducts() ([]models.Product, error) {
	return nil, nil
}

func (db *DBORM) GetCustomerByName(string, string) (models.Customer, error) {
	return models.Customer{}, nil
}

func (db *DBORM) GetProduct(uint) (models.Product, error) {
	return models.Product{}, nil
}

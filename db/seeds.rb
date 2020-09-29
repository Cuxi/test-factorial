# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
contacts = Contact.create([
  {
    first_name: "Jose",
    last_name: "Pérez Gómez",
    phone: "654789123",
    email: "marferyan@gmail.com"
  },
  {
    first_name: 'Paco',
    last_name: 'Pérez Gómez',
    phone: '654147852',
    email: 'marferyan2@gmail.com'
  },
  {
    first_name: 'María',
    last_name: 'Pérez Gómez',
    phone: '696325080',
    email: 'marferyan3@gmail.com'
  }
])

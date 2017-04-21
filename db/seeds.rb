# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Group.destroy_all

User.create!(email: "guest_user@guest.com", username: "guest", password: "password")

Group.create!(name: "Tennis", description: "Tennis", creator_id: 1, location: "New York", founded_date: Date.today)

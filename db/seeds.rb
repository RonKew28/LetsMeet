# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Group.destroy_all

# Categories = [
#   "Outdoors & Adventure",
#   "Tech",
#   "Family",
#   "Sports & Fitness",
#   "Writing",
#   "Food and Drink",
#   "Music",
#   "Book Clubs"]

# u.image = File.open('app/assets/images/letsmeetcover.jpg')
# Group.create!(name: "test", category: "test", creator_id: User.first.id, description: "tesltkjeagkjlf", location: "New York", founded_date: Date.new() )

# Users
user0 = User.create!(email: "guest_user@guest.com", username: "guest", password: "password", profile_pic_url: "https://s3.amazonaws.com/lets-meet-dev/user_profile_pictures/guest.png")
user1 = User.create!(email: "jim_baker@aol.com", username: "jim_baker", password: "password", profile_pic_url: "https://s3.amazonaws.com/lets-meet-dev/user_profile_pictures/jim_baker.jpeg")
user2 = User.create!(email: "john_johnson@gmail.com", username: "john_johnson", password: "password", profile_pic_url: "https://s3.amazonaws.com/lets-meet-dev/user_profile_pictures/john_johnson.jpeg")
user3 = User.create!(email: "fred_fredson@gmail.com", username: "fred_fredson", password: "password", profile_pic_url: "https://s3.amazonaws.com/lets-meet-dev/user_profile_pictures/fred_fredson.jpeg")
user4 = User.create!(email: "holly_seinfeld@aol.com", username: "holly_seinfeld", password: "password", profile_pic_url: "https://s3.amazonaws.com/lets-meet-dev/user_profile_pictures/holly_seinfeld.jpeg")
user5 = User.create!(email: "laura_costanza@basketball.com", username: "laura_costanza", password: "password", profile_pic_url: "https://s3.amazonaws.com/lets-meet-dev/user_profile_pictures/laura_costanza.jpeg")
user6 = User.create!(email: "stephanie_roberts@gmail.com", username: "stephanie_roberts", password: "password", profile_pic_url: "https://s3.amazonaws.com/lets-meet-dev/user_profile_pictures/stephanie_roberts.jpeg")
user7 = User.create!(email: "carol_johnson@gmail.com", username: "carol_johnson", password: "password", profile_pic_url: "https://s3.amazonaws.com/lets-meet-dev/user_profile_pictures/carol_johnson.jpeg")
user8 = User.create!(email: "erin_robertson@aol.com", username: "erin_robertson", password: "password", profile_pic_url: "https://s3.amazonaws.com/lets-meet-dev/user_profile_pictures/erin_robertson.jpeg")
user9 = User.create!(email: "jeb_thomas@comcast.net", username: "jeb_thomas", password: "password", profile_pic_url: "https://s3.amazonaws.com/lets-meet-dev/user_profile_pictures/jeb_thomas.jpeg")
user10 = User.create!(email: "tasha_michaels@aol.com", username: "tasha_michaels", password: "password", profile_pic_url: "https://s3.amazonaws.com/lets-meet-dev/user_profile_pictures/tasha_michaels.jpeg")
user11 = User.create!(email: "ronnie_anderson@gmail.com", username: "ronnie_anderson", password: "password", profile_pic_url: "https://s3.amazonaws.com/lets-meet-dev/user_profile_pictures/ronnie_anderson.jpeg")
user12 = User.create!(email: "sam_samuels@gmail.com", username: "sam_samuels", password: "password", profile_pic_url: "https://s3.amazonaws.com/lets-meet-dev/user_profile_pictures/sam_samuels.jpeg")
user13 = User.create!(email: "herbert_chan@aol.com", username: "herbert_chan", password: "password", profile_pic_url: "https://s3.amazonaws.com/lets-meet-dev/user_profile_pictures/herbert_chan.jpeg")
user14 = User.create!(email: "jenna_williams@gmail.com", username: "jenna_williams", password: "password", profile_pic_url: "https://s3.amazonaws.com/lets-meet-dev/user_profile_pictures/jenna_williams.jpeg")
user15 = User.create!(email: "priya_patel@hotmail.com", username: "priya_patel", password: "password", profile_pic_url: "https://s3.amazonaws.com/lets-meet-dev/user_profile_pictures/priya_patel.jpeg")
user16 = User.create!(email: "evan_carlson@aol.com", username: "evan_carlson", password: "password", profile_pic_url: "https://s3.amazonaws.com/lets-meet-dev/user_profile_pictures/evan_carlson.jpeg")
user17 = User.create!(email: "daniel_sun@gmail.com", username: "daniel_sun", password: "password", profile_pic_url: "https://s3.amazonaws.com/lets-meet-dev/user_profile_pictures/daniel_sun.jpeg")
user18 = User.create!(email:"steven_trico@gmail.com", username: "Steven_Trico", password: "password", profile_pic_url: "https://s3.amazonaws.com/lets-meet-dev/user_profile_pictures/steven_trico.jpeg
")
user19 = User.create!(email: "michele_peters@gmail.com", username: "michele_peters", password: "password", profile_pic_url: "https://s3.amazonaws.com/lets-meet-dev/user_profile_pictures/michele_peters.jpeg")
user20 = User.create!(email: "heather_dorer@aol.com", username: "heather_dorer", password: "password", profile_pic_url: "https://s3.amazonaws.com/lets-meet-dev/user_profile_pictures/heather_dorer.jpeg")

# Groups
group1 = Group.create!(
  name: "California Women Bikers",
  category: "Sports & Fitness",
  location: "San Francisco, CA",
  description:
  "We are women who love to bike!
  We go on weekly biking rides as well as have talks about
  all things bicycles. Come join us if you are someone who likes
  biking as well!",
  creator_id: user20.id,
  founded_date: Date.new,
  image_url: "https://s3.amazonaws.com/lets-meet-dev/group_background_image/california_women_bikers_bg.png"
)

# group2 = Group.create!(
#   name: "NY City Ballerz",
#   category: "Sports & Fitness",
#   location: "New York, NY",
#   description:
#   "We are people who love to play basketball.
#   We play recreational basketball regularly, as well
#   as have a league for more competitive players. And
#   we also have random BBQs. Come and check us out if you
#   are into any of the above."
#   creator_id:
# )
#
# group3 = Group.create!(
#   name: "Pickup Football in NYC",
#   category: "Sports & Fitness",
#   location: "New York, NY",
#   description:
#   "Do you like to play football? Then come join
#   our LetsMeet group! We are a group of football junkies
#   who love to play and talk all things football. Not only do we play
#   pickup football regularly, but we also meet at members' houses to watch
#   NFL games. Both men and women are welcome!"
# )
#
# group4 = Group.create!(
#   name: "Beer & Hikes",
#   category: "Outdoors & Adventure",
#   location: "New York, NY",
#   description:
#   "We hike. We drink beer. We hike while
#   drinking beer. It's really that simple.
#   Come join us if you like beer and/or hiking.",
#   creator_id:
# )
#
# group4 = Group.create!(
#   name: "Joggers and Bloggers",
#   category: "Outdoors & Adventure",
#   location: "San Francisco, CA",
#   description:
#   "We are a group of avid runners who go on long group jogs and
#   then blog about them. We blog about jogging, the places we see when
#   we jog, and tips and advice for other joggers. We take our jogging
#   AND blogging very seriously. Please do not attend our LetsMeet groups
#   if you are not interested in both of these. But if you are, feel free to
#   come check us out!",
#   creator_id:
# )
#
group5 = Group.create!(
  name: "Radiohead Fanatics of NYC",
  category: "Music",
  location: "New York, NY",
  description:
  "We are obsessed with Radiohead. Every week we
  listen to one of their albums and discuss it afterward.
  We also do other random Radiohead things, like going to their
  concerts, learning how to play their music on various instruments...
  it is so much fun! If you love Radiohead as much as us come join!
  Please, NO Coldplay fans. They are Radiohead wannabees with no
  taste in music.",
  creator_id: user2.id,
  founded_date: Date.new,
  image_url: "https://s3.amazonaws.com/lets-meet-dev/group_background_image/radiohead_fanatics_NYC_bg.jpeg"
)
#
# group6 = Group.create!(
#   name: "Desi Drinkers",
#   category: "Food and Drink",
#   location: "New York, NY",
#   descripton:
#   "We are young Desis in our 20s and
#   30s who love to go out and drink. We
#   try to go to new bars throughout the city
#   and always have a good time. Come join us!"
#   creator_id:
# )
#
# group7 = Group.create!(
#   name: "San Fran Book Club",
#   category: "Book Clubs",
#   location: "San Francisco, CA",
#   description:
#   "We LOVE to read. Every month one member
#   picks a book and then hosts a book club meeting
#   at their house. We are always looking for new members,
#   but please, ONLY PEOPLE WHO WILL ACTUALLY READ THE BOOKS.
#   There is no point in joining if you are not going to read.
#   We only want people who will take the book club seriously.
#   Thanks! Come join us!",
#   creator_id:
# )
#
# group8 = Group.create!(
#   name: "Young readers of NYC",
#   category: "Book Clubs",
#   location: "New York, NY",
#   description:
#   " We are men and women in their 20s who like to
#   meet once a month to have a drink and discuss a book.
#   We often meet at bars or other members' houses. We read
#   a variety of genres, including both fiction and nonfiction
#   books. We are always looking for more avid readers like ourselves,
#   so please join if you are love to read!",
#   creator_id:
# )
#
group9 = Group.create!(
  name: "Denver Wake n' Bake",
  category: "Food and Drink",
  location: "Denver, CO",
  description: "Love to cook?
  Are you an early riser? Then our LetsMeet group
  is for you! We are a group of people who love to wake
  up at the crack of dawn and bake, bake, bake! We bake cookies, cakes,
  savory dishes - you name it, we bake it. We also hold bake sales to
  raise money for charity. We are always looking for new bakers, so please
  come join if you are interested!",
  founded_date: Date.new,
  image_url: "https://s3.amazonaws.com/lets-meet-dev/group_background_image/radiohead_fanatics_NYC_bg.jpeg",
  creator_id: user4.id
)

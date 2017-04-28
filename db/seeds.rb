# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'rubygems'
require 'faker'

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
  founded_date: "2014-10-10",
  image_url: "https://s3.amazonaws.com/lets-meet-dev/group_background_image/california_women_bikers_bg.png"
)

group2 = Group.create!(
  name: "NY City Ballerz",
  category: "Sports & Fitness",
  location: "New York, NY",
  description:
  "We are people who love to play basketball.
  We play recreational basketball regularly, as well
  as have a league for more competitive players. And
  we also have random BBQs. Come and check us out if you
  are into any of the above.",
  creator_id: user3.id,
  founded_date: "2010-07-01",
  image_url: "https://s3.amazonaws.com/lets-meet-dev/group_background_image/ny_city_ballerz_bg.png"
)

group3 = Group.create!(
  name: "Pickup Football in NYC",
  category: "Sports & Fitness",
  location: "New York, NY",
  description:
  "Do you like to play football? Then come join
  our LetsMeet group! We are a group of football junkies
  who love to play and talk all things football. Not only do we play
  pickup football regularly, but we also meet at members' houses to watch
  NFL games. Both men and women are welcome!",
  founded_date: "2016-08-23",
  creator_id: user11.id,
  image_url: "https://s3.amazonaws.com/lets-meet-dev/group_background_image/pickup_football_nyc_bg.jpeg"
)

group4 = Group.create!(
  name: "Beer & Hikes",
  category: "Outdoors & Adventure",
  location: "New York, NY",
  description:
  "We hike. We drink beer. We hike while
  drinking beer. It's really that simple.
  Come join us if you like beer and/or hiking.",
  founded_date: "2015-02-03",
  creator_id: user4.id,
  image_url: "https://s3.amazonaws.com/lets-meet-dev/group_background_image/beer_hikes_bg.JPG"
)

group5 = Group.create!(
  name: "Joggers and Bloggers",
  category: "Outdoors & Adventure",
  location: "San Francisco, CA",
  description:
  "We are a group of avid runners who go on long group jogs and
  then blog about them. We blog about jogging, the places we see when
  we jog, and tips and advice for other joggers. We take our jogging
  AND blogging very seriously. Please do not attend our LetsMeet groups
  if you are not interested in both of these. But if you are, feel free to
  come check us out!",
  founded_date: "2013-04-18",
  creator_id: user13.id,
  image_url: "https://s3.amazonaws.com/lets-meet-dev/group_background_image/san_fran_book_club_bg.jpeg"
)
#
group6 = Group.create!(
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
  founded_date: "2012-10-02",
  image_url: "https://s3.amazonaws.com/lets-meet-dev/group_background_image/radiohead_fanatics_NYC_bg.jpeg"
)

group7 = Group.create!(
  name: "Desi Drinkers",
  category: "Food and Drink",
  location: "New York, NY",
  description: Faker::Hipster.paragraph(60),
  founded_date: "2010-08-08",
  creator_id: user15.id,
  image_url: "https://s3.amazonaws.com/lets-meet-dev/group_background_image/desi_drinkers_bg.jpg"
)

group8 = Group.create!(
  name: "San Fran Book Club",
  category: "Book Clubs",
  location: "San Francisco, CA",
  description:
  "We LOVE to read. Every month one member
  picks a book and then hosts a book club meeting
  at their house. We are always looking for new members,
  but please, ONLY PEOPLE WHO WILL ACTUALLY READ THE BOOKS.
  There is no point in joining if you are not going to read.
  We only want people who will take the book club seriously.
  Thanks! Come join us!",
  founded_date: "2013-01-15",
  creator_id: user20.id,
  image_url: "https://s3.amazonaws.com/lets-meet-dev/group_background_image/san_fran_book_club_bg.jpeg"
)

group9 = Group.create!(
  name: "Young readers of NYC",
  category: "Book Clubs",
  location: "New York, NY",
  description:
  " We are men and women in their 20s who like to
  meet once a month to have a drink and discuss a book.
  We often meet at bars or other members' houses. We read
  a variety of genres, including both fiction and nonfiction
  books. We are always looking for more avid readers like ourselves,
  so please join if you are love to read!",
  founded_date: "2017-04-01",
  creator_id: user19.id,
  image_url: "https://s3.amazonaws.com/lets-meet-dev/group_background_image/young_readers_nyc_bg.jpg"
)

group10 = Group.create!(
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
  founded_date: "2014-06-01",
  image_url: "https://s3.amazonaws.com/lets-meet-dev/group_background_image/denver_wake_n_bake_bg.jpg",
  creator_id: user4.id
)

group11 = Group.create!(
  name: "Pokemon",
  category: "Outdoors & Adventure",
  location: "Denver, CO",
  description: Faker::Hipster.paragraph(60),
  founded_date: Faker::Date.backward(720),
  image_url: "https://s3.amazonaws.com/lets-meet-dev/group_background_image/pokemon_lover_bg.png",
  creator_id: user4.id
)

group12 = Group.create!(
  name: "Piano Players of New York",
  category: "Music",
  location: "New York, NY",
  description: Faker::Hipster.paragraph(60),
  founded_date: Faker::Date.backward(720),
  image_url: "https://s3.amazonaws.com/lets-meet-dev/group_background_image/piano_players_ny.png",
  creator_id: user9.id
)

group13 = Group.create!(
  name: "We Love Wine!",
  category: "Food and Drink",
  location: "San Francisco, CA",
  description: Faker::Hipster.paragraph(60),
  founded_date: Faker::Date.backward(720),
  image_url: "https://s3.amazonaws.com/lets-meet-dev/group_background_image/wine_bg.jpg",
  creator_id: user10.id
)

group14 = Group.create!(
  name: "Tennis Round Robin",
  category: "Sports",
  location: "New York, NY",
  description: Faker::Hipster.paragraph(60),
  founded_date: Faker::Date.backward(720),
  image_url: "https://s3.amazonaws.com/lets-meet-dev/group_background_image/tennis_bg.jpeg",
  creator_id: user4.id
)


group15 = Group.create!(
  name: "Super Smash Bros Fans",
  category: "Sports",
  location: "Denver, CO",
  description: Faker::Hipster.paragraph(60),
  founded_date: Faker::Date.backward(720),
  image_url: "https://s3.amazonaws.com/lets-meet-dev/group_background_image/super_smash_bros_bg.jpeg",
  creator_id: user4.id
)

group16 = Group.create!(
  name: "We Sit On Sofas And Watch TV",
  category: "Food and Drink",
  location: "New York, NY",
  description: Faker::Hipster.paragraph(60),
  founded_date: Faker::Date.backward(720),
  image_url: "https://s3.amazonaws.com/lets-meet-dev/group_background_image/sit_tv_bg.jpeg",
  creator_id: user3.id
)

group17 = Group.create!(
  name: "Settlers of Catan Fanatics",
  category: "Games",
  location: "Denver, CO",
  description: Faker::Hipster.paragraph(60),
  founded_date: Faker::Date.backward(720),
  image_url: "https://s3.amazonaws.com/lets-meet-dev/group_background_image/settlers_of_catan_bg.jpg",
  creator_id: user12.id
)

group18 = Group.create!(
  name: "Chess! Chess! Chess!",
  category: "Games",
  location: "New York, NY",
  description: Faker::Hipster.paragraph(60),
  founded_date: Faker::Date.backward(720),
  image_url: "https://s3.amazonaws.com/lets-meet-dev/group_background_image/chess_bg.jpeg",
  creator_id: user12.id
)

group19 = Group.create!(
  name: "Magic the Gathering Group",
  category: "Games",
  location: "Denver, CO",
  description: Faker::Hipster.paragraph(60),
  founded_date: Faker::Date.backward(720),
  image_url: "https://s3.amazonaws.com/lets-meet-dev/group_background_image/magic_gathering_bg.png",
  creator_id: user14.id
)

group20 = Group.create!(
  name: "We Love Teddy Bears",
  category: "Games",
  location: "Denver, CO",
  description: Faker::Hipster.paragraph(60),
  founded_date: Faker::Date.backward(720),
  image_url: "https://s3.amazonaws.com/lets-meet-dev/group_background_image/teddy_bears.jpg",
  creator_id: user10.id
)

group21 = Group.create!(
  name: "Swing Dancin' in the City",
  category: "Games",
  location: "New York, NYC",
  description: Faker::Hipster.paragraph(60),
  founded_date: Faker::Date.backward(720),
  image_url: "https://s3.amazonaws.com/lets-meet-dev/group_background_image/swing_dancing_bg.png",
  creator_id: user12.id
)

group22 = Group.create!(
  name: "Tech Talks",
  category: "Tech",
  location: "San Francisco, CA",
  description: Faker::Hipster.paragraph(60),
  founded_date: Faker::Date.backward(720),
  image_url: "https://s3.amazonaws.com/lets-meet-dev/group_background_image/tech_talks.png",
  creator_id: user12.id
)

group23 = Group.create!(
  name: "Java Junkies",
  category: "Tech",
  location: "Denver, CO",
  description: Faker::Hipster.paragraph(60),
  founded_date: Faker::Date.backward(720),
  image_url: "https://s3.amazonaws.com/lets-meet-dev/group_background_image/java_junkies_bg.jpg",
  creator_id: user12.id
)

group24 = Group.create!(
  name: "Improv Actors and Actresses of San Francisco",
  category: "Games",
  location: "San Francisco, CA",
  description: Faker::Hipster.paragraph(60),
  founded_date: Faker::Date.backward(720),
  image_url: "https://s3.amazonaws.com/lets-meet-dev/group_background_image/improv_acting_bg.jpeg",
  creator_id: user17.id
)
#Memberships

#Group creators' memberships
membership1 = Membership.create!({ group_id: group1.id, member_id: user20.id})
membership2 = Membership.create!({ group_id: group2.id, member_id: user3.id})
membership3 = Membership.create!({ group_id: group3.id, member_id: user11.id})
membership4 = Membership.create!({ group_id: group4.id, member_id: user4.id})
membership5 = Membership.create!({ group_id: group5.id, member_id: user13.id})
membership6 = Membership.create!({ group_id: group6.id, member_id: user2.id})
membership7 = Membership.create!({ group_id: group7.id, member_id: user15.id})
membership8 = Membership.create!({ group_id: group8.id, member_id: user20.id})
membership9 = Membership.create!({ group_id: group9.id, member_id: user19.id})
membership9 = Membership.create!({ group_id: group10.id, member_id: user4.id})

# Other Memberships
membership10 = Membership.create!({ group_id: group1.id, member_id: user4.id})
membership11 = Membership.create!({ group_id: group1.id, member_id: user5.id})
membership12 = Membership.create!({ group_id: group1.id, member_id: user7.id})
membership13 = Membership.create!({ group_id: group1.id, member_id: user8.id})
membership14 = Membership.create!({ group_id: group1.id, member_id: user10.id})

membership15 = Membership.create!({ group_id: group2.id, member_id: user16.id})
membership16 = Membership.create!({ group_id: group2.id, member_id: user17.id})
membership17 = Membership.create!({ group_id: group2.id, member_id: user18.id})
membership18 = Membership.create!({ group_id: group2.id, member_id: user19.id})

membership19 = Membership.create!({ group_id: group3.id, member_id: user1.id})
membership20 = Membership.create!({ group_id: group3.id, member_id: user2.id})
membership21 = Membership.create!({ group_id: group3.id, member_id: user3.id})
membership22 = Membership.create!({ group_id: group3.id, member_id: user7.id})

membership23 = Membership.create!({ group_id: group4.id, member_id: user5.id})
membership24 = Membership.create!({ group_id: group4.id, member_id: user6.id})
membership25 = Membership.create!({ group_id: group4.id, member_id: user7.id})
membership26 = Membership.create!({ group_id: group4.id, member_id: user8.id})
membership27 = Membership.create!({ group_id: group4.id, member_id: user9.id})
membership28 = Membership.create!({ group_id: group4.id, member_id: user10.id})
membership29 = Membership.create!({ group_id: group4.id, member_id: user19.id})
membership30 = Membership.create!({ group_id: group4.id, member_id: user18.id})
membership31 = Membership.create!({ group_id: group4.id, member_id: user17.id})
membership32 = Membership.create!({ group_id: group4.id, member_id: user16.id})
membership33 = Membership.create!({ group_id: group4.id, member_id: user15.id})
membership34 = Membership.create!({ group_id: group4.id, member_id: user14.id})
membership35 = Membership.create!({ group_id: group5.id, member_id: user5.id})
membership36 = Membership.create!({ group_id: group5.id, member_id: user6.id})
membership37 = Membership.create!({ group_id: group5.id, member_id: user7.id})
membership38 = Membership.create!({ group_id: group5.id, member_id: user8.id})

membership39 = Membership.create!({ group_id: group7.id, member_id: user2.id})
membership40 = Membership.create!({ group_id: group7.id, member_id: user4.id})
membership41 = Membership.create!({ group_id: group7.id, member_id: user6.id})
membership42 = Membership.create!({ group_id: group7.id, member_id: user8.id})
membership43 = Membership.create!({ group_id: group7.id, member_id: user10.id})
membership44 = Membership.create!({ group_id: group7.id, member_id: user12.id})
membership45 = Membership.create!({ group_id: group7.id, member_id: user14.id})
membership46 = Membership.create!({ group_id: group7.id, member_id: user11.id})


#Events

event1 = Event.create!(
  name: "Weekly Hike!",
  organizer_id: user4.id,
  group_id: group4.id,
  location_name: "Inwood Hill Park",
  location_address: "Dyckman St, New York, NY 10452",
  time: "03:00:00",
  date: "2017-05-06",
  description: Faker::Hipster.paragraph(60)
)

event2 = Event.create!(
  name: "Weekly Hike!",
  organizer_id: user4.id,
  group_id: group4.id,
  location_name: "Inwood Hill Park",
  location_address: "Dyckman St, New York, NY 10452",
  time: "03:00:00",
  date: "2017-05-13",
  description: Faker::Hipster.paragraph(60)
)

event3 = Event.create!(
  name: "Weekly Hike!",
  organizer_id: user4.id,
  group_id: group4.id,
  location_name: "Inwood Hill Park",
  location_address: "Dyckman St, New York, NY 10452",
  time: "03:00:00",
  date: "2017-05-20",
  description: Faker::Hipster.paragraph(60)
)

event4 = Event.create!(
  name: "Weekly Hike!",
  organizer_id: user4.id,
  group_id: group4.id,
  location_name: "Inwood Hill Park",
  location_address: "Dyckman St, New York, NY 10452",
  time: "03:00",
  date: "2017-05-27",
  description: Faker::Hipster.paragraph(60)
)

event5 = Event.create!(
  name: "Desi Drinkin'",
  organizer_id: user15.id,
  group_id: group7.id,
  location_name: "Old Town Bar and Restaurant",
  location_address: "45 E 18th St, New York, NY 10003",
  time: "06:00",
  date: Faker::Date.forward(60),
  description: Faker::Hipster.paragraph(30)
)

event6 = Event.create!(
  name: "Desi Drinkin'",
  organizer_id: user15.id,
  group_id: group7.id,
  location_name: "Old Town Bar and Restaurant",
  location_address: "45 E 18th St, New York, NY 10003",
  time: "06:00",
  date: Faker::Date.forward(60),
  description: Faker::Hipster.paragraph(30)
)

event7 = Event.create!(
  name: "Desi Drinkin'",
  organizer_id: user15.id,
  group_id: group7.id,
  location_name: "Old Town Bar and Restaurant",
  location_address: "45 E 18th St, New York, NY 10003",
  time: "06:00",
  date: Faker::Date.forward(60),
  description: Faker::Hipster.paragraph(30)
)

event8 = Event.create!(
  name: "Desi Drinkin'",
  organizer_id: user15.id,
  group_id: group7.id,
  location_name: "Old Town Bar and Restaurant",
  location_address: "45 E 18th St, New York, NY 10003",
  time: "06:00",
  date: Faker::Date.forward(60),
  description: Faker::Hipster.paragraph(30)
)

event9 = Event.create!(
  name: "Desi Drinkin'",
  organizer_id: user15.id,
  group_id: group7.id,
  location_name: "Old Town Bar and Restaurant",
  location_address: "45 E 18th St, New York, NY 10003",
  time: "06:00",
  date: Faker::Date.forward(60),
  description: Faker::Hipster.paragraph(30)
)





#RSVPs:

rsvp1 = Rsvp.create!({attendee_id: user4.id, event_id: event1.id})
rsvp2 = Rsvp.create!({attendee_id: user5.id, event_id: event1.id})
rsvp3 = Rsvp.create!({attendee_id: user8.id, event_id: event1.id})
rsvp4 = Rsvp.create!({attendee_id: user9.id, event_id: event1.id})

rsvp5 = Rsvp.create!({attendee_id: user4.id, event_id: event2.id})
rsvp6 = Rsvp.create!({attendee_id: user5.id, event_id: event2.id})
rsvp7 = Rsvp.create!({attendee_id: user8.id, event_id: event2.id})
rsvp8 = Rsvp.create!({attendee_id: user9.id, event_id: event2.id})

rsvp9 = Rsvp.create!({attendee_id: user4.id, event_id: event3.id})
rsvp10 = Rsvp.create!({attendee_id: user5.id, event_id: event3.id})
rsvp11 = Rsvp.create!({attendee_id: user8.id, event_id: event3.id})
rsvp12 = Rsvp.create!({attendee_id: user9.id, event_id: event3.id})

rsvp13 = Rsvp.create!({attendee_id: user4.id, event_id: event4.id})
rsvp14 = Rsvp.create!({attendee_id: user5.id, event_id: event4.id})
rsvp15 = Rsvp.create!({attendee_id: user8.id, event_id: event4.id})
rsvp16= Rsvp.create!({attendee_id: user9.id, event_id: event4.id})

rsvp17 = Rsvp.create!({attendee_id: user15.id, event_id: event5.id})
rsvp18 = Rsvp.create!({attendee_id: user2.id, event_id: event5.id})
rsvp19 = Rsvp.create!({attendee_id: user4.id, event_id: event5.id})
rsvp20= Rsvp.create!({attendee_id: user8.id, event_id: event5.id})
rsvp21= Rsvp.create!({attendee_id: user10.id, event_id: event5.id})

rsvp22 = Rsvp.create!({attendee_id: user15.id, event_id: event6.id})
rsvp23 = Rsvp.create!({attendee_id: user2.id, event_id: event6.id})
rsvp24 = Rsvp.create!({attendee_id: user4.id, event_id: event6.id})
rsvp25= Rsvp.create!({attendee_id: user8.id, event_id: event6.id})
rsvp26= Rsvp.create!({attendee_id: user10.id, event_id: event6.id})

rsvp27 = Rsvp.create!({attendee_id: user15.id, event_id: event7.id})
rsvp28 = Rsvp.create!({attendee_id: user2.id, event_id: event7.id})
rsvp29 = Rsvp.create!({attendee_id: user4.id, event_id: event7.id})
rsvp30= Rsvp.create!({attendee_id: user8.id, event_id: event7.id})
rsvp31= Rsvp.create!({attendee_id: user10.id, event_id: event7.id})

rsvp32 = Rsvp.create!({attendee_id: user15.id, event_id: event8.id})
rsvp33 = Rsvp.create!({attendee_id: user2.id, event_id: event8.id})
rsvp34 = Rsvp.create!({attendee_id: user4.id, event_id: event8.id})
rsvp35= Rsvp.create!({attendee_id: user8.id, event_id: event8.id})
rsvp36= Rsvp.create!({attendee_id: user10.id, event_id: event8.id})

rsvp37 = Rsvp.create!({attendee_id: user15.id, event_id: event9.id})
rsvp38 = Rsvp.create!({attendee_id: user2.id, event_id: event9.id})
rsvp39 = Rsvp.create!({attendee_id: user4.id, event_id: event9.id})
rsvp40= Rsvp.create!({attendee_id: user8.id, event_id: event9.id})
rsvp41= Rsvp.create!({attendee_id: user10.id, event_id: event9.id})

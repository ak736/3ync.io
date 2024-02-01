import bcrypt from "bcryptjs"

const users = [
  {
    name: 'Aniket',
    email: 'aniketkir63@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Kokila',
    email: 'kokila@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  }
]

export default users

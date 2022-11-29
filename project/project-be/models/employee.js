const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

const EmployeeSchema = new Schema({
    name: String,
    password: String,
    email: {type: String, unique: String},
    zone: String,
    image: String,
    phone: String,
    enrollDate: {type: Date, default: Date.now},
    status: {type: String, default: 'Working'}
})

EmployeeSchema.methods.gravatar = function(size) {
    if(!this.size) size = 200
    if(!this.email) {
        return 'https://gravatar.com/avatar/?s' + size + '&d=retro'
    }else{
        var md5 = bcrypt.hashSync(this.email, 10)
        return 'https://gravatar.com/avatar/' + md5 + '?s' + size + '&d=retro'
    }
}


module.exports = mongoose.model('Employee', EmployeeSchema)
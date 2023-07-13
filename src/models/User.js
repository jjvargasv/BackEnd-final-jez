const { Schema, model } = require( 'mongoose' );

const UserSchema = new Schema(
    {
        name: {
            type: 'string',
            required: true,
        },
        email: {
            type: 'string',
            required: true,
            unique: true
        },
        password: {
            type: 'string',
            required: true,
        }
    },{
        timestamps: true
    }
);


module.exports = model( 'User', UserSchema );
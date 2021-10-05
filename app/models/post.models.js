module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            username: {
                type : String,
                required: true,
                unique: true
            },
            email: {
                type : String,
                required: true,
                unique: true
            },
            password: {
                type : String,
                required: true
            },
            first_name: {
                type : String,
                required: true
            },
            last_name: String,
            address: String,
            city: String,
            province: String,
            country: String,
            softDeleted:{
                type: Boolean,
                default: false,
            },
            deletedAt:{
                type: Date,
                default: null
            }
        },
        { timestamps: true }
    )

    schema.method("toJSON", function() {
        const {__v,_id, ...object} = this.toObject()
        object.id = _id
        return object
    })

    const Post = mongoose.model("posts", schema)
    return Post
}